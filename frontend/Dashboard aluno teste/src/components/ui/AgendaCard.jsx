import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const agendaItems = [
  { 
    date: "24 Dez 2021", 
    title: "Reunião com mentor", 
    priority: "high",
    icon: "🔴"
  },
  { 
    date: "24 Nov 2022", 
    title: "Prazo: entrega parcial", 
    priority: "normal"
  },
  { 
    date: "24 Nov 2022", 
    title: "Evento de encerramento", 
    priority: "normal"
  }
];

export function AgendaCard() {
  return (
    <div className="bg-warning rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-warning-foreground">AGENDA</h3>
        <Button variant="ghost" size="sm" className="text-warning-foreground hover:bg-warning-foreground/10">
          Visualizar todas
        </Button>
      </div>
      
      <div className="space-y-3 mb-4">
        {agendaItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-3 text-sm">
            <span className="text-warning-foreground font-medium min-w-fit">
              {item.date}
            </span>
            <span className="text-warning-foreground">
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.title}
            </span>
          </div>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        className="w-full bg-transparent border-warning-foreground/30 text-warning-foreground hover:bg-warning-foreground/10"
      >
        <Plus className="w-4 h-4 mr-2" />
        Adicionar nova tarefa
        <ArrowRight className="w-4 h-4 ml-auto" />
      </Button>
    </div>
  );
}