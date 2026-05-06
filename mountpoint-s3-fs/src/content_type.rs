/// Controls how content types are detected for uploaded objects.
#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum ContentTypeDetection {
    /// No content type detection.
    #[default]
    Disabled,
    /// Detect content type by file extension via `mime_guess`.
    Auto,
}

/// Infer the content type of a file from its key's extension.
pub fn infer_content_type(key: &str, mode: ContentTypeDetection) -> Option<String> {
    match mode {
        ContentTypeDetection::Disabled => None,
        ContentTypeDetection::Auto => mime_guess::from_path(key).first().map(|m| m.to_string()),
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
}
