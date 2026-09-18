import { Router } from "express";
import { submitApplication } from "../controllers/applicationController.js";
import { applicationLimiter } from "../middleware/rateLimiter.js";

const router = Router();

// POST /api/applications - Submit Student / Job Application
router.post("/", applicationLimiter, submitApplication);

export default router;
