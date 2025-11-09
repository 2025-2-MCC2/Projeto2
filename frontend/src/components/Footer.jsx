import React from "react";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logos no topo lado a lado */}
      <div className="footer-logos-top">
        <img
          src="/imagens/logo lideranças footer.png"
          alt="Logo Lideranças"
          className="logo-liderancas"
        />
        <img
          src="/imagens/logo cybersirens.png"
          alt="Logo CyberSirens"
          className="logo-cybersirens"
        />
      </div>

      {/* Container com Navegação, Contato e Redes Sociais */}
      <div className="footer-container">

        {/* Navegação */}
        <div className="footer-section">
          <h3>NAVEGAÇÃO</h3>
          <div className="footer-links">
            <a href="/">Início</a>
            <a href="/sobre">Sobre Nós</a>
            <a href="/projetos">Projetos</a>
            <a href="/blog">Blog/Notícias</a>
          </div>
        </div>

        {/* Contato */}
        <div className="footer-section">
          <h3>CONTATO</h3>
          <div className="footer-links">
            <a
              href="https://www.google.com/maps/place/FECAP+-+Fundação+Escola+de+Comércio+Álvares+Penteado"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avenida Liberdade, 552
            </a>
            <a
              href="https://liderancasempaticas.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              liderancasempaticas.com
            </a>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="footer-section">
          <h3>REDES SOCIAIS</h3>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/company/projeto-lideranças-empáticas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/imagens/logo linkedin.png"
                alt="Linkedin"
                className="icon-social"
              />
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/liderancasempaticas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/imagens/logo insta.png"
                alt="Instagram"
                className="icon-social"
              />
              Instagram
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © 2025 Lideranças Empáticas — Todos os direitos reservados.
      </div>
    </footer>
  );
}