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
          className="liderancas"
        />
        <img
          src="/imagens/logo cybersirens.png"
          alt="Logo CyberSirens"
          className="cybersirens"
        />
      </div>

      {/* Container com Navegação, Contato, Redes Sociais */}
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
              href="https://www.google.com/maps/place/FECAP+-+Funda%C3%A7%C3%A3o+Escola+de+Com%C3%A9rcio+%C3%81lvares+Penteado+-+Campus+Liberdade/@-23.5572348,-46.6395327,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59a8b4d648f9:0x862df06cefe8bc3e!8m2!3d-23.5572348!4d-46.6369578!16s%2Fg%2F122xff09?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avenida Liberdade, 552
            </a>
            <a href="https://liderancasempaticas.com" target="_blank" rel="noopener noreferrer">
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
              <img src="/imagens/logo linkedin.png" alt="Linkedin" /> Linkedin
            </a>
            <a
              href="https://www.instagram.com/liderancasempaticas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imagens/logo insta.png" alt="Instagram" /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © 2025 Lideranças Empáticas – Todos os direitos reservados
      </div>
    </footer>
  );
}
