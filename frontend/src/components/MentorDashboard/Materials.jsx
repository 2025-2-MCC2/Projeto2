    import React, { useState } from "react";
    import Sidebar from "./Sidebar/Sidebar";
    import { FaFileUpload, FaYoutube } from "react-icons/fa";
    import "./Materials.css";

    export default function Materiais() {
    const [videos, setVideos] = useState([
        { id: 1, titulo: "O que não fazer durante o projeto", url: "https://youtu.be/g2Sdv8065KM?si=DTiGG53d44i5rJrO" },
        { id: 2, titulo: "Liderança Empática", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ]);

    const [documentos, setDocumentos] = useState([
        { id: 1, nome: "Plano de Ação.pdf" },
        { id: 2, nome: "Relatório Mensal.docx" },
    ]);

    const [novoDoc, setNovoDoc] = useState("");
    
    const handleAddDocumento = (e) => {
        e.preventDefault();
        if (novoDoc) {
        setDocumentos([{ id: Date.now(), nome: novoDoc }, ...documentos]);
        setNovoDoc("");
        }
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
                </div>
                ))}
            </div>
            </div>

            {/* Seção de documentos */}
            <div className="materiais-section">
            <h2>Documentos & Feedbacks</h2>
            <form className="upload-form" onSubmit={handleAddDocumento}>
                <input
                type="text"
                placeholder="Nome do documento"
                value={novoDoc}
                onChange={(e) => setNovoDoc(e.target.value)}
                />
                <button type="submit"><FaFileUpload /> Subir Documento</button>
            </form>
            <div className="documentos-lista">
                {documentos.map((doc) => (
                <div key={doc.id} className="documento-card">
                    <FaFileUpload className="doc-icon" />
                    <span>{doc.nome}</span>
                </div>
                ))}
            </div>
            </div>
        </main>
        </div>
    );
    }
