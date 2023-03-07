#include <aws/common/logging.h>
#include <aws/common/string.h>

#include <inttypes.h>
#include <stdarg.h>

extern int aws_crt_s3_rs_logging_shim_log_fn(
    struct aws_logger *logger,
    enum aws_log_level log_level,
    aws_log_subject_t subject,
    struct aws_string *body,
    size_t body_length);

/// A little trampoline that takes care of the variadic arguments for the `format` string, which
/// isn't possible in stable Rust. See the comment for this function in `logger.rs`.
int aws_crt_s3_rs_logging_shim_log_fn_trampoline(
    struct aws_logger *logger,
    enum aws_log_level log_level,
    aws_log_subject_t subject,
    const char *format,
    ...) {
    va_list args;
    va_start(args, format);

    // Calculate how much room we'll need to build the full log line.
    // You cannot consume a va_list twice, so we have to copy it.
    va_list tmp_args;
    va_copy(tmp_args, args);
    int required_length = vsnprintf(NULL, 0, format, tmp_args);
    int required_length_terminated = required_length + 1;
    va_end(tmp_args);

    struct aws_string *raw_string = aws_mem_calloc(logger->allocator, 1, sizeof(struct aws_string) + required_length_terminated);
    if (raw_string == NULL) {
        return AWS_OP_ERR;
    }

    int written_count = vsnprintf((char *)raw_string->bytes, required_length_terminated, format, args);
    if (written_count < 0) {
        aws_mem_release(logger->allocator, raw_string);
        return aws_raise_error(AWS_ERROR_INVALID_ARGUMENT);
    }
    *(size_t *)(&raw_string->len) = required_length_terminated;

    int ret = aws_crt_s3_rs_logging_shim_log_fn(logger, log_level, subject, raw_string, required_length);

    aws_mem_release(logger->allocator, raw_string);

    return ret;
}