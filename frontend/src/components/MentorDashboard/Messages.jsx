import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { FaPaperPlane, FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import "./Messages.css";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState("Equipe Alpha");
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const chats = [
    { id: 1, name: "Equipe Alpha", lastMessage: "Reunião amanhã às 14h." },
    { id: 2, name: "Equipe Beta", lastMessage: "Relatório enviado!" },
    { id: 3, name: "Equipe Gamma", lastMessage: "Feedback do mentor pendente." },
  ];

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return (
      JSON.parse(saved) || {
        "Equipe Alpha": [
          { sender: "Mentor", text: "Oi pessoal, tudo pronto pra reunião?", time: "10:15" },
          { sender: "Clara", text: "Sim, estamos revisando o relatório final!", time: "10:17" },
        ],
        "Equipe Beta": [
          { sender: "Mentor", text: "Bom trabalho no relatório 👏", time: "09:10" },
          { sender: "Lucas", text: "Valeu mentor!", time: "09:12" },
        ],
        "Equipe Gamma": [
          { sender: "Mentor", text: "Precisam de ajuda com o feedback?", time: "08:40" },
          { sender: "Ana", text: "Acho que conseguimos, obrigada!", time: "08:42" },
        ],
      }
    );
  });

  // Salvar mensagens
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedChat]);

  // Função de envio
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const horaAtual = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const novaMensagem = { sender: "Mentor", text: inputValue, time: horaAtual };
    setMessages((prev) => ({
      ...prev,
      [selectedChat]: [...prev[selectedChat], novaMensagem],
    }));
    setInputValue("");
    setShowEmojiPicker(false);
    setIsTyping(false);

    // simula resposta automática
    setTimeout(() => setIsTyping(true), 800);
    setTimeout(() => {
      const respostas = [
        "Perfeito, vamos seguir com isso!",
        "Entendido 👌",
        "Ótimo ponto, obrigado!",
        "Pode deixar que resolvemos!",
        "Show! 👏",
      ];
      const respostaAleatoria =
        respostas[Math.floor(Math.random() * respostas.length)];

      const horaResp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages((prev) => ({
        ...prev,
        [selectedChat]: [
          ...prev[selectedChat],
          { sender: selectedChat, text: respostaAleatoria, time: horaResp },
        ],
      }));
      setIsTyping(false);
    }, 1800);
  };

  const handleEmojiClick = (emojiData) => {
    setInputValue((prev) => prev + emojiData.emoji);
  };

  const handleTyping = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="messages-dashboard">
      <Sidebar />
      <div className="messages-container">
        <h1 className="messages-title">Mensagens</h1>

        <div className="messages-content">
          {/* Lista lateral */}
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

          {/* Janela de conversa */}
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
                  <div className="message-text">
                    <span className="sender">{msg.sender}:</span> {msg.text}
                  </div>
                  <span className="message-time">{msg.time}</span>
                </div>
              ))}
              {isTyping && (
                <div className="typing-indicator">Digitando...</div>
              )}
              <div ref={chatEndRef} />
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
                onChange={handleTyping}
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
