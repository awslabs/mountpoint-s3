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

    #[test]
    fn disabled_returns_none() {
        let result = infer_content_type("photo.png", ContentTypeDetection::Disabled);
        assert_eq!(result, None);
    }

    #[test]
    fn auto_detects_by_extension() {
        let result = infer_content_type("photo.png", ContentTypeDetection::Auto);
        assert_eq!(result, Some("image/png".to_owned()));
    }

    #[test]
    fn auto_detects_svg() {
        let result = infer_content_type("image.svg", ContentTypeDetection::Auto);
        assert_eq!(result, Some("image/svg+xml".to_owned()));
    }

    #[test]
    fn returns_none_when_no_extension() {
        let result = infer_content_type("no_extension", ContentTypeDetection::Auto);
        assert_eq!(result, None);
    }
}
