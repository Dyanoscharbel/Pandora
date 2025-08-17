import { Compass, Handshake, Radar } from "lucide-react";
import businessMeeting from "@/assets/business-meeting.jpg";

const pillars = [
  {
    icon: Compass,
    title: "Enquêtes terrain",
    description: "Intelligence économique de proximité pour comprendre les réalités locales"
  },
  {
    icon: Handshake,
    title: "Réseau vérifié",
    description: "Partenaires locaux sélectionnés et validés pour vos projets"
  },
  {
    icon: Radar,
    title: "Analyse stratégique",
    description: "Évaluation complète des opportunités et des risques"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="fade-in-left">
          <h2 className="section-title text-left mb-8">
            Qui sommes-nous
          </h2>
          
          <div className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Pandora Afrika est <span className="text-primary font-medium">"l'unité spéciale de l'intelligence terrain"</span> pour votre expansion africaine.
          </div>
          
          <div className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Évitez de perdre des millions en investissement... Donnez-nous juste vos objectifs et nous construisons votre business rapidement et efficacement.
          </div>

          {/* Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 fade-in-left"
                style={{animationDelay: `${0.2 * (index + 1)}s`}}
              >
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                  <pillar.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-primary font-semibold text-lg mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="fade-in-right">
          <div className="relative">
            <img 
              src={businessMeeting}
              alt="African Business Meeting"
              className="w-full rounded-2xl shadow-luxury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};