import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './cards.css';

function Card2() {
  return (
    <div className="card-aluno">
      <div className="card-aluno-circle card-aluno-orange">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="card-aluno-text">
        <h3>5°</h3>
        <p>Posição no ranking.</p>
      </div>
    </div>
  );
}

export default Card2;
 