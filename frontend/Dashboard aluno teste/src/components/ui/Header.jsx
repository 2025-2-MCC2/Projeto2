import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <header className="h-16 bg-card border-b border-border px-6 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div>
          <h1 className="text-lg font-semibold text-success">Perfil</h1>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Nome do aluno</p>
          <p>aluno.fecap@gmail.com</p>
          <p>nome do mentor</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="icon"
          className="relative hover:bg-muted"
        >
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="outline" className="text-sm">
          {currentDate}
        </Button>
      </div>
    </header>
  );
}