import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email' | null>(null);
  const { toast } = useToast();

  const handleSubmit = (method: 'whatsapp' | 'email') => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Information manquante",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    const message = `Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company}\nProjet: ${formData.project}\nMessage: ${formData.message}`;

    if (method === 'whatsapp') {
      const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      const emailUrl = `mailto:contact@pandora-afrika.com?subject=Demande de consultation&body=${encodeURIComponent(message)}`;
      window.open(emailUrl);
    }

    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons dans les plus brefs délais",
    });
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-8">
          Vous voulez conquérir le marché africain ?
        </h2>
        
        <div className="text-2xl text-primary font-light mb-16 fade-in-up">
          Commencez ici...
        </div>

        {/* Contact Form */}
        <div className="card-luxury max-w-2xl mx-auto fade-in-up">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Nom complet *"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                className="bg-input/50 border-primary/20 focus:border-primary"
              />
              <Input
                placeholder="Email professionnel *"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                className="bg-input/50 border-primary/20 focus:border-primary"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Entreprise"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                className="bg-input/50 border-primary/20 focus:border-primary"
              />
              <Input
                placeholder="Type de projet"
                value={formData.project}
                onChange={(e) => setFormData(prev => ({...prev, project: e.target.value}))}
                className="bg-input/50 border-primary/20 focus:border-primary"
              />
            </div>
            
            <Textarea
              placeholder="Décrivez votre projet et vos objectifs *"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
              className="bg-input/50 border-primary/20 focus:border-primary min-h-[120px]"
            />

            {/* Contact Method Selection */}
            <div className="text-left">
              <div className="text-primary font-medium mb-4">
                Choisissez votre méthode de contact préférée :
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  onClick={() => handleSubmit('whatsapp')}
                  className="btn-luxury flex items-center gap-3 py-4"
                >
                  <MessageCircle size={20} />
                  WhatsApp Business
                </Button>
                
                <Button
                  onClick={() => handleSubmit('email')}
                  variant="outline"
                  className="btn-ghost-luxury flex items-center gap-3 py-4"
                >
                  <Mail size={20} />
                  Email Sécurisé
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex items-center justify-center gap-3 mt-12 text-muted-foreground fade-in-up">
          <Shield size={20} className="text-primary" />
          <span className="text-sm">
            Nous vous assurons discrétion et confidentialité totale
          </span>
        </div>
      </div>
    </section>
  );
};