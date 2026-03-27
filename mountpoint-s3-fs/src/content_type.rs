/// Controls how content types are detected for uploaded objects.
#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub enum ContentTypeDetection {
    /// No content type detection.
    #[default]
    Disabled,
    /// Detect content type by file extension first, falling back to magic bytes via `infer`.
    Auto,
}

/// Try to detect MIME type by file extension.
fn detect_by_extension(key: &str) -> Option<String> {
    mime_guess::from_path(key).first().map(|m| m.to_string())
}

/// Try to detect MIME type by magic bytes.
fn detect_by_magic(bytes: &[u8]) -> Option<String> {
    infer::get(bytes).map(|t| t.mime_type().to_owned())
}

/// Infer the content type of a file.
///
/// When `mode` is [`ContentTypeDetection::Auto`], detection uses file extension first
/// (via `mime_guess`), falling back to magic bytes (via `infer`) when available.
/// Extension-based detection is preferred because magic bytes misclassify text-based
/// formats like SVG as `text/plain`.
pub fn infer_content_type(key: &str, initial_bytes: Option<&[u8]>, mode: ContentTypeDetection) -> Option<String> {
    match mode {
        ContentTypeDetection::Disabled => return None,
        ContentTypeDetection::Auto => {}
    }

    if let Some(mime) = detect_by_extension(key) {
        return Some(mime);
    }

    if let Some(bytes) = initial_bytes {
        return detect_by_magic(bytes);
    }

    None
}

/// Infer the content type of a file (async).
///
/// Same logic as [`infer_content_type`]. No blocking work is involved, so this is
/// a thin async wrapper for API compatibility.
pub async fn infer_content_type_async(
    key: &str,
    initial_bytes: Option<&[u8]>,
    mode: ContentTypeDetection,
) -> Option<String> {
    infer_content_type(key, initial_bytes, mode)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn disabled_returns_none() {
        let result = infer_content_type("photo.png", None, ContentTypeDetection::Disabled);
        assert_eq!(result, None);
    }

    #[test]
    fn auto_prefers_extension() {
        // Even with JPEG bytes, .png extension wins
        let jpeg_header = b"\xFF\xD8\xFF\xE0\x00\x10JFIF";
        let result = infer_content_type("photo.png", Some(jpeg_header), ContentTypeDetection::Auto);
        assert_eq!(result, Some("image/png".to_owned()));
    }

    #[test]
    fn auto_falls_back_to_magic_bytes() {
        let jpeg_header = b"\xFF\xD8\xFF\xE0\x00\x10JFIF";
        let result = infer_content_type("no_extension", Some(jpeg_header), ContentTypeDetection::Auto);
        assert_eq!(result, Some("image/jpeg".to_owned()));
    }

    #[test]
    fn auto_extension_without_bytes() {
        let result = infer_content_type("photo.png", None, ContentTypeDetection::Auto);
        assert_eq!(result, Some("image/png".to_owned()));
    }

    #[test]
    fn returns_none_when_unknown() {
        let result = infer_content_type("no_extension", None, ContentTypeDetection::Auto);
        assert_eq!(result, None);
    }

    #[test]
    fn svg_detected_by_extension_not_magic() {
        let svg_content = b"<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"40\"/></svg>";
        let result = infer_content_type("image.svg", Some(svg_content), ContentTypeDetection::Auto);
        assert_eq!(result, Some("image/svg+xml".to_owned()));
    }

    #[tokio::test]
    async fn async_matches_sync() {
        let jpeg_header = b"\xFF\xD8\xFF\xE0\x00\x10JFIF";
        let result = infer_content_type_async("photo.png", Some(jpeg_header), ContentTypeDetection::Auto).await;
        assert_eq!(result, Some("image/png".to_owned()));
    }

    #[tokio::test]
    async fn async_falls_back_to_magic() {
        let jpeg_header = b"\xFF\xD8\xFF\xE0\x00\x10JFIF";
        let result = infer_content_type_async("no_extension", Some(jpeg_header), ContentTypeDetection::Auto).await;
        assert_eq!(result, Some("image/jpeg".to_owned()));
    }
}
