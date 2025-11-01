import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: faHome, label: 'Home', path: '/dashboard-mentor' },
    { icon: faUser, label: 'Perfil', path: '/dashboard-mentor/perfil' },
    { icon: faChartLine, label: 'Progresso', path: '/dashboard-mentor/progresso' },
    { icon: faFileAlt, label: 'Relatórios', path: '/dashboard-mentor/relatorios' },
    { icon: faEnvelope, label: 'Mensagens', path: '/dashboard-mentor/messages' },
    { icon: faUsers, label: 'Mentoria', path: '/dashboard-mentor/mentoria' },
    { icon: faBook, label: 'Materiais', path: '/dashboard-mentor/materiais' },
    { icon: faCog, label: 'Configurações', path: '/dashboard-mentor/config' },
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
            <li key={index} onClick={() => navigate(item.path)}>
              <FontAwesomeIcon icon={item.icon} className="menu-icon" />
              {isOpen && <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {/* === Rodapé: Logout === */}
      <div className="sidebar-footer">
        <button
          className="logout-btn"
          onClick={() => navigate('/login-mentor')}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" />
          {isOpen && <span>Sair</span>}
        </button>
      </div>
    </div>
  );
}
