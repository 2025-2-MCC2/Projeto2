import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";


const Navbar = () => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);


  const toggleLangDropdown = (e) => {
    e.stopPropagation();
    setLangDropdownOpen(!langDropdownOpen);
    setSignupDropdownOpen(false); // fecha o outro dropdown
  };


  const toggleSignupDropdown = (e) => {
    e.stopPropagation();
    setSignupDropdownOpen(!signupDropdownOpen);
    setLangDropdownOpen(false); // fecha o outro dropdown
  };


  // Fecha dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = () => {
      setLangDropdownOpen(false);
      setSignupDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/imagens/LOGO-Lideranças.avif" alt="Logo" />
          </Link>
        </div>


        <div className="nav-actions">
          {/* Dropdown de idioma */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleLangDropdown}>
              Português (Brasil) <span className="arrow">▼</span>
            </button>
            {langDropdownOpen && (
              <ul className="dropdown-content">
                <li>Português (Brasil)</li>
                <li>English</li>
                <li>Español</li>
              </ul>
            )}
          </div>


          {/* Dropdown de cadastro */}
          <div className="dropdown signup-cadastro">
            <button className="btn-cadastro" onClick={toggleSignupDropdown}>
              Cadastre-se <span className="arrow">▼</span>
            </button>
            {signupDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/cadastro-aluno">
                    <img
                      src="/imagens/icone aluno.png"
                      alt="Aluno"
                      className="icon"
                    />
                    Aluno
                  </Link>
                </li>
                <li>
                  <Link to="/cadastro-mentor">
                    <img
                      src="/imagens/icone mentor.png"
                      alt="Mentor"
                      className="icon"
                    />
                    Mentor
                  </Link>
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
