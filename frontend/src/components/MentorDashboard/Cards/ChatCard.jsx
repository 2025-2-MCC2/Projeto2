import React from 'react';
import './Cards.css';

export default function ChatCard({ messages }) {
  return (
    <div className="card chat-card">
      <h3>Mensagens Recentes</h3>
      <ul className="chat-list">
        {messages.map((msg) => (
          <li key={msg.id} className="chat-item">
            <span
              className={`status-dot ${msg.online ? 'online' : 'offline'}`}
              title={msg.online ? 'Online' : 'Offline'}
            ></span>
            <span className="chat-name">{msg.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
