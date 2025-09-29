import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CommunicationButton() {
  return (
    <Button 
      className="w-full bg-success hover:bg-success-hover text-success-foreground py-6 text-base font-medium rounded-full"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Comunicação direta com o mentor
    </Button>
  );
}