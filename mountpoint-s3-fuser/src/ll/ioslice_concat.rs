use std::io::IoSlice;

use smallvec::SmallVec;

pub(crate) trait IosliceConcat {
    fn iter_slices(&self) -> impl Iterator<Item = IoSlice<'_>> + '_;

    fn sum_len(&self) -> usize {
        self.iter_slices().map(|x| x.len()).fold(0usize, |a, b| {
            a.checked_add(b).expect("iovec size overflow")
        })
    }

    fn with_ioslice<R>(&self, f: impl FnOnce(&[IoSlice<'_>]) -> R) -> R {
        let mut iter = self.iter_slices();
        let Some(x0) = iter.next() else { return f(&[]) };
        let Some(x1) = iter.next() else {
            return f(&[x0]);
        };
        let Some(x2) = iter.next() else {
            return f(&[x0, x1]);
        };
        let v = SmallVec::<[IoSlice<'_>; 3]>::from_iter([x0, x1, x2].into_iter().chain(iter));
        f(v.as_slice())
    }
}

impl IosliceConcat for &[IoSlice<'_>] {
    fn iter_slices(&self) -> impl Iterator<Item = IoSlice<'_>> + '_ {
        self.iter().copied()
    }
}

impl<const N: usize> IosliceConcat for [IoSlice<'_>; N] {
    fn iter_slices(&self) -> impl Iterator<Item = IoSlice<'_>> + '_ {
        self.iter().copied()
    }
}

impl<A: IosliceConcat, B: IosliceConcat> IosliceConcat for (A, B) {
    fn iter_slices(&self) -> impl Iterator<Item = IoSlice<'_>> + '_ {
        self.0.iter_slices().chain(self.1.iter_slices())
    }
}

impl<A: IosliceConcat> IosliceConcat for Option<A> {
    fn iter_slices(&self) -> impl Iterator<Item = IoSlice<'_>> {
        self.iter().flat_map(|x| x.iter_slices())
    }
}
