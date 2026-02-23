use mountpoint_s3_client::checksums::crc32c::{self, Crc32c};
use thiserror::Error;

/// Server-side encryption configuration for newly created objects
#[derive(Debug, Clone)]
pub struct ServerSideEncryption {
    sse_type: Option<String>,
    sse_kms_key_id: Option<String>,
    checksum: Crc32c,
}

#[derive(Debug, Error)]
pub enum SseCorruptedError {
    #[error("Checksum mismatch. expected: {0:?}, actual: {1:?}")]
    ChecksumMismatch(Crc32c, Crc32c),
    #[error("SSE type mismatch. expected: {0:?}, actual: {1:?}")]
    TypeMismatch(String, Option<String>),
    #[error("SSE KMS key ID mismatch. expected: {0:?}, actual: {1:?}")]
    KeyMismatch(String, Option<String>),
}

impl Default for ServerSideEncryption {
    fn default() -> Self {
        Self {
            sse_type: Default::default(),
            sse_kms_key_id: Default::default(),
            checksum: Crc32c::new(0),
        }
    }
}

impl ServerSideEncryption {
    /// Construct SSE settings from raw values provided via CLI
    pub fn new(sse_type: Option<String>, sse_kms_key_id: Option<String>) -> Self {
        let checksum = Self::compute_checksum(sse_type.as_deref(), sse_kms_key_id.as_deref());
        Self {
            sse_type,
            sse_kms_key_id,
            checksum,
        }
    }

    /// Computes the checksum of SSE settings by combining two strings containing the type and the key
    /// Note, that this implementation yields the same result for Some("") and None, but we may safely
    /// assume that it will never be called with an empty string as one of its parameters.
    fn compute_checksum(sse_type: Option<&str>, sse_kms_key_id: Option<&str>) -> Crc32c {
        let mut hasher = crc32c::Hasher::new();
        if let Some(maybe_sse_type) = sse_type {
            hasher.update(maybe_sse_type.as_bytes());
        }
        if let Some(maybe_sse_kms_key_id) = sse_kms_key_id {
            hasher.update(maybe_sse_kms_key_id.as_bytes());
        }
        hasher.finalize()
    }

    fn validate(&self) -> Result<(), SseCorruptedError> {
        let computed = Self::compute_checksum(self.sse_type.as_deref(), self.sse_kms_key_id.as_deref());
        if computed == self.checksum {
            Ok(())
        } else {
            Err(SseCorruptedError::ChecksumMismatch(self.checksum, computed))
        }
    }

    /// Checks that SSE settings still match the checksum and returns the string representations of:
    /// 1. the SSE type as it is expected by S3 API;
    /// 2. and AWS KMS Key ID, if provided.
    pub fn into_inner(self) -> Result<(Option<String>, Option<String>), SseCorruptedError> {
        self.validate()?;
        Ok((self.sse_type, self.sse_kms_key_id))
    }

    /// Checks that values provided as arguments to this function match the values stored in the object.
    /// S3 will return some values for sse type and key even if they were not set on our side.
    /// We want to check only the values which we set.
    pub fn verify_response(
        &self,
        sse_type: Option<&str>,
        sse_kms_key_id: Option<&str>,
    ) -> Result<(), SseCorruptedError> {
        self.validate()?; // validate in-memory values, as we are using them to decide whether to skip the response check or not
        if let Some(stored_sse_type) = self.sse_type.as_deref()
            && Some(stored_sse_type) != sse_type
        {
            return Err(SseCorruptedError::TypeMismatch(
                stored_sse_type.to_string(),
                sse_type.map(str::to_string),
            ));
        }
        if let Some(stored_sse_kms_key_id) = self.sse_kms_key_id.as_deref()
            && Some(stored_sse_kms_key_id) != sse_kms_key_id
        {
            return Err(SseCorruptedError::KeyMismatch(
                stored_sse_kms_key_id.to_string(),
                sse_kms_key_id.map(str::to_string),
            ));
        }
        Ok(())
    }

    #[cfg(test)]
    pub fn corrupt_data(&mut self, sse_type: Option<String>, sse_kms_key_id: Option<String>) {
        self.sse_type = sse_type;
        self.sse_kms_key_id = sse_kms_key_id;
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kmr"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), Some("some_key_ali`s"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), None, Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), None)]
    #[test_case(Some("aws:kms"), None, Some("aws:kmr"), None)]
    #[test_case(None, None, Some("garbage"), None)]
    fn test_sse_corrupted_on_into_inner(
        sse_type: Option<&str>,
        key_id: Option<&str>,
        sse_type_corrupted: Option<&str>,
        key_id_corrupted: Option<&str>,
    ) {
        let mut sse = ServerSideEncryption::new(sse_type.map(String::from), key_id.map(String::from));
        sse.sse_type = sse_type_corrupted.map(String::from);
        sse.sse_kms_key_id = key_id_corrupted.map(String::from);
        sse.into_inner()
            .expect_err("into_inner() should produce an error when values do no match the checksum");
    }

    #[test_case(Some("aws:kms"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), None)]
    #[test_case(None, None)]
    fn test_sse_into_inner_ok(sse_type: Option<&str>, key_id: Option<&str>) {
        let sse = ServerSideEncryption::new(sse_type.map(String::from), key_id.map(String::from));
        let (returned_sse_type, returned_key_id) = sse
            .into_inner()
            .expect("into_inner() should return values when they match the checksum");
        assert_eq!(sse_type, returned_sse_type.as_deref());
        assert_eq!(key_id, returned_key_id.as_deref());
    }

    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kmr"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), Some("some_key_ali`s"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), None, Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), None)]
    fn test_sse_response_corrupted_on_verify_response(
        sse_type: Option<&str>,
        key_id: Option<&str>,
        sse_type_corrupted: Option<&str>,
        key_id_corrupted: Option<&str>,
    ) {
        let sse = ServerSideEncryption::new(sse_type.map(String::from), key_id.map(String::from));
        sse.verify_response(sse_type_corrupted, key_id_corrupted)
            .expect_err("verify_response() should produce an error when response values do no match the checksum");
    }

    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), None, Some("aws:kms"), Some("some_key_alias"))]
    #[test_case(None, None, Some("aws:kms"), Some("some_key_alias"))]
    fn test_sse_verify_response_ok(
        sse_type: Option<&str>,
        key_id: Option<&str>,
        sse_type_response: Option<&str>,
        key_id_response: Option<&str>,
    ) {
        let sse = ServerSideEncryption::new(sse_type.map(String::from), key_id.map(String::from));
        sse.verify_response(sse_type_response, key_id_response)
            .expect("verify_response() should return Ok(()) when values match the checksum")
    }
}
