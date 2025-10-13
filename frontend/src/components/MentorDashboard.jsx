import React, { useState } from 'react';
import { MessageSquare, BarChart3, FileText, Mail, BookOpen, Settings, Bell, User, ChevronRight, TrendingUp } from 'lucide-react';
import "./MentorDashboard.css";

export default function MentorDashboard() {
  const [selectedDate, setSelectedDate] = useState(1);

  const menuItems = [
    { icon: User, label: 'Perfil', active: false },
    { icon: BarChart3, label: 'Progresso', active: false },
    { icon: FileText, label: 'Relatórios', active: false },
    { icon: MessageSquare, label: 'Mensagens', active: false, badge: 3 },
    { icon: BookOpen, label: 'Mentoria', active: false },
    { icon: Settings, label: 'Configurações', active: false }
  ];

  const teamMembers = [
    { name: 'Ana', avatar: '👩' },
    { name: 'João', avatar: '👨' },
    { name: 'Maria', avatar: '👩‍🦱' },
    { name: 'Pedro', avatar: '👨‍🦲' }
  ];

  const rankings = [
    { name: 'EQUIPE 1', value: 100, color: 'bg-red-400' },
    { name: 'EQUIPE 2', value: 85, color: 'bg-red-400' },
    { name: 'EQUIPE 3', value: 70, color: 'bg-red-400' },
    { name: 'EQUIPE 4', value: 50, color: 'bg-red-400' }
  ];

  const activities = [
    { title: 'Feedback para cada integrante', time: 'Today 10 AM', type: 'priority' },
    { title: 'Short meeting with product designer from IT department', time: 'Today 10 AM', type: 'normal' }
  ];

  const agendaItems = [
    { time: '08:00 - 09:00 AM', title: 'Reunião com equipe', color: 'border-l-orange-500' },
    { time: '09:00 - 10:00 AM', title: 'Conferir progresso de Natalia', color: 'border-l-orange-500' }
  ];

  const getDaysInMonth = () => {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-emerald-700 to-emerald-900 text-white flex flex-col">
        <div className="p-6 border-b border-emerald-600">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-lg font-semibold mt-4">Nome do Grupo</h2>
        </div>

        <nav className="flex-1 p-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                item.active ? 'bg-emerald-600' : 'hover:bg-emerald-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-emerald-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Pedro - Aluno</p>
              <p className="text-xs text-emerald-300">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                👋 Seja bem vindo, Mentor!
              </h1>
              <p className="text-gray-500 mt-1">Card de chat com eq...</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm">
                20-08-2025
              </button>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="col-span-2 space-y-6">
              {/* Top Cards */}
              <div className="grid grid-cols-2 gap-6">
                {/* Chat Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4">Chat com Equipe</h3>
                  <p className="text-sm text-gray-600 mb-4">2 novas mensagens</p>
                  <div className="flex -space-x-2 mb-4">
                    {teamMembers.map((member, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-sm"
                      >
                        {member.avatar}
                      </div>
                    ))}
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Ir para mensagens →
                  </button>
                </div>

                {/* Ranking Position */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Posição no Ranking</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold">4º</span>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Subiu 3 posições comparado à última semana</p>
                  <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Ver progresso de relatórios →
                  </button>
                </div>
              </div>

              {/* Chart Widget */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Arrecadação Total</h3>
                    <p className="text-3xl font-bold text-blue-400 mt-2">R$ 5014</p>
                  </div>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Mensal</option>
                  </select>
                </div>
                <div className="h-48 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 150">
                    <defs>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#86efac', stopOpacity: 0.4 }} />
                        <stop offset="100%" style={{ stopColor: '#86efac', stopOpacity: 0 }} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,100 L 50,80 L 100,90 L 150,60 L 200,70 L 250,40 L 300,50 L 350,30 L 400,45 L 400,150 L 0,150 Z"
                      fill="url(#areaGradient)"
                    />
                    <path
                      d="M 0,100 L 50,80 L 100,90 L 150,60 L 200,70 L 250,40 L 300,50 L 350,30 L 400,45"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Rankings */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Ranking</h3>
                <div className="space-y-3">
                  {rankings.map((team, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-8">{idx + 1}º</span>
                      <span className="text-sm font-medium text-gray-900 w-24">{team.name}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                        <div
                          className={`${team.color} h-full flex items-center justify-end px-2`}
                          style={{ width: `${team.value}%` }}
                        >
                          <span className="text-xs text-white font-medium">{team.value}K</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Últimas Atividades</h3>
                  <span className="text-sm text-gray-500">Hoje, 22 de Maio</span>
                </div>
                <div className="space-y-3">
                  {activities.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{activity.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                      <button className="text-gray-400">
                        <Bell className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-sm text-orange-600 hover:text-orange-700 font-medium">
                  Criar nova tarefa
                </button>
              </div>
            </div>

            {/* Right Column - Agenda */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-purple-500">✨</span>
                  Agenda do dia
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="text-sm font-semibold text-gray-900">22 de Maio</div>
                  {agendaItems.map((item, idx) => (
                    <div key={idx} className={`border-l-4 ${item.color} pl-3 py-2`}>
                      <p className="text-xs text-gray-600">{item.time}</p>
                      <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    </div>
                  ))}
                  <button className="text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1">
                    Ver todas atividades →
                  </button>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <button className="text-white">&lt;</button>
                  <h3 className="font-semibold">January 2022</h3>
                  <button className="text-white">&gt;</button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                    <div key={day} className="text-center text-xs font-medium py-1">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth().map(day => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                        day === 1
                          ? 'bg-white text-orange-600 font-bold'
                          : 'hover:bg-orange-400'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}