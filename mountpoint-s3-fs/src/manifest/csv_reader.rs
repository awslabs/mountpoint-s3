use crate::manifest::builder::InputManifestEntry;

use super::ManifestError;
use csv::{DeserializeRecordsIntoIter, ReaderBuilder};
use serde::Deserialize;
use std::io::Read;

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
    type Item = Result<InputManifestEntry, ManifestError>;

    fn next(&mut self) -> Option<Self::Item> {
        let csv_entry = self
            .reader
            .next()
            .map(|csv_entry| csv_entry.map_err(ManifestError::from))?;
        match csv_entry {
            Ok(csv_entry) => Some(csv_entry.try_into()),
            Err(err) => Some(Err(err)),
        }
    }
}

#[derive(Deserialize)]
struct CsvEntry {
    partial_key: String, // may hold a folder marker (e.g. "dir1/dir2/")
    etag: String,
    size: usize,
}

impl TryInto<InputManifestEntry> for CsvEntry {
    type Error = ManifestError;

    fn try_into(self) -> Result<InputManifestEntry, Self::Error> {
        InputManifestEntry::from_owned(self.partial_key, self.etag, self.size)
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
        assert!(matches!(err, ManifestError::CsvError(_)));
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
        assert!(matches!(err, ManifestError::InvalidKey(_)));
    }

    #[test]
    fn test_csv_parsing_err_folder_marker() {
        let csv_string = CSV_ENTRY.replace("{}", "dir1/dir2/dir3/");
        let mut reader = CsvReader::new(csv_string.as_bytes());
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, ManifestError::FolderMarker(_)));
    }
}
