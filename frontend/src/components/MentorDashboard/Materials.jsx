import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { FaFileUpload, FaYoutube, FaChevronDown, FaPlus } from "react-icons/fa";
import "./Materials.css";

export default function Materiais() {
  const videosLista = [
    { id: "g2Sdv8065KM", titulo: "O que não fazer durante o projeto" },
    { id: "NR9xfLn9dZs", titulo: "Vídeo 2" },
    { id: "NRx62-5PebM", titulo: "Vídeo 3" },
    { id: "wmMthOE3Bcc", titulo: "Vídeo 4" },
    { id: "yKY5lijQ0Rg", titulo: "Vídeo 5" },
  ];

  const [documentos, setDocumentos] = useState([
    { id: 1, nome: "Plano de Ação.pdf", url: null },
    { id: 2, nome: "Relatório Mensal.docx", url: null },
  ]);
  const fileInputRef = useRef(null);

  const handleFilePick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const novo = {
      id: Date.now(),
      nome: file.name,
      url: URL.createObjectURL(file), 
    };
    setDocumentos((prev) => [novo, ...prev]);
    e.target.value = null;
  };


  const [showAllVideos, setShowAllVideos] = useState(false);
  const alunosMock = [
    { id: "a1", nome: "Ana Oliveira" },
    { id: "a2", nome: "João Lima" },
    { id: "a3", nome: "Carla Mendes" },
    { id: "a4", nome: "Lucas Pereira" },
    { id: "a5", nome: "Rafa Morais" },
  ];

  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackTarget, setFeedbackTarget] = useState("public"); 
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbacks, setFeedbacks] = useState([]); 

  const abrirCriarFeedback = () => {
    setFeedbackTarget("public");
    setFeedbackText("");
    setFeedbackModalOpen(true);
  };

  const enviarFeedback = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    const novo = {
      id: Date.now(),
      target: feedbackTarget,
      text: feedbackText.trim(),
      createdAt: new Date().toISOString(),
    };
    setFeedbacks((p) => [novo, ...p]);
    setFeedbackModalOpen(false);
  };

  return (
    <div className="materiais-page">
      <Sidebar />
      <main className="materiais-main">
        <div className="materiais-header">
          <h1>Materiais</h1>
        </div>
        <div className="materiais-section videos-section">
          <div className="section-head">
            <h2>Vídeos do Projeto</h2>
            <button
              className="ver-todos-link"
              onClick={() => setShowAllVideos((s) => !s)}
              title={showAllVideos ? "Ocultar vídeos" : "Ver todos vídeos"}
            >
              {showAllVideos ? "Ocultar vídeos" : "Ver todos"} <FaChevronDown />
            </button>
          </div>
          <div className="videos-principais">
            {videosLista.slice(0, 2).map((v) => (
              <div className="video-card-main" key={v.id}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p>{v.titulo}</p>
              </div>
            ))}
          </div>
          {showAllVideos && (
            <div className="videos-lista">
              {videosLista.slice(2).map((v) => (
                <div className="video-list-item" key={v.id}>
                  <div className="thumb">
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.titulo}
                    />
                  </div>
                  <div className="meta">
                    <p className="titulo">{v.titulo}</p>
                    <a
                      className="abrir-link"
                      href={`https://www.youtube.com/watch?v=${v.id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Abrir no YouTube
                    </a>
                  </div>
                </div>
              ))}
              {videosLista.slice(2).length === 0 && <p>Nenhum vídeo adicional.</p>}
            </div>
          )}
        </div>

        <div className="materiais-section">
          <div className="section-head">
            <h2>Documentos & Feedbacks</h2>

            <div className="actions-row">
              <div className="upload-area">
                <input
                  ref={fileInputRef}
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <button className="btn-upload" onClick={handleFilePick}>
                  <FaFileUpload /> Subir Documento
                </button>
              </div>

              <button className="btn-create-feedback" onClick={abrirCriarFeedback}>
                <FaPlus /> Criar Feedback
              </button>
            </div>
          </div>

          <div className="documentos-lista materiais-documentos">
            {documentos.map((doc) => (
              <div key={doc.id} className="documento-card materiais-documento-card">
                <FaFileUpload className="doc-icon" />
                <div className="doc-info">
                  <span className="doc-name">{doc.nome}</span>
                  {doc.url && (
                    <a
                      className="doc-link"
                      href={doc.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visualizar
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="feedbacks-area">
            <h3>Feedbacks enviados</h3>
            {feedbacks.length === 0 && <p className="sem-feedback">Nenhum feedback enviado ainda.</p>}
            <div className="feedbacks-lista">
              {feedbacks.map((fb) => (
                <div key={fb.id} className="feedback-card">
                  <div className="feedback-meta">
                    <strong>{fb.target === "public" ? "Público" : alunosMock.find(a => a.id === fb.target)?.nome}</strong>
                    <span className="feedback-date">{new Date(fb.createdAt).toLocaleString()}</span>
                  </div>
                  <div className="feedback-text">{fb.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {feedbackModalOpen && (
          <div className="modal-overlay" onClick={() => setFeedbackModalOpen(false)}>
            <div className="modal feedback-modal" onClick={(e) => e.stopPropagation()}>
              <h2>Criar Feedback</h2>
              <form onSubmit={enviarFeedback}>
                <label>
                  Destinatário
                  <select value={feedbackTarget} onChange={(e) => setFeedbackTarget(e.target.value)}>
                    <option value="public">Público (todos)</option>
                    {alunosMock.map((al) => (
                      <option key={al.id} value={al.id}>
                        {al.nome}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Mensagem
                  <textarea
                    rows="4"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Escreva o feedback aqui..."
                  />
                </label>

                <div className="modal-actions">
                  <button type="button" className="cancel-btn" onClick={() => setFeedbackModalOpen(false)}>Cancelar</button>
                  <button type="submit" className="save-btn">Enviar Feedback</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
