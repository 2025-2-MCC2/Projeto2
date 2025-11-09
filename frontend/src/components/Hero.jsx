import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 🟩 Importa o hook
import "../index.css";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // 🟩 Inicializa o hook de tradução

  const imagens = ["fundohome.png"];

  return (
    <section className="hero">
      <div className="background-grid">
        {imagens.map((img, i) => (
          <img key={i} src={`/imagens/${img}`} alt={`imagem ${i + 1}`} />
        ))}
      </div>

      <div className="hero-content">
        {/* 🟢 Textos traduzidos */}
        <h1>{t("heroTitle")}</h1>
        <p>{t("heroText")}</p>
        <p className="subtext">{t("heroSubtext")}</p>

        <div className="hero-buttons">
          <button
            className="btn-aluno"
            onClick={() => navigate("/cadastro-aluno")}
          >
            <span className="button_top">{t("btnAluno")}</span>
          </button>
          <button
            className="btn-mentor"
            onClick={() => navigate("/cadastro-mentor")}
          >
            <span className="button_top">{t("btnMentor")}</span>
          </button>
          <button
            className="btn-doador"
            onClick={() => navigate("/cadastro-doador")}
          >
            <span className="button_top">{t("btnDoador")}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
