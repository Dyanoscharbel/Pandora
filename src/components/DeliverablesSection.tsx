import { FileText, Shield, Map, Users, Target, Telescope } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [FileText, Shield, Map, Users, Target, Telescope];

export const DeliverablesSection = () => {
  const { t } = useTranslation();
  const deliverables = t('deliverables.items', { returnObjects: true });
  return (
    <section className="section-container bg-surface/30">
      <h2 className="section-title mb-16">
        {t('deliverables.title')}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(deliverables) && deliverables.map((item, index) => {
          const Icon = icons[index];
          return (
          <div 
            key={index}
            className="card-luxury fade-in-up"
            style={{animationDelay: `${0.1 * index}s`}}
          >
            <div className="mb-6">
              <div className="bg-primary/10 p-4 rounded-2xl inline-block border border-primary/20">
                <Icon className="text-primary" size={32} />
              </div>
            </div>
            
            <h3 className="text-primary font-semibold text-xl mb-4">
              {item.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
          );
        })}
      </div>
    </section>
  );
};