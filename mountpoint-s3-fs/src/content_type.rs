/// Controls how content types are detected for uploaded objects.
#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum ContentTypeDetection {
    /// No content type detection.
    #[default]
    Disabled,
    /// Detect content type by file extension via `mime_guess`.
    Auto,
}

pub const DEFAULT_CONTENT_TYPE: &str = "binary/octet-stream";

/// Infer the content type of a file from its key's extension.
pub fn infer_content_type(key: &str, mode: ContentTypeDetection) -> Option<String> {
    match mode {
        ContentTypeDetection::Disabled => None,
        ContentTypeDetection::Auto => mime_guess::from_path(key).first().map(|m| m.to_string()),
    }
}

/// Infer the content type of a file from its key's extension, falling back to S3's default content type.
pub fn infer_content_type_or_default(key: &str, mode: ContentTypeDetection) -> Option<String> {
    match mode {
        ContentTypeDetection::Disabled => None,
        ContentTypeDetection::Auto => {
            Some(infer_content_type(key, mode).unwrap_or_else(|| DEFAULT_CONTENT_TYPE.to_owned()))
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    #[test_case("photo.png", ContentTypeDetection::Disabled, None; "disabled returns none")]
    #[test_case("photo.png", ContentTypeDetection::Auto, Some("image/png"); "png extension")]
    #[test_case("image.svg", ContentTypeDetection::Auto, Some("image/svg+xml"); "svg extension")]
    #[test_case("no_extension", ContentTypeDetection::Auto, None; "no extension")]
    fn infer_content_type_returns_expected_value(key: &str, mode: ContentTypeDetection, expected: Option<&str>) {
        let result = infer_content_type(key, mode);
        assert_eq!(result.as_deref(), expected);
    }

    #[test_case("photo.png", ContentTypeDetection::Auto, Some("image/png"); "png extension")]
    #[test_case("no_extension", ContentTypeDetection::Auto, Some(DEFAULT_CONTENT_TYPE); "no extension")]
    #[test_case("photo.png", ContentTypeDetection::Disabled, None; "disabled returns none")]
    fn infer_content_type_or_default_returns_expected_value(
        key: &str,
        mode: ContentTypeDetection,
        expected: Option<&str>,
    ) {
        let result = infer_content_type_or_default(key, mode);
        assert_eq!(result.as_deref(), expected);
    }
}
