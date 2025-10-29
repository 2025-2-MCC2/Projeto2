
import React from "react";
import Card from "./Card";

export default function ChatCard({ messages }) {
  return (
    <Card className="chat-card">
      <div className="card-header">
        <h3>Chat com Equipe</h3>
      </div>
      <ul className="chat-list">
        {messages.map((msg) => (
          <li key={msg.id} className={msg.online ? "online" : "offline"}>
            {msg.name}
          </li>
        ))}
      </ul>
      <div className="card-footer red">Abrir chat completo →</div>
    </Card>
  );
}
