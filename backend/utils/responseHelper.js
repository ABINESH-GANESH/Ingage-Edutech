/**
 * Utility functions for request sanitization and standardized API responses
 */

/**
 * Sanitize a string by stripping dangerous characters
 * @param {string} str 
 * @returns {string}
 */
export function sanitizeString(str) {
  if (typeof str !== "string") return "";
  return str.trim();
}

/**
 * Standard Success Response Format
 * @param {import('express').Response} res 
 * @param {string} message 
 * @param {Object} [data] 
 * @param {number} [statusCode=200] 
 */
export function sendSuccess(res, message, data = null, statusCode = 200) {
  const payload = {
    success: true,
    message,
  };
  if (data !== null) {
    payload.data = data;
  }
  return res.status(statusCode).json(payload);
}

/**
 * Standard Error Response Format
 * @param {import('express').Response} res 
 * @param {string} message 
 * @param {number} [statusCode=500] 
 * @param {Object} [errors] 
 */
export function sendError(res, message, statusCode = 500, errors = null) {
  const payload = {
    success: false,
    message,
  };
  if (errors !== null) {
    payload.errors = errors;
  }
  return res.status(statusCode).json(payload);
}

export default {
  sanitizeString,
  sendSuccess,
  sendError,
};
