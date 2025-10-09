use std::ops::Deref;
use std::os::unix::prelude::OsStrExt;

use mountpoint_s3_crt::http::request_response::Header;
use mountpoint_s3_crt::s3::client::MetaRequestResult;
use tracing::debug;
use uuid::Uuid;

use crate::object_client::{
    ObjectClientResult, RenameObjectError, RenameObjectParams, RenameObjectResult, RenamePreconditionTypes,
};

use super::{QueryFragment, S3CrtClient, S3Operation, S3RequestError};

impl S3CrtClient {
    pub(super) async fn rename_object(
        &self,
        bucket: &str,
        src_key: &str,
        dst_key: &str,
        params: &RenameObjectParams,
    ) -> ObjectClientResult<RenameObjectResult, RenameObjectError, S3RequestError> {
        const RENAME_QUERY_PARAM: &str = "renameObject";
        const RENAME_SOURCE_HEADER: &str = "x-amz-rename-source";
        const RENAME_SOURCE_IF_MATCH_HEADER: &str = "x-amz-rename-source-if-match";

        let span = request_span!(self.inner, "rename_object_request", bucket);

        let body = {
            let mut message = self
                .inner
                .new_request_template("PUT", bucket)
                .map_err(S3RequestError::construction_failure)?;

            let key = format!("/{dst_key}");
            message
                .set_request_path_and_query(&key, QueryFragment::Action(RENAME_QUERY_PARAM))
                .map_err(S3RequestError::construction_failure)?;
            message
                .set_header(&Header::new(RENAME_SOURCE_HEADER, src_key))
                .expect("failed to set rename source key header");

            if let Some(src_etag) = &params.if_source_match {
                message
                    .set_header(&Header::new(RENAME_SOURCE_IF_MATCH_HEADER, src_etag.as_str()))
                    .map_err(S3RequestError::construction_failure)?;
            }

            if let Some(etag) = &params.if_match {
                message
                    .set_header(&Header::new("If-Match", etag.as_str()))
                    .map_err(S3RequestError::construction_failure)?;
            }

            if let Some(guard) = &params.if_none_match {
                if guard != "*" {
                    debug!("Unexpected if-none-match guard");
                }
                message
                    .set_header(&Header::new("If-None-Match", guard))
                    .map_err(S3RequestError::construction_failure)?;
            }

            if let Some(token) = &params.client_token {
                message
                    .set_header(&Header::new("x-amz-client-token", token))
                    .map_err(S3RequestError::construction_failure)?;
            } else {
                // Generate a client token for this request automatically
                let token = Uuid::new_v4();
                message
                    .set_header(&Header::new("x-amz-client-token", token.to_string()))
                    .map_err(S3RequestError::construction_failure)?;
            }

            for (name, value) in &params.custom_headers {
                message
                    .inner
                    .add_header(&Header::new(name, value))
                    .map_err(S3RequestError::construction_failure)?;
            }

            let options = message.into_options(S3Operation::PutObjectSingle);
            self.inner
                .meta_request_without_payload(options, span, parse_rename_object_error)?
        };

        body.await?;
        Ok(RenameObjectResult {})
    }
}

fn parse_rename_object_error(result: &MetaRequestResult) -> Option<RenameObjectError> {
    match result.response_status {
        400 => {
            let body = result.error_response_body.as_ref()?;
            let root = xmltree::Element::parse(body.as_bytes()).ok()?;
            let error_code = root.get_child("Code")?;
            let error_str = error_code.get_text()?;

            match error_str.deref() {
                "KeyTooLong" => Some(RenameObjectError::KeyTooLong),
                _ => Some(RenameObjectError::BadRequest),
            }
        }
        404 => Some(RenameObjectError::KeyNotFound),
        412 => {
            let body = result.error_response_body.as_ref()?;
            let root = xmltree::Element::parse(body.as_bytes()).ok()?;
            let condition = root.get_child("Condition")?;
            let failed_condition = condition.get_text()?;

            match failed_condition.deref() {
                "If-Match" => Some(RenameObjectError::PreConditionFailed(RenamePreconditionTypes::IfMatch)),
                "If-None-Match" => Some(RenameObjectError::PreConditionFailed(
                    RenamePreconditionTypes::IfNoneMatch,
                )),
                _ => Some(RenameObjectError::PreConditionFailed(RenamePreconditionTypes::Other)),
            }
        }
        501 => Some(RenameObjectError::NotImplementedError),
        _ => None,
    }
}
