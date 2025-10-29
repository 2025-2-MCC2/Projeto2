import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faChartLine,
  faFileAlt,
  faEnvelope,
  faUsers,
  faBook,
  faCog,
  faBars,
  faChevronLeft,
  faPeopleGroup,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: faHome, label: 'Home' },
    { icon: faUser, label: 'Perfil' },
    { icon: faChartLine, label: 'Progresso' },
    { icon: faFileAlt, label: 'Relatórios' },
    { icon: faEnvelope, label: 'Mensagens' },
    { icon: faUsers, label: 'Mentoria' },
    { icon: faBook, label: 'Materiais' },
    { icon: faCog, label: 'Configurações' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      
      {/* === Topo do Sidebar: Toggle + Logo/Nome === */}
      <div className="sidebar-top">
        <button
          className="toggle-btn"
          onClick={toggleSidebar}
          aria-label="Abrir/fechar menu"
        >
          <FontAwesomeIcon icon={isOpen ? faChevronLeft : faBars} />
        </button>

        <div className="sidebar-icon-title">
          <FontAwesomeIcon icon={faPeopleGroup} className="group-icon" />
          {isOpen && <h2>Nome do Grupo</h2>}
        </div>

        {isOpen && <hr className="sidebar-divider" />}
      </div>

      {/* === Menu de Navegação === */}
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={item.icon} className="menu-icon" />
              {isOpen && <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {/* === Rodapé: Logout === */}
      <div className="sidebar-footer">
        <button className="logout-btn">
          <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" />
          {isOpen && <span>Sair</span>}
        </button>
      </div>
    </div>
  );
}
