import Budget from "../models/Budget.js";

export const getBudgets = async (req, res) => {
  const b = await Budget.find({ userId: req.user });
  res.json(b);
};

export const createBudget = async (req, res) => {
  const b = await Budget.create({ userId: req.user, ...req.body });
  res.json({ message: "Budget Created", b });
};
