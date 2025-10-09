import React from 'react';
import '../styles/Sidebar.css'; // Se você já criou o CSS

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>Início</li>
          <li>Relatórios</li>
          <li>Perfil</li>
          <li>Configurações</li>
        </ul>
      </nav>
    </aside>
  );
}