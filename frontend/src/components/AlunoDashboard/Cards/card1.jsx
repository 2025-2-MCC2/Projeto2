import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import './cards.css';

function Card1() {
  return (
    <div className="card-aluno">
      <div className="card-aluno-circle card-aluno-blue">
        <FontAwesomeIcon icon={faUtensils} />
      </div>
      <div className="card-aluno-text">
        <h3>0+</h3>
        <p>Produtos arrecadados recentemente.</p>
      </div>
    </div>
  );
}

export default Card1;
