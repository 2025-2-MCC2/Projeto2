import React from 'react';
import './styles/dashboard.css';

const MentorChart = () => {
  return (
    <div className="chart-container">
      <h2 className="chart-title">Sessões por Mês</h2>
      <div className="chart-bars">
        <div className="bar" style={{ height: '60%' }}><span>Jan</span></div>
        <div className="bar" style={{ height: '80%' }}><span>Fev</span></div>
        <div className="bar" style={{ height: '40%' }}><span>Mar</span></div>
        <div className="bar" style={{ height: '70%' }}><span>Abr</span></div>
        <div className="bar" style={{ height: '50%' }}><span>Mai</span></div>
      </div>
    </div>
  );
};

export default MentorChart;
