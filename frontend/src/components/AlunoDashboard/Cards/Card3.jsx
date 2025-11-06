import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './cards.css';

function Card3() {
  return (
    <div className="card-aluno">
      <div className="card-aluno-circle card-aluno-green">
        <FontAwesomeIcon icon={faCommentDots} />
      </div>
      <div className="card-aluno-text">
        <p>Chat com a monitoria.</p>
      </div>
    </div>
  );
}

export default Card3;
