import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./RevenueChart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function RevenueChart() {
  const [period, setPeriod] = useState("anual");

  const dataOptions = {
    semanal: [
      { label: "Seg", value: 1200 },
      { label: "Ter", value: 1800 },
      { label: "Qua", value: 1600 },
      { label: "Qui", value: 2000 },
      { label: "Sex", value: 2500 },
      { label: "Sáb", value: 1900 },
      { label: "Dom", value: 2300 },
    ],
    mensal: [
      { label: "Jan", value: 15000 },
      { label: "Fev", value: 18000 },
      { label: "Mar", value: 22000 },
      { label: "Abr", value: 20000 },
      { label: "Mai", value: 25000 },
      { label: "Jun", value: 28000 },
      { label: "Jul", value: 30000 },
      { label: "Ago", value: 27000 },
      { label: "Set", value: 31000 },
      { label: "Out", value: 35000 },
      { label: "Nov", value: 37000 },
      { label: "Dez", value: 40000 },
    ],
    anual: [
      { label: "2021", value: 60000 },
      { label: "2022", value: 85000 },
      { label: "2023", value: 95000 },
      { label: "2024", value: 110000 },
      { label: "2025", value: 125000 },
    ],
  };

  const handleChange = (e) => setPeriod(e.target.value);

  return (
    <div className="revenue-card">
      <div className="revenue-header">
        <h3 className="revenue-title">
          <FontAwesomeIcon icon={faChartLine} className="revenue-icon" />
          Arrecadação Total
        </h3>

        <select value={period} onChange={handleChange} className="period-select">
          <option value="semanal">Semanal</option>
          <option value="mensal">Mensal</option>
          <option value="anual">Anual</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={dataOptions[period]}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="label" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0f7a4f"
            strokeWidth={3}
            dot={{ r: 4, fill: "#0f7a4f" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
