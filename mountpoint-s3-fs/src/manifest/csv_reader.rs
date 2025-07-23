use csv::{DeserializeRecordsIntoIter, ReaderBuilder};
use serde::Deserialize;
use std::io::Read;

use super::InputManifestError;
use super::builder::InputManifestEntry;

pub struct CsvReader<R: Read> {
    reader: DeserializeRecordsIntoIter<R, CsvEntry>,
}

impl<R: Read> CsvReader<R> {
    pub fn new(reader: R) -> Self {
        let reader = ReaderBuilder::new()
            .has_headers(false)
            .from_reader(reader)
            .into_deserialize();
        Self { reader }
    }
}

impl<R: Read> Iterator for CsvReader<R> {
    type Item = Result<InputManifestEntry, InputManifestError>;

    fn next(&mut self) -> Option<Self::Item> {
        match self.reader.next() {
            Some(Ok(csv_entry)) => Some(csv_entry.try_into()),
            Some(Err(err)) => Some(Err(InputManifestError::from(err))),
            None => None,
        }
    }
}

/// CsvEntry represents a single row in an input CSV channel manifest file.
///
/// Note that data in this struct is not yet validated.
/// Specifically [partial_key] may contain forbidden symbols and be rejected later.
#[derive(Deserialize)]
struct CsvEntry {
    /// Partial key of the S3 object.
    ///
    /// Must not contain S3 prefix, when the prefix is mounted.
    /// May hold a directory marker (e.g. "dir1/dir2/"), which will be skipped
    /// and won't affect the file system structure.
    partial_key: String,
    /// Etag of the S3 object.
    etag: String,
    /// Size of the S3 object.
    size: usize,
}

impl TryInto<InputManifestEntry> for CsvEntry {
    type Error = InputManifestError;

    fn try_into(self) -> Result<InputManifestEntry, Self::Error> {
        InputManifestEntry::new(self.partial_key, self.etag, self.size)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    const CSV_ENTRY: &str = r#""{}","""etag1""",1024"#;

    const CSV_2_ENTRIES: &str = r#""key1","""etag1""",1024
"key2","""etag2""",2048"#;

    const CSV_MULTILINE_ENTRY: &str = r#""ke"",
y1","""etag1""",1024"#;

    #[test_case(&CSV_ENTRY.replace("{}", "key1"), &[
        InputManifestEntry::new("key1", "\"etag1\"", 1024).unwrap(),
    ]; "1 full entry")]
    #[test_case(CSV_2_ENTRIES, &[
        InputManifestEntry::new("key1", "\"etag1\"", 1024).unwrap(),
        InputManifestEntry::new("key2", "\"etag2\"", 2048).unwrap(),
    ]; "2 full entries")]
    #[test_case(r#""key1","",1024"#, &[
        InputManifestEntry::new("key1", "", 1024).unwrap(),
    ]; "no etag")]
    #[test_case(CSV_MULTILINE_ENTRY, &[
        InputManifestEntry::new("ke\",\ny1", "\"etag1\"", 1024).unwrap()
    ]; "with special chars")]
    #[test_case("", &[]; "empty")]
    fn test_csv_parsing_ok(csv_str: &str, expected: &[InputManifestEntry]) {
        let actual: Vec<_> = CsvReader::new(csv_str.as_bytes())
            .map(|item| item.expect("parsing must succeed"))
            .collect();
        assert_eq!(&actual, expected);
    }

    #[test_case(r#""key1","""etag1""","#; "no size")]
    #[test_case(r#""key","""etag1""""#; "incomplete row")]
    fn test_csv_parsing_err(csv_str: &str) {
        let mut reader = CsvReader::new(csv_str.as_bytes());
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::CsvError(_)));
    }

    #[test_case("dir1/./a.txt"; "with dot")]
    #[test_case("dir1/../a.txt"; "with 2 dots")]
    #[test_case("dir1//a.txt"; "with 2 slashes")]
    #[test_case(""; "empty")]
    #[test_case("dir1/a\0.txt"; "with 0")]
    fn test_csv_parsing_err_key(key: &str) {
        let csv_string = CSV_ENTRY.replace("{}", key);
        let mut reader = CsvReader::new(csv_string.as_bytes());
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::InvalidKey(_)));
    }

    #[test]
    fn test_csv_parsing_err_folder_marker() {
        let csv_string = CSV_ENTRY.replace("{}", "dir1/dir2/dir3/");
        let mut reader = CsvReader::new(csv_string.as_bytes());
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::DirectoryMarker(_)));
    }
}
