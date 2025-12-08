import express from "express";
const router = express.Router();

router.get("/forecast", (req, res) => {
  res.json({ forecast: "ML Service will integrate here" });
});

export default router;
