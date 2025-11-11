import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CadastroMentor.css";

export default function CadastroMentor() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const email = event.target.email.value;
    const grupo = event.target.grupo.value;
    const senha = event.target.password.value;

    try {
      const response = await fetch("http://localhost:3000/api/mentor/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, grupo, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar");
      }

      // Salva o token no localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userType", "mentor");
      localStorage.setItem("mentorEmail", email);

      alert("Cadastro realizado com sucesso!");
      navigate("/dashboard-mentor");
      
    } catch (err) {
      console.error("Erro no cadastro:", err);
      setError(err.message || "Erro ao realizar cadastro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mentor-signup-page">
      <div className="mentor-signup-overlay" />

      <div className="mentor-signup-container">
        {/* Cabeçalho */}
        <div className="mentor-signup-header">
          <div className="header-left">
            <h3>Bem-vindo,</h3>
            <span className="mentor-highlight">Mentor!</span>
          </div>

          <div className="header-right">
            <p>Já possui uma conta?</p>
            <a href="/login-mentor" className="mentor-login-link">
              Entrar
            </a>
          </div>
        </div>

        <h1 className="signup-title">Cadastre-se</h1>

        {error && (
          <div style={{
            padding: "10px",
            marginBottom: "15px",
            backgroundColor: "#fee",
            color: "#c33",
            borderRadius: "5px",
            border: "1px solid #fcc"
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
            className="mentor-signup-input"
          />

          <label htmlFor="grupo">Grupo a Mentorar</label>
          <select
            id="grupo"
            name="grupo"
            required
            className="mentor-signup-select"
          >
            <option value="">Selecione um grupo</option>
            <option value="grupo1">Grupo 1</option>
            <option value="grupo2">Grupo 2</option>
            <option value="grupo3">Grupo 3</option>
            <option value="grupo4">Grupo 4</option>
            <option value="grupo5">Grupo 5</option>
          </select>

          <label htmlFor="password">Crie uma senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            required
            className="mentor-signup-input"
          />

          <button 
            type="submit" 
            className="mentor-signup-button"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}