import React, { useState } from "react";
import "./Messages.css";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState("Equipe Alpha");

  const chats = [
    { id: 1, name: "Equipe Alpha", lastMessage: "Reunião amanhã às 14h." },
    { id: 2, name: "Equipe Beta", lastMessage: "Relatório enviado!" },
    { id: 3, name: "Equipe Gamma", lastMessage: "Feedback do mentor pendente." },
  ];

  const messages = {
    "Equipe Alpha": [
      { sender: "Mentor", text: "Oi pessoal, tudo pronto pra reunião?" },
      { sender: "Clara", text: "Sim, estamos revisando o relatório final!" },
    ],
    "Equipe Beta": [
      { sender: "Mentor", text: "Bom trabalho no relatório 👏" },
      { sender: "Lucas", text: "Valeu mentor!" },
    ],
    "Equipe Gamma": [
      { sender: "Mentor", text: "Precisam de ajuda com o feedback?" },
      { sender: "Ana", text: "Acho que conseguimos, obrigada!" },
    ],
  };

  return (
    <div className="messages-page">
      {/* Sidebar de conversas */}
      <aside className="chat-list">
        <h2>Conversas</h2>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${
              selectedChat === chat.name ? "active" : ""
            }`}
            onClick={() => setSelectedChat(chat.name)}
          >
            <h4>{chat.name}</h4>
            <p>{chat.lastMessage}</p>
          </div>
        ))}
      </aside>

      {/* Área de mensagens */}
      <section className="chat-window">
        <div className="chat-header">
          <h2>{selectedChat}</h2>
        </div>
        <div className="chat-messages">
          {messages[selectedChat]?.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "Mentor" ? "mentor-msg" : "student-msg"
              }`}
            >
              <span className="sender">{msg.sender}:</span> {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Digite uma mensagem..." />
          <button>Enviar</button>
        </div>
      </section>
    </div>
  );
}
