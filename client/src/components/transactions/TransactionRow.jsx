export default function TransactionRow({ tx }) {
  return (
    <div className="flex justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
      <div>
        <p className="font-semibold dark:text-white">{tx.merchant || "Unknown"}</p>
        <p className="text-sm text-gray-500">{tx.date}</p>
      </div>

      <p
        className={`font-bold ${
          tx.amount < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {tx.amount < 0 ? `-₹${Math.abs(tx.amount)}` : `+₹${tx.amount}`}
      </p>
    </div>
  );
}
