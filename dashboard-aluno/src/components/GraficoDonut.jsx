import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import "../styles/GraficoDonut.css";

const GraficoDonut = () => {
  const dados = [
    { name: "Vendas", value: 45, color: "#0B6D48" },
    { name: "Doações", value: 30, color: "#10b981" },
    { name: "Eventos", value: 15, color: "#3b82f6" },
    { name: "Outros", value: 10, color: "#f59e0b" },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="donut-tooltip">
          <p className="tooltip-label">{payload[0].name}</p>
          <p className="tooltip-value">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) / 2; // meio da fatia
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle" // centraliza horizontalmente
        dominantBaseline="middle" // centraliza verticalmente
        style={{ fontSize: "0.85rem", fontWeight: "bold" }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="donut-card">
      <h3>Fontes de Arrecadação</h3>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={dados}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={90}
            innerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {dados.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value) => (
              <span style={{ color: "#666", fontSize: "0.85rem" }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoDonut;