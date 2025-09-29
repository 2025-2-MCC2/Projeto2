import { User, BarChart3, FileText, MessageSquare, Users, BookOpen, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  { icon: User, label: "Perfil", active: true },
  { icon: BarChart3, label: "Progresso" },
  { icon: FileText, label: "Relatórios" },
  { icon: MessageSquare, label: "Mensagens", badge: "3" },
  { icon: Users, label: "Mentoria" },
  { icon: BookOpen, label: "Materiais" },
  { icon: Settings, label: "Configurações" },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-sidebar-primary text-sidebar-primary-foreground h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-hover">
        <h2 className="text-xl font-semibold">Nome do Grupo</h2>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  item.active 
                    ? 'bg-sidebar-hover text-sidebar-primary-foreground' 
                    : 'hover:bg-sidebar-hover/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <Badge className="bg-yellow-500 text-black text-xs ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-hover">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-sidebar-hover flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Easin Arafat</p>
            <p className="text-xs opacity-75">User Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}