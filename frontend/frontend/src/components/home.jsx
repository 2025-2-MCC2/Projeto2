import React from "react";
import ImageCard from "src/components/imageCard.jsx";

// Array com todas as imagens
import img1 from "../imagens/imagem1.jpg";
import img2 from "../imagens/imagem2.jpg";
// ... faça o mesmo para as 18 imagens
import img18 from "../imagens/imagem18.jpg";

export default function Home() {
  const imagens = [img1, img2, /* ... até img18 */ img18];

  return (
    <section className="hero">
      <div className="background-grid">
        {imagens.map((img, index) => (
          <ImageCard key={index} src={img} alt={`Imagem ${index + 1}`} />
        ))}
      </div>

      <div className="hero-content">
        <h1>Faça parte da mudança!</h1>
        <p>
          Cadastre seu grupo e participe de ações que ajudam quem precisa,
          conectando voluntários, mentores e doações.
        </p>
        <p className="subtext">
          Cadastre-se agora e comece a contribuir como voluntário, mentor ou doador
        </p>
        <div className="hero-buttons">
          <button className="btn-aluno">
            <span className="button_top">Aluno</span>
          </button>
          <button className="btn-mentor">
            <span className="button_top">Mentor</span>
          </button>
          <button className="btn-doador">
            <span className="button_top">Doador</span>
          </button>
        </div>
      </div>
    </section>
  );
}
