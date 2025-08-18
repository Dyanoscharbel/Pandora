import { FileSearch, Eye, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [FileSearch, Eye, Handshake];

export const ProcessSection = () => {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true });
  return (
    <section className="section-container bg-surface/20">
      <h2 className="section-title mb-16">
        {t('process.title')}
      </h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {Array.isArray(steps) && steps.map((step, index) => {
            const Icon = icons[index];
            return (
            <div 
              key={index}
              className="relative fade-in-up"
              style={{animationDelay: `${0.2 * index}s`}}
            >
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
                    <Icon className="text-primary" size={36} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};