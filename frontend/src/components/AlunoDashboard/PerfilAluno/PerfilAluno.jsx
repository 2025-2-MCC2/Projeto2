import React from "react";
import "./PerfilAluno.css"; // opcional se quiser estilizar separado

export default function PerfilAluno() {
  return (
    <div className="perfil-aluno">
      <h1>Perfil do Aluno</h1>

      <div className="perfil-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt="Foto do aluno"
          className="perfil-foto"
        />

        <div className="perfil-detalhes">
          <p><strong>Nome:</strong> Katiê Prado</p>
          <p><strong>Curso:</strong> Jogos Digitais</p>
          <p><strong>RA:</strong> 123456</p>
          <p><strong>Email:</strong> katie.prado@exemplo.com</p>
        </div>
      </div>
    </div>
  );
}
