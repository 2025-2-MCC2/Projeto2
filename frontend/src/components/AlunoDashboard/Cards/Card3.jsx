import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './cards.css';

function Card3() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard-aluno/mensagens');
  };

  return (
    <div className="card-aluno" onClick={handleClick} style={{ cursor: 'pointer' }}>
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
