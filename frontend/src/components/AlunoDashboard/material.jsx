import React, { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import "./material.css";
import Sidebar from "./SidebarAluno/SidebarAluno";

export default function Materiais() {
  const [videos, setVideos] = useState([
    { id: 1, titulo: "O que não fazer durante o projeto", url: "https://www.youtube.com/embed/g2Sdv8065KM" },
    { id: 2, titulo: "Liderança Empática", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ]);

  const [documentos, setDocumentos] = useState([
    { id: 1, nome: "Plano de Ação.pdf" },
    { id: 2, nome: "Relatório Mensal.docx" },
  ]);

  const [novoVideo, setNovoVideo] = useState({ titulo: "", url: "" });
  const [novoDocFile, setNovoDocFile] = useState(null);

  // Documentos
  const handleAddDocumento = (e) => {
    e.preventDefault();
    if (novoDocFile) {
      setDocumentos([
        { id: Date.now(), nome: novoDocFile.name, file: novoDocFile },
        ...documentos,
      ]);
      setNovoDocFile(null);
      e.target.reset();
    }
  };

  const handleRemoveDocumento = (id) => {
    setDocumentos(documentos.filter(doc => doc.id !== id));
  };

  // Vídeos
  const handleAddVideo = (e) => {
    e.preventDefault();
    if (novoVideo.titulo && novoVideo.url) {
      let embedUrl = novoVideo.url;
      if (embedUrl.includes("watch?v=")) {
        embedUrl = embedUrl.replace("watch?v=", "embed/");
      }
      setVideos([{ id: Date.now(), titulo: novoVideo.titulo, url: embedUrl }, ...videos]);
      setNovoVideo({ titulo: "", url: "" });
    }
  };

  const handleRemoveVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <div className="materiais-page">
      <Sidebar />

      <main className="materiais-main">
        <div className="materiais-header">
          <h1>Materiais</h1>
        </div>

        {/* Seção de vídeos */}
        <div className="materiais-section">
          <h2>Vídeos do Projeto</h2>

          <form className="upload-form" onSubmit={handleAddVideo}>
            <input
              type="text"
              placeholder="Título do vídeo"
              value={novoVideo.titulo}
              onChange={(e) => setNovoVideo({ ...novoVideo, titulo: e.target.value })}
            />
            <input
              type="text"
              placeholder="Link do YouTube"
              value={novoVideo.url}
              onChange={(e) => setNovoVideo({ ...novoVideo, url: e.target.value })}
            />
            <button type="submit">Adicionar Vídeo</button>
          </form>

          <div className="videos-container">
            {videos.map((video) => (
              <div key={video.id} className="video-card">
                <iframe
                  width="250"
                  height="140"
                  src={video.url}
                  title={video.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{video.titulo}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveVideo(video.id)}
                  aria-label="Remover vídeo"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de documentos */}
        <div className="materiais-section">
          <h2>Documentos & Feedbacks</h2>

          <form className="upload-form" onSubmit={handleAddDocumento}>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setNovoDocFile(e.target.files[0])}
            />
            <button
              type="button"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <FaFileUpload /> Selecionar Documento
            </button>
            <button type="submit">Adicionar Documento</button>
          </form>

          <div className="documentos-lista">
            {documentos.map((doc) => (
              <div key={doc.id} className="documento-card">
                <FaFileUpload className="doc-icon" />
                <span>{doc.nome}</span>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveDocumento(doc.id)}
                  aria-label="Remover documento"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
