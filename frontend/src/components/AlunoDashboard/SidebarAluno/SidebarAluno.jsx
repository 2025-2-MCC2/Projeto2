import React, { useState } from 'react';
import '../SidebarAluno/SidebarAluno.css';
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
import { Link } from 'react-router-dom';

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
            <Link to="/dashboard-aluno">
              <FontAwesomeIcon icon={faHouse} className="menu-icon" />
              <span className="menu-text">Início</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-aluno/perfil">
              <FontAwesomeIcon icon={faUser} className="menu-icon" />
              <span className="menu-text">Perfil</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-aluno/progresso">
              <FontAwesomeIcon icon={faBarsProgress} className="menu-icon" />
              <span className="menu-text">Progresso</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-aluno/relatorios">
              <FontAwesomeIcon icon={faFileInvoice} className="menu-icon" />
              <span className="menu-text">Relatórios</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-aluno/mensagens">
              <FontAwesomeIcon icon={faComments} className="menu-icon" />
              <span className="menu-text">Mensagens</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-aluno/agenda">
              <FontAwesomeIcon icon={faCalendar} className="menu-icon" />
              <span className="menu-text">Agenda</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-aluno/materiais">
              <FontAwesomeIcon icon={faBookBookmark} className="menu-icon" />
              <span className="menu-text">Materiais</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-aluno/configuracoes">
              <FontAwesomeIcon icon={faGear} className="menu-icon" />
              <span className="menu-text">Configurações</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}