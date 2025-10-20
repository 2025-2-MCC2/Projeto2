import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUtensils } from '@fortawesome/free-solid-svg-icons';
import './cards.css';

function Card1() {
  return (
    <div className="card">
      <div className="circle circle-blue">
        <FontAwesomeIcon icon={ faUtensils} />
      </div>
      <div className="card-text">
        <h3>0+</h3>
        <p>Produtos arrecadados essa semana.</p>
      </div>
    </div>
  );
}

export default Card1;
