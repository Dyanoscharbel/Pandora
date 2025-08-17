import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-africa-modern.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Modern Africa Business"
          className="w-full h-full object-cover parallax-bg"
          style={{ transform: 'scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src="/lovable-uploads/2d8a4a3a-0518-4d23-9fd3-ebef9c9baf3d.png"
          alt="Pandora Afrika Logo"
          className="h-16 w-auto animate-glow"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="hero-title mb-8 fade-in-up">
          PANDORA  AFRIKA
        </h1>
        
        <div className="hero-subtitle mb-12 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
          Démarrez ou élargissez sûrement, efficacement et rapidement votre business en Afrique...
        </div>

        <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button 
            className="btn-luxury text-lg px-12 py-6"
            onClick={() => scrollToSection('contact')}
          >
            Obtenir un rapport confidentiel
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown 
          className="text-primary animate-bounce cursor-pointer" 
          size={32}
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};