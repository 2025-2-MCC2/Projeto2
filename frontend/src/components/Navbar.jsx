import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../index.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleLangDropdown = (e) => {
    e.stopPropagation();
    setLangDropdownOpen(!langDropdownOpen);
    setSignupDropdownOpen(false);
  };

  const toggleSignupDropdown = (e) => {
    e.stopPropagation();
    setSignupDropdownOpen(!signupDropdownOpen);
    setLangDropdownOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);
  };

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
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
              {i18n.language === "pt" && "Português (Brasil)"}
              {i18n.language === "en" && "English"}
              {i18n.language === "es" && "Español"} <span className="arrow">▼</span>
            </button>
            {langDropdownOpen && (
              <ul className="dropdown-content">
                <li onClick={() => changeLanguage("pt")}>Português (Brasil)</li>
                <li onClick={() => changeLanguage("en")}>English</li>
                <li onClick={() => changeLanguage("es")}>Español</li>
              </ul>
            )}
          </div>

          {/* Dropdown de cadastro */}
          <div className="dropdown signup-cadastro">
            <button className="btn-cadastro" onClick={toggleSignupDropdown}>
              {t("navbarSignup")} <span className="arrow">▼</span>
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
                    {t("btnAluno")}
                  </Link>
                </li>
                <li>
                  <Link to="/cadastro-mentor">
                    <img
                      src="/imagens/icone mentor.png"
                      alt="Mentor"
                      className="icon"
                    />
                    {t("btnMentor")}
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
