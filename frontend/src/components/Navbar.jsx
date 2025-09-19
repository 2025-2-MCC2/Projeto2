import React, { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [dropdownLanguageOpen, setDropdownLanguageOpen] = useState(false);
  const [dropdownSignupOpen, setDropdownSignupOpen] = useState(false);

  const toggleLanguage = (e) => {
    e.stopPropagation();
    setDropdownLanguageOpen(!dropdownLanguageOpen);
  };

  const toggleSignup = (e) => {
    e.stopPropagation();
    setDropdownSignupOpen(!dropdownSignupOpen);
  };

  // Fecha dropdowns ao clicar fora
  document.addEventListener("click", () => {
    setDropdownLanguageOpen(false);
    setDropdownSignupOpen(false);
  });

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/imagens/LOGO-Lideranças.avif" alt="Logo" />
        </div>

        <div className="nav-actions">
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleLanguage}>
              Português (Brasil) <span className="arrow">▼</span>
            </button>
            {dropdownLanguageOpen && (
              <ul className="dropdown-content show">
                <li>Português (Brasil)</li>
                <li>English</li>
                <li>Español</li>
              </ul>
            )}
          </div>

          <div className="dropdown signup-cadastro">
            <button className="btn-cadastro" onClick={toggleSignup}>
              Cadastre-se <span className="arrow">▼</span>
            </button>
            {dropdownSignupOpen && (
              <ul className="dropdown-content show">
                <li>
                  <a href="signup aluno.html">
                    <img
                      src="/imagens/icone aluno.png"
                      alt="Aluno"
                      className="icon"
                    />
                    Aluno
                  </a>
                </li>
                <li>
                  <a href="signup mentor.html">
                    <img
                      src="/imagens/icone mentor.png"
                      alt="Mentor"
                      className="icon"
                    />
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
