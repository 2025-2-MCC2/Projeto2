import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>© 2025 Lideranças Empáticas. Todos os direitos reservados.</p>
        </div>
        <div className="footer-right">
          <a href="#" target="_blank">
            <img src="/images/instagram.png" alt="Instagram" className="footer-icon" />
          </a>
          <a href="#" target="_blank">
            <img src="/images/youtube.png" alt="YouTube" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
