import { getDbStatus } from "../config/db.js";

/**
 * Health Check Controller
 * @route GET /api/health
 */
export function getHealth(req, res) {
  const dbStatus = getDbStatus();

  return res.status(200).json({
    success: true,
    message: "InGage backend is running",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: {
      connected: dbStatus.isConnected,
      host: dbStatus.host,
      database: dbStatus.database,
    },
  });
}

export default {
  getHealth,
};
