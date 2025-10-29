import React from "react";
import Card from "./Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TeamRanking({ data }) {
  return (
    <Card className="team-ranking-card">
      <div className="card-header">
        <h3>Ranking de Equipes</h3>
      </div>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data}>
          <XAxis dataKey="equipe" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="valor" fill="#1B2559" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}