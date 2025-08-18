import { MessageCircle } from "lucide-react";
import { useState } from "react";

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    const message = "Bonjour, je souhaite obtenir plus d'informations sur vos services de consultation pour l'expansion en Afrique.";
    const whatsappUrl = `https://wa.me/+22997695222?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-luxury transition-all duration-300 hover:scale-110 hover:animate-pulse"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};