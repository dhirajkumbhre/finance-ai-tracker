import MonthlySpendChart from "../components/charts/MonthlySpendChart";

export default function Dashboard() {
  const monthlyData = [
    { month: "Jan", spent: 12000 },
    { month: "Feb", spent: 8500 },
    { month: "Mar", spent: 9500 },
    { month: "Apr", spent: 11200 },
    { month: "May", spent: 7800 },
  ];

  const cards = [
    { title: "Total Spent", amount: "₹12,400", color: "bg-red-500" },
    { title: "Total Income", amount: "₹25,000", color: "bg-green-500" },
    { title: "Savings", amount: "₹12,600", color: "bg-blue-500" },
  ];

  return (
    <div className="space-y-8">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="card p-6 rounded-xl shadow-card dark:bg-gray-800"
          >
            <p className="text-gray-500 dark:text-gray-400">{c.title}</p>
            <p className="text-3xl font-bold mt-2">{c.amount}</p>
          </div>
        ))}
      </div>

      {/* Monthly Spend Chart */}
      <MonthlySpendChart data={monthlyData} />

      {/* Recent Transactions */}
      <div className="card mt-8 p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Recent Transactions
        </h2>

        <div className="space-y-3">
          {[
            { name: "Amazon", amount: -899, date: "2025-11-01" },
            { name: "Salary", amount: 25000, date: "2025-11-01" },
            { name: "Uber", amount: -250, date: "2025-11-02" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              <div>
                <p className="font-medium dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-500">{t.date}</p>
              </div>
              <p
                className={
                  t.amount < 0 ? "text-red-500 font-bold" : "text-green-500 font-bold"
                }
              >
                {t.amount < 0 ? `-₹${Math.abs(t.amount)}` : `+₹${t.amount}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
