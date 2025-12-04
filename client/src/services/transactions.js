import { api } from "./api";

export const getAllTransactions = () => api.get("/transactions");
export const createTransaction = (data) => api.post("/transactions", data);
