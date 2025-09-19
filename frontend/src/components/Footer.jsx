import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-navigation">
          <h3>NAVEGAÇÃO</h3>
          <ul>
            <li>Início</li>
            <li>Sobre Nós</li>
            <li>Projetos</li>
            <li>Blog/Notícias</li>
            <li>Contato</li>
          </ul>
        </div>

        {/* Seção Contato */}
        <div className="footer-contact">
          <h3>CONTATO</h3>
          <p>Avenida Liberdade, 552</p>
          <p>liderancasempaticas.com</p>
        </div>

        {/* Redes sociais */}
        <div className="footer-social">
          <div className="social-item">
            <img src="/imagens/logo linkedin.png" alt="LinkedIn" />
            <span>Linkedin</span>
          </div>
          <div className="social-item">
            <img src="/imagens/logo insta.png" alt="Instagram" />
            <span>Instagram</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        © 2025 Lideranças Empáticas – Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
