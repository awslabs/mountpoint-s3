use std::fmt::Debug;
use std::future::Future;
use std::pin::Pin;

use futures::task::{Spawn, SpawnError};

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
}

/// Holds a value lazily initialized when awaiting a future.
pub struct Lazy<T, E> {
    future: Option<PinFuture<T, E>>,
    value: Option<T>,
}

type PinFuture<T, E> = Pin<Box<dyn Future<Output = Result<T, E>> + Send>>;

impl<T, E> Lazy<T, E> {
    pub fn new(f: impl Future<Output = Result<T, E>> + Send + 'static) -> Self {
        Self {
            future: Some(Box::pin(f)),
            value: None,
        }
    }

    async fn force(&mut self) -> Result<(), E> {
        if let Some(f) = self.future.take() {
            self.value = Some(f.await?);
        }
        Ok(())
    }

    pub async fn get_mut(&mut self) -> Result<&mut T, E> {
        self.force().await?;
        Ok(self.value.as_mut().unwrap())
    }
}

impl<T, E> Debug for Lazy<T, E>
where
    T: Debug,
{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let mut s = f.debug_struct("Lazy");
        if let Some(value) = &self.value {
            s.field("value", value);
        } else {
            s.field("future", &"<pending>");
        }
        s.finish()
    }
}
