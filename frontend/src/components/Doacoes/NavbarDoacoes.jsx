import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavbarDoacoes.css";

const NavbarDoacoes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar-doacoes">
      <ul>
        <li 
          className={isActive("/doacoes/sobre-nos") ? "active" : ""}
          onClick={() => handleNavigation("/doacoes/sobre-nos")}
        >
          <span className="icon">🏛️</span>
          Sobre Nós
        </li>
        <li 
          className={isActive("/doacoes/campanhas") ? "active" : ""}
          onClick={() => handleNavigation("/doacoes/campanhas")}
        >
          <span className="icon">📢</span>
          Campanha
        </li>
        <li 
          className={isActive("/doacoes") ? "active" : ""}
          onClick={() => handleNavigation("/doacoes")}
        >
          <span className="icon">🎁</span>
          minhas doações
        </li>
        <li 
          className={isActive("/doacoes/perfil") ? "active" : ""}
          onClick={() => handleNavigation("/doacoes/perfil")}
        >
          <span className="icon">👤</span>
          Perfil
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDoacoes;