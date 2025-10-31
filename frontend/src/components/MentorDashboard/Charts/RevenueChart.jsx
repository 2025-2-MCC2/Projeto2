import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './RevenueChart.css';

const data = [
  { year: 2016, value: 20000 },
  { year: 2017, value: 35000 },
  { year: 2018, value: 40000 },
  { year: 2019, value: 50000 },
  { year: 2020, value: 65000 },
  { year: 2021, value: 70000 },
  { year: 2022, value: 85000 },
  { year: 2023, value: 95000 },
];

export default function RevenueChart() {
  return (
    <div className="revenue-card">
      <div className="revenue-header">
        <h3>Arrecadação Total</h3>
        <span>Mensal</span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="year" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
