import { useEffect, useState } from "react";
import { getAllTransactions, createTransaction } from "../services/transactions";
import TransactionRow from "../components/transactions/TransactionRow";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({
    merchant: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    getAllTransactions().then((res) => {
      setTransactions(res.data || []);
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const res = await createTransaction(form);
    setTransactions([res.data.tx, ...transactions]);
  };

  return (
    <div className="space-y-8">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold dark:text-white">Transactions</h1>

      {/* Add Transaction Form */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>

        <form onSubmit={submit} className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            placeholder="Merchant"
            className="input"
            onChange={(e) => setForm({ ...form, merchant: e.target.value })}
          />
          <input
            placeholder="Amount"
            className="input"
            type="number"
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
          <input
            placeholder="Date"
            className="input"
            type="date"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <button className="btn btn-primary md:col-span-3">Add</button>
        </form>
      </div>

      {/* Transactions List */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">All Transactions</h2>

        {transactions.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">No transactions found.</p>
        )}

        <div className="space-y-3">
          {transactions.map((tx) => (
            <TransactionRow key={tx._id} tx={tx} />
          ))}
        </div>
      </div>
    </div>
  );
}
