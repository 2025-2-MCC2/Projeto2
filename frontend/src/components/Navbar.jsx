import React, { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  // Fecha dropdown ao clicar fora
  document.addEventListener("click", () => setDropdownOpen(false));

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/images/LOGO-Lideranças.avif" alt="Logo" />
        </div>

        <div className="nav-actions">
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Português (Brasil) <span className="arrow">▼</span>
            </button>
            {dropdownOpen && (
              <ul className="dropdown-content">
                <li>Português (Brasil)</li>
                <li>English</li>
                <li>Español</li>
              </ul>
            )}
          </div>

          <div className="dropdown signup-cadastro">
            <button className="btn-cadastro" onClick={toggleDropdown}>
              Cadastre-se <span className="arrow">▼</span>
            </button>
            {dropdownOpen && (
              <ul className="dropdown-content"> 
                <li>
                  <a href="signup aluno.html">
                    <img src="/imagens/icone aluno.png" alt="Aluno" className="icon" />
                    Aluno
                  </a>
                </li>
                <li>
                  <a href="signup mentor.html">
                    <img src="/images/icone mentor.png" alt="Mentor" className="icon" />
                    Mentor
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
