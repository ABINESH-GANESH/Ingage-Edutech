import { Router } from "express";
import { getHealth } from "../controllers/healthController.js";

const router = Router();

// GET /api/health - System and Database Health Check
router.get("/", getHealth);

export default router;
