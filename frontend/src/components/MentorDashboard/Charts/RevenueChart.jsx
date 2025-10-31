import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './RevenueChart.css';

const data = [
  { year: 2016, value: 20000 },
  { year: 2017, value: 35000 },
  { year: 2018, value: 50000 },
  { year: 2019, value: 60000 },
  { year: 2020, value: 70000 },
  { year: 2021, value: 80000 },
  { year: 2022, value: 90000 },
  { year: 2023, value: 100000 },
];

export default function RevenueChart() {
  return (
    <div className="revenue-card">
      <h3 className="revenue-title">Arrecadação Total</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="year" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#0f7a4f" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
