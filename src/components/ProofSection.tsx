import africaNetwork from "@/assets/africa-network.jpg";
import { useTranslation } from "react-i18next";

export const ProofSection = () => {
  const { t } = useTranslation();
  const stats = t('proof.stats', { returnObjects: true });
  const countries = t('proof.countries', { returnObjects: true });
  return (
    <section className="section-container">
      <h2 className="section-title mb-16">
        {t('proof.title')}
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Network Image */}
        <div className="fade-in-left">
          <div className="relative">
            <img 
              src={africaNetwork}
              alt="Africa Business Network"
              className="w-full rounded-2xl shadow-luxury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats and Countries */}
        <div className="fade-in-right">
          {/* Key Statistics */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {Array.isArray(stats) && stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center fade-in-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="text-4xl lg:text-5xl font-light text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Countries Grid */}
          <div className="fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-primary font-semibold text-xl mb-6">
              {t('proof.priorityMarketsTitle')}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Array.isArray(countries) && countries.map((country, index) => (
                <div 
                  key={index}
                  className="bg-card/30 border border-primary/10 rounded-lg px-4 py-3 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-foreground/80 text-sm font-medium">
                    {country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};