import express from "express";
import auth from "../middleware/authMiddleware.js";
import { getAllTransactions, createTransaction } from "../controllers/transaction.controller.js";

const router = express.Router();

router.get("/", auth, getAllTransactions);
router.post("/", auth, createTransaction);

export default router;
