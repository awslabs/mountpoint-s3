use super::{DbEntry, ManifestError};
use csv::{DeserializeRecordsIntoIter, ReaderBuilder};
use std::io::Read;

pub struct CsvReader<R: Read> {
    reader: DeserializeRecordsIntoIter<R, DbEntry>,
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
    type Item = Result<DbEntry, ManifestError>;

    fn next(&mut self) -> Option<Self::Item> {
        self.reader.next().map(|item| item.map_err(ManifestError::from))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    const CSV_2_ENTRIES: &str = r#""key1","""etag1""",1024
"key2","""etag2""",2048"#;

    const CSV_MULTILINE_ENTRY: &str = r#""ke"",
y1","""etag1""",1024"#;

    #[test_case(CSV_2_ENTRIES, &[
        DbEntry {
            full_key: "key1".to_string(),
            etag: Some("\"etag1\"".to_string()),
            size: Some(1024),
            ..Default::default()
        },
        DbEntry {
            full_key: "key2".to_string(),
            etag: Some("\"etag2\"".to_string()),
            size: Some(2048),
            ..Default::default()
        },
    ]; "2 full entries")]
    #[test_case(r#""key1","",1024"#, &[
        DbEntry {
            full_key: "key1".to_string(),
            etag: None,
            size: Some(1024),
            ..Default::default()
        },
    ]; "no etag")]
    #[test_case(r#""key1","""etag1""","#, &[
        DbEntry {
            full_key: "key1".to_string(),
            etag: Some("\"etag1\"".to_string()),
            size: None,
            ..Default::default()
        },
    ]; "no size")]
    #[test_case(CSV_MULTILINE_ENTRY, &[
        DbEntry {
            full_key: "ke\",\ny1".to_string(),
            etag: Some("\"etag1\"".to_string()),
            size: Some(1024),
            ..Default::default()
        },
    ]; "with special chars")]
    #[test_case("", &[]; "empty")]
    fn test_csv_parsing_ok(csv_str: &str, expected: &[DbEntry]) {
        let actual: Vec<_> = CsvReader::new(csv_str.as_bytes())
            .map(|item| item.expect("parsing must succeed"))
            .collect();
        assert_eq!(&actual, expected);
    }

    #[test_case(r#""key","""etag1""""#; "incomplete row")]
    fn test_csv_parsing_err(csv_str: &str) {
        let mut reader = CsvReader::new(csv_str.as_bytes());
        let err = reader.next().expect("must be some").expect_err("must be an error");
        assert!(matches!(err, ManifestError::CsvError(_)));
    }
}
