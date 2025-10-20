import React, { useState } from "react";
import { FaBell, FaChevronDown } from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Dashboard.css";

// Registra o idioma português
registerLocale("pt-BR", ptBR);

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);

  return (
    <div className="dashboard-topbar-right">
      {/* Campo de data */}
      <div className="date-picker-container">
        <button className="date-display" onClick={toggleDatePicker}>
          {selectedDate.toLocaleDateString("pt-BR")}
          <FaChevronDown className="icon-down" />
        </button>

        {showDatePicker && (
          <div className="date-popup">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              locale="pt-BR"
              dateFormat="dd/MM/yyyy"
              calendarStartDay={0}
            />
          </div>
        )}
      </div>

      {/* Ícone de notificações */}
      <div className="icon-notification">
        <FaBell />
      </div>

      {/* Avatar */}
      <div className="user-avatar">
        <img
          src="https://api.dicebear.com/7.x/initials/svg?seed=User"
          alt="User"
        />
      </div>
    </div>
  );
}

export default Dashboard;
