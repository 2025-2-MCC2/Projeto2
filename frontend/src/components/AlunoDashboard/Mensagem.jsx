import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import Sidebar from "./SidebarAluno/SidebarAluno";
import "./Mensagem.css";

export default function MensagemAluno() {
  const [selectedChat, setSelectedChat] = useState("Mentor João");
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const chats = [
    { id: 1, name: "Mentor João", lastMessage: "Bom trabalho no relatório 👏" },
    { id: 2, name: "Mentora Carla", lastMessage: "Vamos revisar o feedback hoje?" },
    { id: 3, name: "Mentor Pedro", lastMessage: "Encontro amanhã às 10h!" },
  ];

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessagesAluno");
    return (
      JSON.parse(saved) || {
        "Mentor João": [
          { sender: "Mentor", text: "Oi pessoal, tudo pronto pro relatório?", time: "10:15" },
          { sender: "Você", text: "Sim, finalizamos agora há pouco!", time: "10:17" },
        ],
        "Mentora Carla": [
          { sender: "Mentora", text: "Como estão indo com o feedback?", time: "09:10" },
          { sender: "Você", text: "Quase pronto, envio em breve!", time: "09:12" },
        ],
        "Mentor Pedro": [
          { sender: "Mentor", text: "Reunião confirmada pra amanhã!", time: "08:40" },
          { sender: "Você", text: "Perfeito, estarei presente.", time: "08:42" },
        ],
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("chatMessagesAluno", JSON.stringify(messages));
  }, [messages]);


  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const horaAtual = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const novaMensagem = { sender: "Você", text: inputValue, time: horaAtual };
    setMessages((prev) => ({
      ...prev,
      [selectedChat]: [...prev[selectedChat], novaMensagem],
    }));

    setInputValue("");
    setShowEmojiPicker(false);
    setIsTyping(true);

    setTimeout(() => {
      const respostas = [
        "Excelente, continue assim! 👏",
        "Entendido, obrigado pelo retorno!",
        "Beleza, fico no aguardo!",
        "Perfeito, ótimo trabalho!",
        "Muito bom, sigam firmes!",
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
          { sender: "Mentor", text: respostaAleatoria, time: horaResp },
        ],
      }));
      setIsTyping(false);
    }, 1500);
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
            <h2>Mentores</h2>
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
                    msg.sender === "Você" ? "student-msg" : "mentor-msg"
                  }`}
                >
                  <div className="message-text">
                    <span className="sender">{msg.sender}:</span> {msg.text}
                  </div>
                  <span className="message-time">{msg.time}</span>
                </div>
              ))}
              {isTyping && <div className="typing-indicator">Digitando...</div>}
              <div ref={chatEndRef} />
            </div>

            {/* Campo de mensagem */}
            <div className="chat-input">
              <div className="emoji-container">
                <FaSmile
                  className="emoji-icon"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                />
                {showEmojiPicker && (
                  <div className="emoji-picker">
                    <EmojiPicker onEmojiClick={handleEmojiClick} theme="light" />
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
