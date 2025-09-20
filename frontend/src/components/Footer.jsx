import React from "react";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Coluna 1: Navegação */}
        <div className="footer-section">
          <img
            src="/imagens/logo lideranças footer.png"
            alt="Logo"
            className="footer-logo-top"
          />
          <h3>NAVEGAÇÃO</h3>
          <div className="footer-links">
            <a href="/">Início</a>
            <a href="/sobre">Sobre Nós</a>
            <a href="/projetos">Projetos</a>
            <a href="/blog">Blog/Notícias</a>
            <a href="/contato">Contato</a>
          </div>
        </div>

        {/* Coluna 2: Contato */}
        <div className="footer-section">
          <h3>CONTATO</h3>
          <div className="footer-links">
            <a href="https://goo.gl/maps/xyz" target="_blank">Avenida Liberdade, 552</a>
            <a href="https://liderancasempaticas.com" target="_blank">liderancasempaticas.com</a>
          </div>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className="footer-section">
          <h3>REDES SOCIAIS</h3>
          <div className="footer-links">
            <a href="https://linkedin.com" target="_blank">
              <img src="/imagens/logo linkedin.png" alt="Linkedin" /> Linkedin
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src="/imagens/logo insta.png" alt="Instagram" /> Instagram
            </a>
          </div>
        </div>

        {/* Coluna 4: Logo direita */}
        <div className="footer-logo-right">
          <img src="/imagens/logo cybersirens.png" alt="Logo" />
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © 2025 Lideranças Empáticas – Todos os direitos reservados
      </div>
    </footer>
  );
}
