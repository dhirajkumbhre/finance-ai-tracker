import express from "express";
import auth from "../middleware/authMiddleware.js";
import { getBudgets, createBudget } from "../controllers/budget.controller.js";

const router = express.Router();

router.get("/", auth, getBudgets);
router.post("/", auth, createBudget);

export default router;
