import React from "react";
import { useTranslation } from "react-i18next"; 
import "../index.css";

export default function Footer() {
  const { t } = useTranslation(); 

  return (
    <footer className="footer">
      <div className="footer-logos-top">
        <img
          src="/imagens/logo lideranças footer.png"
          alt={t("logoLiderancasAlt")}
          className="logo-liderancas"
        />
        <img
          src="/imagens/logo cybersirens.png"
          alt={t("logoCybersirensAlt")}
          className="logo-cybersirens"
        />
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h3>{t("footerNavTitle")}</h3>
          <div className="footer-links">
            <a
              href="https://liderancasempaticas.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerNavInicio")}
            </a>
            <a
              href="https://liderancasempaticas.com/sobre"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerNavSobre")}
            </a>
            <a
              href="https://liderancasempaticas.com/projetos"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerNavProjetos")}
            </a>
            <a
              href="https://liderancasempaticas.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerNavBlog")}
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>{t("footerContatoTitle")}</h3>
          <div className="footer-links">
            <a
              href="https://www.google.com/maps/place/FECAP+-+Funda%C3%A7%C3%A3o+Escola+de+Com%C3%A9rcio+%C3%81lvares+Penteado+-+Campus+Liberdade/@-23.5572299,-46.6395327,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59a8b4d648f9:0x862df06cefe8bc3e!8m2!3d-23.5572348!4d-46.6369578!16s%2Fg%2F122xff09?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footerContatoEndereco")}
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


        <div className="footer-section">
          <h3>{t("footerRedesTitle")}</h3>
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
              {t("footerLinkedin")}
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
              {t("footerInstagram")}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy">© 2025 {t("footerCopy")}</div>
    </footer>
  );
}
