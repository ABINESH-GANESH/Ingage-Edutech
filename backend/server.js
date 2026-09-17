import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import { verifyConnection } from "./services/emailService.js";

// Load environment variables from .env
dotenv.config();

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Configure CORS
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((url) => url.trim())
  : ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes("*")) {
        return callback(null, true);
      } else {
        return callback(null, true); // Permissive in local development
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// 2. Parse JSON Request Bodies (supports resume attachments up to 25MB)
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

// 3. Rate Limiter for Contact Submissions (5 requests per 15 minutes per IP)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 contact requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact requests from this IP. Please wait 15 minutes before submitting again.",
  },
});

// 4. Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "InGage Contact API is running",
  });
});

// 5. Contact API Routes
app.use("/api/contact", contactLimiter, contactRoutes);

// 6. 404 Handler for Undefined Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// 7. Global Error Handler
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Malformed JSON payload in request body.",
    });
  }
  console.error("💥 [Global Server Error]:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error. Please try again later.",
  });
});

// 8. Start HTTP Server and Verify SMTP Connection
app.listen(PORT, async () => {
  console.log(`===============================================`);
  console.log(`🚀 InGage EduTech Backend API is running!`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📬 Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`===============================================`);

  // Verify SMTP Connection
  await verifyConnection();
});
