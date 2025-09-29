import { Button } from "@/components/ui/button";

const reportButtons = [
  "Registro das ações do grupo",
  "Carregar relatório final", 
  "Feedback dos mentores"
];

export function ReportsCard() {
  return (
    <div className="bg-info rounded-lg p-6 shadow-sm text-info-foreground">
      <h3 className="text-lg font-semibold mb-4">Relatórios</h3>
      
      <div className="space-y-3">
        {reportButtons.map((button, index) => (
          <Button
            key={index}
            variant="secondary"
            className="w-full justify-start text-left bg-white/20 hover:bg-white/30 text-info-foreground border-0"
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
}