import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Hero = () => {
  const navigate = useNavigate();

  const imagens = [
    "imagem1.jpg", "imagem2.jpg", "imagem3.jpg", "imagem4.jpg",
    "imagem5.jpg", "imagem6.jpg", "imagem7.jpg", "imagem8.avif",
    "imagem9.jpg", "imagem10.avif", "imagem11.jpg", "imagem12.jpg",
    "imagem13.jpg", "imagem14.avif", "imagem15.avif", "imagem16.avif",
    "imagem17.jpg", "imagem18.jpg",
  ];

  return (
    <section className="hero">
      <div className="background-grid">
        {imagens.map((img, i) => (
          <img key={i} src={`/imagens/${img}`} alt={`imagem ${i + 1}`} />
        ))}
      </div>

      <div className="hero-content">
        <h1>Faça parte da mudança!</h1>
        <p>
          Cadastre seu grupo e participe de ações que ajudam quem precisa,
          conectando voluntários, mentores e doações.
        </p>
        <p className="subtext">
          Cadastre-se agora e comece a contribuir como voluntário, mentor ou
          doador
        </p>
        <div className="hero-buttons">
          <button className="btn-aluno" onClick={() => navigate("/cadastro-aluno")}>
            <span className="button_top">Aluno</span>
          </button>
          <button className="btn-mentor" onClick={() => navigate("/cadastro-mentor")}>
            <span className="button_top">Mentor</span>
          </button>
          <button className="btn-doador">
            <span className="button_top">Doador</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
