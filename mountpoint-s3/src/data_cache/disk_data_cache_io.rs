use crate::data_cache::disk_data_cache::DiskBlock;
use crate::data_cache::DataCacheError;
use std::fs;
use std::io::Seek;
use tracing::warn;

pub trait DiskDataWriter: std::fmt::Debug {
    fn write_to_file(&self, file: &fs::File, disk_block: &DiskBlock) -> Result<usize, DataCacheError>;
}

pub trait DiskDataReader: std::fmt::Debug {
    fn read_from_file(&self, file: &fs::File) -> Result<DiskBlock, DataCacheError>;
}

#[derive(Debug)]
pub struct BincodeDiskBlockFileWriter {}

impl DiskDataWriter for BincodeDiskBlockFileWriter {
    fn write_to_file(&self, mut file: &fs::File, disk_block: &DiskBlock) -> Result<usize, DataCacheError> {
        let serialize_result = bincode::serialize_into(file, disk_block);
        if let Err(err) = serialize_result {
            return match *err {
                bincode::ErrorKind::Io(io_err) => return Err(DataCacheError::from(io_err)),
                _ => Err(DataCacheError::InvalidBlockContent),
            };
        };
        Ok(file.stream_position()? as usize)
    }
}

#[derive(Debug)]
pub struct BincodeDiskBlockFileReader {}

impl DiskDataReader for BincodeDiskBlockFileReader {
    fn read_from_file(&self, file: &fs::File) -> Result<DiskBlock, DataCacheError> {
        let block: DiskBlock = match bincode::deserialize_from(file) {
            Ok(block) => block,
            Err(e) => {
                warn!("block could not be deserialized: {:?}", e);
                return Err(DataCacheError::InvalidBlockContent);
            }
        };
        Ok(block)
    }
}
#[derive(Debug)]
pub struct Bincode2DiskBlockFileWriter {}

impl DiskDataWriter for Bincode2DiskBlockFileWriter {
    fn write_to_file(&self, mut file: &fs::File, disk_block: &DiskBlock) -> Result<usize, DataCacheError> {
        let serialize_result = bincode2::serialize_into(file, disk_block);
        if let Err(err) = serialize_result {
            return match *err {
                bincode2::ErrorKind::Io(io_err) => return Err(DataCacheError::from(io_err)),
                _ => Err(DataCacheError::InvalidBlockContent),
            };
        };
        Ok(file.stream_position()? as usize)
    }
}

#[derive(Debug)]
pub struct Bincode2DiskBlockFileReader {}

impl DiskDataReader for Bincode2DiskBlockFileReader {
    fn read_from_file(&self, file: &fs::File) -> Result<DiskBlock, DataCacheError> {
        let block: DiskBlock = match bincode2::deserialize_from(file) {
            Ok(block) => block,
            Err(e) => {
                warn!("block could not be deserialized: {:?}", e);
                return Err(DataCacheError::InvalidBlockContent);
            }
        };
        Ok(block)
    }
}
