// Footer.jsx
import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo do canto esquerdo */}
        <div className="footer-logo-left">
          <img src="/imagens/logo-footer-left.png" alt="Logo" />
        </div>

        {/* Navegação */}
        <div className="footer-navigation">
          <img
            src="/imagens/logo"
            alt="Logo"
            className="footer-logo-top"
          />
          <h3>NAVEGAÇÃO</h3>
          <ul>
            <li>Início</li>
            <li>Sobre Nós</li>
            <li>Projetos</li>
            <li>Blog/Notícias</li>
            <li>Contato</li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-contact">
          <h3>CONTATO</h3>
          <p>Avenida Liberdade, 552</p>
          <p>liderancasempaticas.com</p>

          <div className="footer-social">
            <div className="social-item">
              <img src="/imagens/linkedin.png" alt="Linkedin" />
              Linkedin
            </div>
            <div className="social-item">
              <img src="/imagens/instagram.png" alt="Instagram" />
              Instagram
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © 2025 Lideranças Empáticas – Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
