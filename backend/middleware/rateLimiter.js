import rateLimit from "express-rate-limit";

/**
 * Global API rate limiter - 100 requests per 15 minutes per IP
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests from this IP. Please try again later.",
  },
});

/**
 * Strict rate limiter for Contact Form submissions - 10 requests per 15 minutes per IP
 */
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact submissions from this IP. Please wait 15 minutes before submitting again.",
  },
});

/**
 * Rate limiter for Program & Job Applications - 10 requests per 15 minutes per IP
 */
export const applicationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many applications submitted from this IP. Please wait 15 minutes before submitting again.",
  },
});

export default {
  generalLimiter,
  contactLimiter,
  applicationLimiter,
};
