import React, { useState } from "react";
import Sidebar from "../AlunoDashboard/SidebarAluno/SidebarAluno";
import { FaPaperPlane, FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import "./Messages.css";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState("Equipe Alpha");
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const chats = [
    { id: 1, name: "Equipe Alpha", lastMessage: "Reunião amanhã às 14h." },
    { id: 2, name: "Equipe Beta", lastMessage: "Relatório enviado!" },
    { id: 3, name: "Equipe Gamma", lastMessage: "Feedback do mentor pendente." },
  ];

  const [messages, setMessages] = useState({
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
  });

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const novaMensagem = { sender: "Mentor", text: inputValue };
    setMessages((prev) => ({
      ...prev,
      [selectedChat]: [...prev[selectedChat], novaMensagem],
    }));
    setInputValue("");
    setShowEmojiPicker(false);
  };

  const handleEmojiClick = (emojiData) => {
    setInputValue((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="messages-dashboard">
      <Sidebar />
      <div className="messages-container">
        <h1 className="messages-title">Mensagens</h1>

        <div className="messages-content">
          {/* Sidebar de conversas */}
          <aside className="chat-list">
            <h2>Conversas</h2>
            <div className="chat-scroll">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${
                    selectedChat === chat.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedChat(chat.name)}
                >
                  <div className="chat-avatar">
                    {chat.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="chat-info">
                    <h4>{chat.name}</h4>
                    <p>{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
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
              <div className="emoji-container">
                <FaSmile
                  className="emoji-icon"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                />
                {showEmojiPicker && (
                  <div className="emoji-picker">
                    <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
                  </div>
                )}
              </div>

              <input
                type="text"
                placeholder="Digite uma mensagem..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>
                <FaPaperPlane />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
