import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  faSignOutAlt,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function SidebarMentor() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Carrega o estado do localStorage (mantém fechado/aberto)
  const [isExpanded, setIsExpanded] = useState(() => {
    const saved = localStorage.getItem("sidebarExpanded");
    return saved === null ? true : JSON.parse(saved);
  });

  // 🔹 Salva no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("sidebarExpanded", JSON.stringify(isExpanded));
  }, [isExpanded]);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const menuItems = [
    { icon: faHome, label: 'Home', path: '/dashboard-mentor' },
    { icon: faUser, label: 'Perfil', path: '/dashboard-mentor/perfil' },
    { icon: faChartLine, label: 'Progresso', path: '/dashboard-mentor/progress' },
    { icon: faFileAlt, label: 'Relatórios', path: '/dashboard-mentor/reports' },
    { icon: faEnvelope, label: 'Mensagens', path: '/dashboard-mentor/messages' },
    { icon: faUsers, label: 'Mentoria', path: '/dashboard-mentor/mentoring' },
    { icon: faBook, label: 'Materiais', path: '/dashboard-mentor/materials' },
    { icon: faCog, label: 'Configurações', path: '/dashboard-mentor/config' },
  ];

  return (
    <aside className={`mentor-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {/* Topo */}
      <div className="mentor-sidebar-top">
        <button className="mentor-toggle-btn" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight} />
        </button>

        <div className="mentor-sidebar-logo-group">
          <FontAwesomeIcon icon={faUsers} className="mentor-sidebar-logo" />
          {isExpanded && <h2>CyberSirens</h2>}
        </div>

        {isExpanded && <hr className="mentor-sidebar-divider" />}
      </div>

      {/* Navegação */}
      <nav className="mentor-sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(item.path);
                // 🔹 mantém o sidebar como está (não abre nem fecha)
              }}
              className={location.pathname === item.path ? 'active' : ''}
            >
              <FontAwesomeIcon icon={item.icon} className="mentor-menu-icon" />
              {isExpanded && <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {/* Rodapé */}
      <div className="mentor-sidebar-footer">
        <button
          className="mentor-logout-btn"
          onClick={() => navigate('/login-mentor')}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mentor-menu-icon" />
          {isExpanded && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
}
