import { Check } from "lucide-react";

const steps = [
  { label: "Etapa 1", completed: false },
  { label: "Etapa 2", completed: true },
  { label: "Etapa 3", completed: false },
  { label: "Etapa 4", completed: false },
];

export function ProgressBar() {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Progresso no Projeto</h3>
      
      <div className="relative">
        
        <div className="absolute top-6 left-6 right-6 h-0.5 bg-muted"></div>
        <div className="absolute top-6 left-6 w-1/4 h-0.5 bg-success"></div>
        
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center relative z-10 ${
                step.completed 
                  ? 'bg-success border-success text-success-foreground' 
                  : 'bg-card border-muted text-muted-foreground'
              }`}>
                {step.completed ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <div className="mt-2 text-sm text-center">
                <p>{step.label}</p>
                {step.completed && <p className="text-xs text-success">completada</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}