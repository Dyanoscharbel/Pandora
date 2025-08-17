import { FileText, Shield, Map, Users, Target } from "lucide-react";

const deliverables = [
  {
    icon: FileText,
    title: "Analyse socio-culturelle de votre projet",
    description: "Étude approfondie de l'environnement social et culturel pour optimiser votre approche"
  },
  {
    icon: Shield,
    title: "Rapports sécuritaires & économiques sur mesure",
    description: "Intelligence économique et évaluation des risques spécifiques à votre secteur"
  },
  {
    icon: Map,
    title: "Cartographie des risques et opportunités",
    description: "Mapping détaillé des zones d'opportunités et de vigilance pour votre implantation"
  },
  {
    icon: Users,
    title: "Liste de contacts locaux vérifiés",
    description: "Réseau de partenaires qualifiés avec mise en relation directe garantie"
  },
  {
    icon: Target,
    title: "Plan d'action opérationnel",
    description: "Feuille de route détaillée et prête à déployer pour votre projet"
  }
];

export const DeliverablesSection = () => {
  return (
    <section className="section-container bg-surface/30">
      <h2 className="section-title mb-16">
        Nos Livrables
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deliverables.map((item, index) => (
          <div 
            key={index}
            className="card-luxury fade-in-up"
            style={{animationDelay: `${0.1 * index}s`}}
          >
            <div className="mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl inline-block border border-primary/20">
                <item.icon className="text-primary" size={32} />
              </div>
            </div>
            
            <h3 className="text-primary font-semibold text-xl mb-4">
              {item.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};