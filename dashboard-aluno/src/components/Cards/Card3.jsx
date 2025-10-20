import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './cards.css';

function Card3() {
  return (
    <div className="card">
      <div className="circle circle-green">
        <FontAwesomeIcon icon={faCommentDots} />
      </div>
      <div className="card-text">
        <p>Chat com a monitoria.</p>
      </div>
    </div>
  );
}

export default Card3;
