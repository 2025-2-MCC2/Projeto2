import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faHouse,
  faUser,
  faBarsProgress,
  faFileInvoice,
  faComments,
  faCalendar,
  faBookBookmark,
  faGear,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-header">
        <button className="toggle-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight} />
        </button>
        <FontAwesomeIcon icon={faUsers} className="sidebar-logo" />
        <h2 className="sidebar-group-name">CyberSirens</h2>
      </div>

      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHouse} className="menu-icon" />
            <span className="menu-text">Início</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className="menu-icon" />
            <span className="menu-text">Perfil</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBarsProgress} className="menu-icon" />
            <span className="menu-text">Progresso</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faFileInvoice} className="menu-icon" />
            <span className="menu-text">Relatórios</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} className="menu-icon" />
            <span className="menu-text">Mensagens</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} className="menu-icon" />
            <span className="menu-text">Agenda</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBookBookmark} className="menu-icon" />
            <span className="menu-text">Materiais</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} className="menu-icon" />
            <span className="menu-text">Configurações</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}