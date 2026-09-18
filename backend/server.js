import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDatabase } from "./config/db.js";
import { verifyConnection } from "./services/emailService.js";
import contactRoutes from "./routes/contactRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import { notFoundHandler, globalErrorHandler } from "./middleware/errorHandler.js";

// Load environment variables
dotenv.config();

// Safety handlers for uncaught issues
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

const app = express();
const PORT = process.env.PORT || 5000;

// 1. CORS Configuration
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((url) => url.trim())
  : ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes("*")) {
        return callback(null, true);
      } else {
        return callback(null, true);
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// 2. Parse JSON & Form data (supports resumes up to 25MB)
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

// 3. API Routes
app.use("/api/health", healthRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/apply", applicationRoutes);
app.use("/api/applications", applicationRoutes);

// 4. 404 Handler for undefined endpoints
app.use(notFoundHandler);

// 5. Global Error Handler
app.use(globalErrorHandler);

// 6. Start HTTP Server and initialize services
app.listen(PORT, "0.0.0.0", async () => {
  console.log(`===============================================`);
  console.log(`🚀 InGage EduTech Backend API is running!`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📬 Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`📝 Applications API: http://localhost:${PORT}/api/apply`);
  console.log(`===============================================`);

  // Initialize Database Pool & Tables
  await initDatabase();

  // Verify SMTP Connection
  await verifyConnection();
});

export default app;
