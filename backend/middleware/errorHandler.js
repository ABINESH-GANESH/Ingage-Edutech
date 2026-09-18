/**
 * 404 Not Found Middleware
 */
export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`,
  });
}

/**
 * Global Error Handler Middleware
 */
export function globalErrorHandler(err, req, res, next) {
  // Handle JSON parsing syntax error
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Malformed JSON payload in request body.",
    });
  }

  // Handle Payload Too Large (e.g. upload > 25MB)
  if (err.type === "entity.too.large" || err.status === 413) {
    return res.status(413).json({
      success: false,
      message: "Uploaded attachment payload is too large. Maximum size allowed is 25MB.",
    });
  }

  // Log internal details to server console safely
  console.error("💥 [Global Server Error]:", err);

  // Return sanitized error response
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error. Please try again later.",
  });
}

export default {
  notFoundHandler,
  globalErrorHandler,
};
