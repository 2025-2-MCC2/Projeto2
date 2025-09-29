import { User } from "lucide-react";

const members = [
  "integrante 1",
  "integrante 2", 
  "integrante 3",
  "integrante 4"
];

export function GroupCard() {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Grupo</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
              <User className="w-4 h-4 text-success-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">{member}</span>
          </div>
        ))}
      </div>
    </div>
  );
}