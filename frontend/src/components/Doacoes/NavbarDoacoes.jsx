import React, { useState } from "react";
import "./NavbarDoacoes.css";

const NavbarDoacoes = () => {
  const [activeTab, setActiveTab] = useState("doacoes");

  return (
    <nav className="navbar-doacoes">
      <ul>
        <li 
          className={activeTab === "sobre" ? "active" : ""}
          onClick={() => setActiveTab("sobre")}
        >
          <span className="icon">🏛️</span>
          Sobre Nós
        </li>
        <li 
          className={activeTab === "campanha" ? "active" : ""}
          onClick={() => setActiveTab("campanha")}
        >
          <span className="icon">📢</span>
          Campanha
        </li>
        <li 
          className={activeTab === "doacoes" ? "active" : ""}
          onClick={() => setActiveTab("doacoes")}
        >
          <span className="icon">🎁</span>
          minhas doações
        </li>
        <li 
          className={activeTab === "perfil" ? "active" : ""}
          onClick={() => setActiveTab("perfil")}
        >
          <span className="icon">👤</span>
          Perfil
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDoacoes;