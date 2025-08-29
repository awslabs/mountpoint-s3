use csv::{DeserializeRecordsIntoIter, ReaderBuilder};
use mountpoint_s3_client::checksums::crc32c::Hasher;
use serde::Deserialize;
use std::io::Read;

use super::InputManifestError;
use super::builder::InputManifestEntry;

pub struct CsvReader<R: Read> {
    reader: DeserializeRecordsIntoIter<R, CsvEntry>,
    file_path: String,
    hasher: Option<Hasher>,
    expected_checksum: u32,
}

impl<R: Read> CsvReader<R> {
    pub fn new(reader: R, file_path: &str, expected_checksum: u32) -> Self {
        let reader = ReaderBuilder::new()
            .has_headers(false)
            .from_reader(reader)
            .into_deserialize();
        Self {
            reader,
            file_path: file_path.to_string(),
            hasher: Some(Hasher::new()),
            expected_checksum,
        }
    }

    fn update_running_checksum(&mut self, csv_entry: &CsvEntry) {
        // we re-compute checksum of each entry, because `Hasher` doesn't support combining pre-computed checksums
        if let Some(hasher) = self.hasher.as_mut() {
            hasher.update(csv_entry.partial_key.as_bytes());
            hasher.update(csv_entry.etag.as_bytes());
            // we encode size with big endian byte order and with a fixed width of 8 bytes (rust: u64, java: long)
            let size = csv_entry.size as u64;
            hasher.update(size.to_be_bytes().as_ref());
        }
    }
}

impl<R: Read> Iterator for CsvReader<R> {
    type Item = Result<InputManifestEntry, InputManifestError>;

    /// Returns next validated [InputManifestEntry] or [InputManifestError].
    ///
    /// This method will compare the manifest checksum after the final CSV entry is processed.
    /// An error [InputManifestError::InvalidFileChecksum] will be returned as a last item in
    /// the stream if validation fails.
    fn next(&mut self) -> Option<Self::Item> {
        match self.reader.next() {
            Some(Ok(csv_entry)) => {
                self.update_running_checksum(&csv_entry);
                Some(csv_entry.try_into())
            }
            Some(Err(err)) => Some(Err(InputManifestError::from(err))),
            None => {
                if let Some(hasher) = self.hasher.take() {
                    let computed_checksum = hasher.finalize().value();
                    if computed_checksum != self.expected_checksum {
                        return Some(Err(InputManifestError::InvalidFileChecksum(
                            self.file_path.clone(),
                            computed_checksum,
                            self.expected_checksum,
                        )));
                    }
                }
                None
            }
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
    /// CRC32C checksum of the fields.
    checksum: u32,
}

impl TryInto<InputManifestEntry> for CsvEntry {
    type Error = InputManifestError;

    fn try_into(self) -> Result<InputManifestEntry, Self::Error> {
        InputManifestEntry::new(self.partial_key, self.etag, self.size, self.checksum)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    const CSV_ENTRY: &str = r#""key1","""etag1""",1024,2462020494"#;

    const CSV_2_ENTRIES: &str = r#""key1","""etag1""",1024,2462020494
"key2","""etag2""",2048,181357319"#;

    const CSV_MULTILINE_ENTRY: &str = r#""ke"",
y1","""etag1""",1024,978391088"#;

    const CSV_ENTRY_PATTERN: &str = r#""__KEY__","""etag1""",1024,__CHECKSUM__"#;

    #[test_case(&CSV_ENTRY, 2462020494, &[
        InputManifestEntry::new("key1", "\"etag1\"", 1024, 2462020494).unwrap(),
    ]; "1 full entry")]
    #[test_case(CSV_2_ENTRIES, 2007214548, &[
        InputManifestEntry::new("key1", "\"etag1\"", 1024, 2462020494).unwrap(),
        InputManifestEntry::new("key2", "\"etag2\"", 2048, 181357319).unwrap(),
    ]; "2 full entries")]
    #[test_case(CSV_MULTILINE_ENTRY, 978391088, &[
        InputManifestEntry::new("ke\",\ny1","\"etag1\"", 1024, 978391088).unwrap()
    ]; "with special chars")]
    #[test_case("", 0, &[]; "empty")]
    fn test_csv_parsing_ok(csv_str: &str, manifest_checksum: u32, expected: &[InputManifestEntry]) {
        let actual: Vec<_> = CsvReader::new(csv_str.as_bytes(), "manifest.csv", manifest_checksum)
            .map(|item| item.expect("parsing must succeed"))
            .collect();
        assert_eq!(&actual, expected);
    }

    #[test_case(r#""key1","""etag1""",,0"#; "no size")]
    #[test_case(r#""key","""etag1""""#; "incomplete row")]
    #[test_case(r#""key","""etag1""",18446744073709551616,0"#; "size overflow")]
    fn test_csv_parsing_err(csv_str: &str) {
        let mut reader = CsvReader::new(csv_str.as_bytes(), "manifest.csv", 0);
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::CsvError(_)));
    }

    #[test_case("dir1/./a.txt", 0; "with dot")]
    #[test_case("dir1/../a.txt", 0; "with 2 dots")]
    #[test_case("dir1//a.txt", 0; "with 2 slashes")]
    #[test_case("", 0; "empty")]
    #[test_case("dir1/a\0.txt", 0; "with 0")]
    fn test_csv_parsing_err_key(key: &str, checksum: u32) {
        let csv_string = CSV_ENTRY_PATTERN
            .replace("__KEY__", key)
            .replace("__CHECKSUM__", &checksum.to_string());
        let mut reader = CsvReader::new(csv_string.as_bytes(), "manifest.csv", checksum);
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::InvalidKey(_)));
    }

    #[test]
    fn test_csv_parsing_err_etag() {
        let csv_string = r#""key1","",1024,2946291887"#;
        let expected_checksum = 2946291887;
        let mut reader = CsvReader::new(csv_string.as_bytes(), "manifest.csv", expected_checksum);
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::InvalidEtag(_, _)));
    }

    #[test]
    fn test_csv_parsing_err_folder_marker() {
        let csv_string = r#""dir1/dir2/dir3/","""etag1""",1024,0"#;
        let mut reader = CsvReader::new(csv_string.as_bytes(), "manifest.csv", 0);
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::DirectoryMarker(_)));
    }

    #[test]
    fn test_csv_parsing_checksum() {
        let csv_string = r#"
"1/file1","cab383756633321927cbbcdae674eade-1","1048576","2073902617"
"1/file2","13ae585d58e207aff2ae65d2297c6828-1","1048576","2479809313"
"2/file1","eb18c122dd77776ec5b88470f8c9a8b6-1","1048576","810936535"
"2/file2","12cb9855bc16ba97271f429697013854-1","1048576","807927593""#;
        let expected_checksum = 880485757;

        // first try with wrong checksum
        let entries: Vec<_> = CsvReader::new(csv_string.as_bytes(), "manifest.csv", 123456789).collect();
        assert!(matches!(
            entries.last().expect("non empty iterator"),
            Err(InputManifestError::InvalidFileChecksum(_, _, _))
        ));

        // now try with good checksum
        let entries: Vec<_> = CsvReader::new(csv_string.as_bytes(), "manifest.csv", expected_checksum)
            .map(|item| item.expect("parsing must succeed"))
            .collect();
        assert_eq!(
            entries,
            &[
                InputManifestEntry::new("1/file1", "cab383756633321927cbbcdae674eade-1", 1048576, 2073902617).unwrap(),
                InputManifestEntry::new("1/file2", "13ae585d58e207aff2ae65d2297c6828-1", 1048576, 2479809313).unwrap(),
                InputManifestEntry::new("2/file1", "eb18c122dd77776ec5b88470f8c9a8b6-1", 1048576, 810936535).unwrap(),
                InputManifestEntry::new("2/file2", "12cb9855bc16ba97271f429697013854-1", 1048576, 807927593).unwrap(),
            ]
        );
    }
}
