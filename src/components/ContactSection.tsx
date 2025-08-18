import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Shield, X, Check, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Liste des pays africains avec codes pays
const africanCountries = [
  { code: 'DZ', name: 'Algérie' },
  { code: 'AO', name: 'Angola' },
  { code: 'BJ', name: 'Bénin' },
  { code: 'BW', name: 'Botswana' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'BI', name: 'Burundi' },
  { code: 'CM', name: 'Cameroun' },
  { code: 'CV', name: 'Cap-Vert' },
  { code: 'CF', name: 'République centrafricaine' },
  { code: 'TD', name: 'Tchad' },
  { code: 'KM', name: 'Comores' },
  { code: 'CG', name: 'Congo' },
  { code: 'CD', name: 'République démocratique du Congo' },
  { code: 'CI', name: 'Côte d\'Ivoire' },
  { code: 'DJ', name: 'Djibouti' },
  { code: 'EG', name: 'Égypte' },
  { code: 'GQ', name: 'Guinée équatoriale' },
  { code: 'ER', name: 'Érythrée' },
  { code: 'SZ', name: 'Eswatini' },
  { code: 'ET', name: 'Éthiopie' },
  { code: 'GA', name: 'Gabon' },
  { code: 'GM', name: 'Gambie' },
  { code: 'GH', name: 'Ghana' },
  { code: 'GN', name: 'Guinée' },
  { code: 'GW', name: 'Guinée-Bissau' },
  { code: 'KE', name: 'Kenya' },
  { code: 'LS', name: 'Lesotho' },
  { code: 'LR', name: 'Libéria' },
  { code: 'LY', name: 'Libye' },
  { code: 'MG', name: 'Madagascar' },
  { code: 'MW', name: 'Malawi' },
  { code: 'ML', name: 'Mali' },
  { code: 'MR', name: 'Mauritanie' },
  { code: 'MU', name: 'Maurice' },
  { code: 'MA', name: 'Maroc' },
  { code: 'MZ', name: 'Mozambique' },
  { code: 'NA', name: 'Namibie' },
  { code: 'NE', name: 'Niger' },
  { code: 'NG', name: 'Nigéria' },
  { code: 'RW', name: 'Rwanda' },
  { code: 'ST', name: 'Sao Tomé-et-Principe' },
  { code: 'SN', name: 'Sénégal' },
  { code: 'SC', name: 'Seychelles' },
  { code: 'SL', name: 'Sierra Leone' },
  { code: 'SO', name: 'Somalie' },
  { code: 'ZA', name: 'Afrique du Sud' },
  { code: 'SS', name: 'Soudan du Sud' },
  { code: 'SD', name: 'Soudan' },
  { code: 'TZ', name: 'Tanzanie' },
  { code: 'TG', name: 'Togo' },
  { code: 'TN', name: 'Tunisie' },
  { code: 'UG', name: 'Ouganda' },
  { code: 'ZM', name: 'Zambie' },
  { code: 'ZW', name: 'Zimbabwe' },
  { code: 'EH', name: 'Sahara occidental' },
  { code: 'SH', name: 'Sainte-Hélène' },
  { code: 'RE', name: 'La Réunion' },
  { code: 'YT', name: 'Mayotte' },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
    countries: [] as string[]
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email' | null>(null);

  // Fermer le dropdown quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtrer les pays en fonction de la recherche
  const filteredCountries = africanCountries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Gérer la sélection/désélection d'un pays
  const toggleCountry = (countryName: string) => {
    setFormData(prev => ({
      ...prev,
      countries: prev.countries.includes(countryName)
        ? prev.countries.filter(c => c !== countryName)
        : [...prev.countries, countryName]
    }));
  };

  // Supprimer un pays sélectionné
  const removeCountry = (countryName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFormData(prev => ({
      ...prev,
      countries: prev.countries.filter(c => c !== countryName)
    }));
  };
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

    // Vérifier si au moins un pays est sélectionné
    if (formData.countries.length === 0) {
      toast({
        title: "Pays requis",
        description: "Veuillez sélectionner au moins un pays",
        variant: "destructive"
      });
      return;
    }

    const countriesList = formData.countries.join(", ");
    const message = `Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company || 'Non spécifiée'}\nPays ciblés: ${countriesList}\nType de projet: ${formData.project || 'Non spécifié'}\n\nMessage:\n${formData.message}`;

    if (method === 'whatsapp') {
      const whatsappUrl = `https://wa.me/+22997695222?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      const emailUrl = `mailto:pandoraafrika@gmail.com?subject=Demande de consultation pour ${countriesList}&body=${encodeURIComponent(message)}`;
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
            
            {/* Sélecteur de pays */}
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium text-foreground/80">
                Pays ciblés *
              </label>
              <div className="relative" ref={dropdownRef}>
                <div 
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="flex flex-wrap gap-2 p-2 min-h-[42px] border rounded-md bg-input/50 border-primary/20 focus:border-primary cursor-text"
                >
                  {formData.countries.length > 0 ? (
                    formData.countries.map(country => (
                      <div 
                        key={country}
                        className="flex items-center gap-1 px-2 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {country}
                        <button 
                          type="button"
                          onClick={(e) => removeCountry(country, e)}
                          className="text-primary/70 hover:text-primary"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))
                  ) : (
                    <span className="text-muted-foreground text-sm py-1 px-2">
                      Sélectionnez un ou plusieurs pays
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Rechercher un pays..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsCountryDropdownOpen(true)}
                    className="flex-1 min-w-[150px] bg-transparent outline-none text-sm"
                  />
                </div>

                {isCountryDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 max-h-60 overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map(country => (
                        <div
                          key={country.code}
                          onClick={() => toggleCountry(country.name)}
                          className={`flex items-center justify-between p-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground ${
                            formData.countries.includes(country.name) ? 'bg-accent/50' : ''
                          }`}
                        >
                          <span>{country.name}</span>
                          {formData.countries.includes(country.name) && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-sm text-muted-foreground">
                        Aucun pays trouvé
                      </div>
                    )}
                  </div>
                )}
              </div>
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