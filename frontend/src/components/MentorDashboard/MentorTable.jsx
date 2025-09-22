import React from 'react';
import './styles/dashboard.css';

const MentorTable = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">Mentorados Recentes</h2>
      <table className="mentor-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th>Última Sessão</th>
            <th>Avaliação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João Silva</td>
            <td>Ativo</td>
            <td>12/09/2025</td>
            <td>4.7</td>
          </tr>
          <tr>
            <td>Ana Costa</td>
            <td>Inativo</td>
            <td>05/08/2025</td>
            <td>4.2</td>
          </tr>
          <tr>
            <td>Lucas Rocha</td>
            <td>Ativo</td>
            <td>20/09/2025</td>
            <td>4.9</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MentorTable;
