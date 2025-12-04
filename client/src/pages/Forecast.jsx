import { useEffect, useState } from "react";
import { api } from "../services/api";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Forecast() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    api.get("/insights/forecast?days=30").then((res) => {
      setForecast(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">30-Day Forecast</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={forecast}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="predicted" stroke="#16a34a" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
