import React from 'react';
import './styles/sidebar.css';

export default function SidebarMenu() {
  return (
    <aside className="sidebar">
      <ul>
        <li>🏠 Home</li>
        <li>📋 Atividades</li>
        <li>🎯 Metas</li>
        <li>📊 Relatórios</li>
        <li>⚙️ Configurações</li>
      </ul>
    </aside>
  );
}
