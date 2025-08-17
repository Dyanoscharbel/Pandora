import { FileSearch, Eye, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Brief confidentiel",
    subtitle: "sécurisé, NDA",
    description: "Consultation privée pour comprendre vos objectifs et définir votre stratégie d'implantation"
  },
  {
    number: "02", 
    icon: Eye,
    title: "Immersion terrain",
    subtitle: "missions discrètes et rapides",
    description: "Investigation directe sur le terrain avec nos équipes locales pour valider les opportunités"
  },
  {
    number: "03",
    icon: Handshake,
    title: "Remise livrable & introduction réseau",
    subtitle: "clé en main",
    description: "Transmission des résultats complets et mise en relation avec nos partenaires qualifiés"
  }
];

export const ProcessSection = () => {
  return (
    <section className="section-container bg-surface/20">
      <h2 className="section-title mb-16">
        Process exclusif
      </h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative fade-in-up"
              style={{animationDelay: `${0.2 * index}s`}}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border-2 border-primary/30 rounded-full mb-6">
                  <span className="text-primary font-bold text-xl">
                    {step.number}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-card/50 border border-primary/20 rounded-2xl">
                    <step.icon className="text-primary" size={36} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-primary font-semibold text-xl mb-2">
                  {step.title}
                </h3>
                
                <div className="text-primary/70 font-medium text-sm mb-4 italic">
                  ({step.subtitle})
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};