import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/Grafico.css";

const GraficoArrecadacao = () => {
  
  const dados = [
    { mes: "Jan", valor: 12000 },
    { mes: "Fev", valor: 19000 },
    { mes: "Mar", valor: 15000 },
    { mes: "Abr", valor: 25000 },
    { mes: "Mai", valor: 22000 },
    { mes: "Jun", valor: 30000 },
    { mes: "Jul", valor: 28000 },
  ];


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{`${payload[0].payload.mes}`}</p>
          <p className="tooltip-value">
            {`R$ ${payload[0].value.toLocaleString("pt-BR")}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grafico-card">
      <h3>Arrecadação Mensal do Grupo</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={dados} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="mes" 
            stroke="#666"
            style={{ fontSize: '0.85rem' }}
          />
          <YAxis 
            stroke="#666"
            style={{ fontSize: '0.85rem' }}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="valor"
            stroke="#0B6D48"
            strokeWidth={3}
            dot={{ fill: "#0B6D48", r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoArrecadacao;