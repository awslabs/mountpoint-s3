use std::{fmt::Debug, future::Future};

use async_channel::{Receiver, Sender};
use futures::task::{Spawn, SpawnError, SpawnExt};

/// Type-erasure for a [Spawn] implementation.
pub struct BoxRuntime(Box<dyn Spawn + Send + Sync>);

impl Spawn for BoxRuntime {
    fn spawn_obj(&self, future: futures::task::FutureObj<'static, ()>) -> Result<(), SpawnError> {
        self.0.spawn_obj(future)
    }
}

impl Debug for BoxRuntime {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_tuple("BoxRuntime").field(&"dyn").finish()
    }
}

impl BoxRuntime {
    pub fn new(runtime: impl Spawn + Sync + Send + 'static) -> Self {
        BoxRuntime(Box::new(runtime))
    }

    /// Spawns a task that polls the given future to completion and return
    /// a [RemoteResult] with its output.
    pub fn spawn_with_result<T, E, F>(&self, future: F) -> Result<RemoteResult<T, E>, SpawnError>
    where
        T: Send + 'static,
        E: Send + 'static,
        F: Future<Output = Result<T, E>> + Send + 'static,
    {
        let (sender, receiver) = result_channel();
        self.spawn(async move {
            let result = future.await;
            sender.send(result).await;
        })?;
        Ok(receiver)
    }
}

/// Creates an async one shot channel with a [RemoteResult] on the receiving end.
pub fn result_channel<T, E>() -> (ResultSender<T, E>, RemoteResult<T, E>) {
    let (sender, receiver) = async_channel::bounded(1);
    (ResultSender { sender }, RemoteResult { receiver, value: None })
}

/// Holds the result of a spawned task.
#[derive(Debug)]
pub struct RemoteResult<T, E> {
    receiver: Receiver<Result<T, E>>,
    value: Option<T>,
}

/// Sender side of a [RemoteResult].
pub struct ResultSender<T, E> {
    sender: Sender<Result<T, E>>,
}

impl<T, E> ResultSender<T, E> {
    pub async fn send(self, value: Result<T, E>) -> bool {
        self.sender.send(value).await.is_ok()
    }
}

impl<T, E> RemoteResult<T, E> {
    async fn receive(&mut self) -> Result<&mut Option<T>, E> {
        if self.value.is_none() {
            if let Ok(value) = self.receiver.recv().await {
                self.value = Some(value?);
            }
        }
        Ok(&mut self.value)
    }

    pub async fn get_mut(&mut self) -> Result<Option<&mut T>, E> {
        Ok(self.receive().await?.as_mut())
    }

    pub async fn into_inner(mut self) -> Result<Option<T>, E> {
        Ok(self.receive().await?.take())
    }
}

impl<T, E> Drop for RemoteResult<T, E> {
    fn drop(&mut self) {
        // Blocks to wait for the result and then drop it.
        // Ignore the error if the sender has already been dropped.
        _ = self.receiver.recv_blocking();
    }
}

#[cfg(test)]
mod tests {
    use std::sync::atomic::{AtomicBool, Ordering};
    use std::sync::Arc;

    use futures::executor::{block_on, ThreadPool};
    use test_case::test_case;

    use super::{result_channel, BoxRuntime};

    #[test_case(Ok(42))]
    #[test_case(Err("error"))]
    fn test_into_inner(result: Result<i32, &'static str>) {
        let expected = result;
        let (sender, receiver) = result_channel();
        block_on(sender.send(result));

        let result = block_on(receiver.into_inner()).transpose().unwrap();
        assert_eq!(result, expected);
    }

    #[test_case(Ok(42))]
    #[test_case(Err("error"))]
    fn test_get_mut(result: Result<i32, &'static str>) {
        let expected = result;
        let (sender, mut receiver) = result_channel();
        block_on(sender.send(result));

        let result = block_on(receiver.get_mut()).transpose().unwrap();
        match expected {
            Ok(expected_value) => assert!(matches!(result, Ok(value) if *value == expected_value)),
            Err(expected_error) => assert!(matches!(result, Err(error) if *error == *expected_error)),
        }
    }

    #[test]
    fn test_drop() {
        let runtime = BoxRuntime::new(ThreadPool::new().unwrap());

        struct Dropping(Arc<AtomicBool>);

        impl Drop for Dropping {
            fn drop(&mut self) {
                self.0.store(true, Ordering::SeqCst);
            }
        }

        let was_dropped = Arc::new(AtomicBool::new(false));
        let clone = was_dropped.clone();

        let result = runtime
            .spawn_with_result(async move { Ok::<_, &'static str>(Dropping(clone)) })
            .unwrap();
        drop(result);

        assert!(was_dropped.load(Ordering::SeqCst));
    }
}
