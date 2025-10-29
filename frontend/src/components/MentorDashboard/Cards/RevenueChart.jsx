import React from "react";
import Card from "./Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueChart({ data, period, setPeriod }) {
  return (
    <Card className="arrecadacao-card">
      <div className="card-header">
        <h3>Arrecadação Total</h3>
      </div>
      <div className="period-filter">
        {["semanal", "mensal", "anual"].map((p) => (
          <button
            key={p}
            className={period === p ? "active" : ""}
            onClick={() => setPeriod(p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={120}>
        <LineChart data={data[period]}>
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="valor" stroke="#FF4400" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}