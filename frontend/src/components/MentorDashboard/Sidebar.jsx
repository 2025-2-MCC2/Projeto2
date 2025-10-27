import React from "react";
import "./Sidebar.css";

export default function Sidebar({ isOpen, setIsOpen }) {
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <i className={`fa-solid ${isOpen ? "fa-angle-left" : "fa-angle-right"}`}></i>
      </button>

      <div className="sidebar-content">
        <div className="sidebar-header">
          <div className="group-photo"><span>Foto</span></div>
          {isOpen && <h2>Nome do Grupo</h2>}
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item"><i className="fa-solid fa-user"></i>{isOpen && <span>Perfil</span>}</button>
          <button className="nav-item"><i className="fa-solid fa-chart-line"></i>{isOpen && <span>Progresso</span>}</button>
          <button className="nav-item"><i className="fa-solid fa-file-lines"></i>{isOpen && <span>Relatórios</span>}</button>
          <button className="nav-item"><i className="fa-solid fa-envelope"></i>{isOpen && <span>Mensagens</span>}</button>
          <button className="nav-item"><i className="fa-solid fa-chalkboard-teacher"></i>{isOpen && <span>Mentoria</span>}</button>
          <button className="nav-item"><i className="fa-solid fa-book"></i>{isOpen && <span>Materiais</span>}</button>
          <button className="nav-item"><i className="fa-solid fa-gear"></i>{isOpen && <span>Configurações</span>}</button>
        </nav>

        <div className="sidebar-footer">

          {isOpen && (
            <button className="logout-btn">
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
              </div>
              <div className="text">Sair</div>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
