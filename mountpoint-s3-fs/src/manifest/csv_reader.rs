use std::io::Read;

use csv::{DeserializeRecordsIntoIter, ReaderBuilder};
use mountpoint_s3_client::checksums::Crc32c;
use serde::{Deserialize, Serialize};

use crate::checksums::{Crc32cBase64, combine_checksums};

use super::InputManifestError;
use super::builder::InputManifestEntry;

/// CsvReader implements a stream of parsed CSV entries.
///
/// Stream returns next validated [InputManifestEntry] or [InputManifestError].
///
/// Stream will compare the manifest checksum after the final CSV entry is processed.
/// An error [InputManifestError::InvalidFileChecksum] will be returned as a last item in
/// the stream if validation fails.
pub struct CsvReader<R: Read> {
    reader: DeserializeRecordsIntoIter<R, CsvEntry>,
    file_path: String,
    running_checksum: Crc32c,
    expected_checksum: Crc32c,
    done: bool,
}

impl<R: Read> CsvReader<R> {
    pub fn new(reader: R, file_path: &str, expected_checksum: Crc32c) -> Self {
        let reader = ReaderBuilder::new()
            .has_headers(false)
            .from_reader(reader)
            .into_deserialize();
        Self {
            reader,
            file_path: file_path.to_string(),
            running_checksum: Crc32c::new(0),
            expected_checksum,
            done: false,
        }
    }

    fn update_running_checksum(&mut self, csv_entry: &CsvEntry) {
        let entry_size = csv_entry.total_size();
        self.running_checksum = combine_checksums(self.running_checksum, csv_entry.checksum.value(), entry_size);
    }
}

impl<R: Read> Iterator for CsvReader<R> {
    type Item = Result<InputManifestEntry, InputManifestError>;

    fn next(&mut self) -> Option<Self::Item> {
        match self.reader.next() {
            Some(Ok(csv_entry)) => {
                self.update_running_checksum(&csv_entry);
                Some(csv_entry.try_into())
            }
            Some(Err(err)) => Some(Err(InputManifestError::from(err))),
            None => {
                if !self.done && self.running_checksum != self.expected_checksum {
                    self.done = true;
                    return Some(Err(InputManifestError::InvalidFileChecksum(
                        self.file_path.clone(),
                        self.running_checksum.value(),
                        self.expected_checksum.value(),
                    )));
                }
                None
            }
        }
    }
}

/// CsvEntry represents a single row in an input CSV channel manifest file.
///
/// Checksum is serialized as base64 and contains a Crc32c checksum of key, etag and size.
/// For checksum purposes, size is encoded using big endian byte order and with a fixed width of 8 bytes.
/// Fields are added to checksum in the order they appear in definition of this struct.
///
/// Note that data in this struct is not yet validated.
/// Specifically [partial_key] may contain forbidden symbols and be rejected later.
#[derive(Deserialize, Serialize)]
pub struct CsvEntry {
    /// Partial key of the S3 object.
    ///
    /// Must not contain S3 prefix, when the prefix is mounted.
    /// May hold a directory marker (e.g. "dir1/dir2/"), which will be skipped
    /// and won't affect the file system structure.
    pub partial_key: String,
    /// Etag of the S3 object.
    pub etag: String,
    /// Size of the S3 object.
    pub size: u64,
    /// CRC32C checksum of the fields.
    pub checksum: Crc32cBase64,
}

impl CsvEntry {
    pub fn total_size(&self) -> usize {
        const SIZE_LEN: usize = 8; // size is always 8 bytes
        self.partial_key.len() + self.etag.len() + SIZE_LEN
    }
}

impl TryInto<InputManifestEntry> for CsvEntry {
    type Error = InputManifestError;

    fn try_into(self) -> Result<InputManifestEntry, Self::Error> {
        let size = usize::try_from(self.size).map_err(|_| InputManifestError::SizeTooLarge(self.size))?;
        InputManifestEntry::new(self.partial_key, self.etag, size, self.checksum.value())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    const CSV_ENTRY: &str = r#""key1","""etag1""",1024,kr9zjg=="#;

    const CSV_2_ENTRIES: &str = r#""key1","""etag1""",1024,kr9zjg==
"key2","""etag2""",2048,Cs9LBw=="#;

    const CSV_MULTILINE_ENTRY: &str = r#""ke"",
y1","""etag1""",1024,OlEQMA=="#;

    const CSV_ENTRY_PATTERN: &str = r#""__KEY__","""etag1""",1024,__CHECKSUM__"#;

    #[test_case(&CSV_ENTRY, 2462020494, &[
        InputManifestEntry::new("key1", "\"etag1\"", 1024, Crc32c::new(2462020494)).unwrap(),
    ]; "1 full entry")]
    #[test_case(CSV_2_ENTRIES, 2007214548, &[
        InputManifestEntry::new("key1", "\"etag1\"", 1024, Crc32c::new(2462020494)).unwrap(),
        InputManifestEntry::new("key2", "\"etag2\"", 2048, Crc32c::new(181357319)).unwrap(),
    ]; "2 full entries")]
    #[test_case(CSV_MULTILINE_ENTRY, 978391088, &[
        InputManifestEntry::new("ke\",\ny1","\"etag1\"", 1024, Crc32c::new(978391088)).unwrap()
    ]; "with special chars")]
    #[test_case("", 0, &[]; "empty")]
    fn test_csv_parsing_ok(csv_str: &str, manifest_checksum: u32, expected: &[InputManifestEntry]) {
        let actual: Vec<_> = CsvReader::new(csv_str.as_bytes(), "manifest.csv", Crc32c::new(manifest_checksum))
            .map(|item| item.expect("parsing must succeed"))
            .collect();
        assert_eq!(&actual, expected);
    }

    #[test_case(r#""key1","""etag1""",,e50+GQ=="#; "no size")]
    #[test_case(r#""key","""etag1""""#; "incomplete row")]
    #[test_case(r#""key","""etag1""",18446744073709551616,e50+GQ=="#; "size overflow")]
    fn test_csv_parsing_err(csv_str: &str) {
        let mut reader = CsvReader::new(csv_str.as_bytes(), "manifest.csv", Crc32c::new(0));
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::CsvError(_)));
    }

    #[test_case("dir1/./a.txt"; "with dot")]
    #[test_case("dir1/../a.txt"; "with 2 dots")]
    #[test_case("dir1//a.txt"; "with 2 slashes")]
    #[test_case(""; "empty")]
    #[test_case("dir1/a\0.txt"; "with 0")]
    fn test_csv_parsing_err_key(key: &str) {
        let csv_string = CSV_ENTRY_PATTERN
            .replace("__KEY__", key)
            .replace("__CHECKSUM__", "e50+GQ==");
        let mut reader = CsvReader::new(csv_string.as_bytes(), "manifest.csv", Crc32c::new(0));
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::InvalidKey(_)));
    }

    #[test]
    fn test_csv_parsing_err_etag() {
        let csv_string = r#""key1","",1024,r5zYrw=="#;
        let expected_checksum = 2946291887;
        let mut reader = CsvReader::new(csv_string.as_bytes(), "manifest.csv", Crc32c::new(expected_checksum));
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::InvalidEtag(_, _)));
    }

    #[test]
    fn test_csv_parsing_err_folder_marker() {
        let csv_string = r#""dir1/dir2/dir3/","""etag1""",1024,e50+GQ=="#;
        let mut reader = CsvReader::new(csv_string.as_bytes(), "manifest.csv", Crc32c::new(0));
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, InputManifestError::DirectoryMarker(_)));
    }

    #[test]
    fn test_csv_parsing_checksum() {
        let csv_string = r#"
"1/file1","cab383756633321927cbbcdae674eade-1","1048576","e50+GQ=="
"1/file2","13ae585d58e207aff2ae65d2297c6828-1","1048576","k87jIQ=="
"2/file1","eb18c122dd77776ec5b88470f8c9a8b6-1","1048576","MFXo1w=="
"2/file2","12cb9855bc16ba97271f429697013854-1","1048576","MCf/KQ==""#;
        let expected_checksum = 880485757;

        // first try with wrong checksum
        let entries: Vec<_> = CsvReader::new(csv_string.as_bytes(), "manifest.csv", Crc32c::new(123456789)).collect();
        assert!(matches!(
            entries.last().expect("non empty iterator"),
            Err(InputManifestError::InvalidFileChecksum(_, _, _))
        ));

        // now try with good checksum
        let entries: Vec<_> = CsvReader::new(csv_string.as_bytes(), "manifest.csv", Crc32c::new(expected_checksum))
            .map(|item| item.expect("parsing must succeed"))
            .collect();
        assert_eq!(
            entries,
            &[
                InputManifestEntry::new(
                    "1/file1",
                    "cab383756633321927cbbcdae674eade-1",
                    1048576,
                    Crc32c::new(2073902617)
                )
                .unwrap(),
                InputManifestEntry::new(
                    "1/file2",
                    "13ae585d58e207aff2ae65d2297c6828-1",
                    1048576,
                    Crc32c::new(2479809313)
                )
                .unwrap(),
                InputManifestEntry::new(
                    "2/file1",
                    "eb18c122dd77776ec5b88470f8c9a8b6-1",
                    1048576,
                    Crc32c::new(810936535)
                )
                .unwrap(),
                InputManifestEntry::new(
                    "2/file2",
                    "12cb9855bc16ba97271f429697013854-1",
                    1048576,
                    Crc32c::new(807927593)
                )
                .unwrap(),
            ]
        );
    }
}
