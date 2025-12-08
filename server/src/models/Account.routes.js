import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: String,
  limit: Number,
  spent: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Budget", budgetSchema);
