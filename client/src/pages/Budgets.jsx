import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Budgets() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    api.get("/budgets").then((res) => setBudgets(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Budgets</h1>

      <div className="space-y-4">
        {budgets.map((b) => {
          const percent = Math.min((b.spent / b.amount) * 100, 100);

          return (
            <div key={b._id} className="bg-white p-5 shadow rounded-xl">
              <div className="flex justify-between mb-2">
                <h2 className="text-lg font-semibold">{b.name}</h2>
                <p className="text-gray-600">
                  ₹{b.spent} / ₹{b.amount}
                </p>
              </div>

              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    percent > 80 ? "bg-red-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <p className="text-sm mt-1 text-gray-500">{percent.toFixed(1)}% used</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
