import React from 'react';
import './styles/dashboard.css';

const Card = ({ title, value, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <p className="card-title">{title}</p>
        <h3 className="card-value">{value}</h3>
      </div>
    </div>
  );
};

export default Card;
