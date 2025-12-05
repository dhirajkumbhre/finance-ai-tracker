import Transaction from "../models/Transaction.js";

export const getAllTransactions = async (req, res) => {
  const data = await Transaction.find({ userId: req.user }).sort({ createdAt: -1 });
  res.json(data);
};

export const createTransaction = async (req, res) => {
  const tx = await Transaction.create({
    ...req.body,
    userId: req.user,
  });

  res.json({ message: "Transaction Added", tx });
};
