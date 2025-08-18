import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  return (
    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-1">
      <Globe className="text-primary" size={16} />
      <div className="flex gap-1">
        <Button
          variant={i18n.language === 'fr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => i18n.changeLanguage('fr')}
          className="h-8 px-3 text-xs font-medium"
        >
          FR
        </Button>
        <Button
          variant={i18n.language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => i18n.changeLanguage('en')}
          className="h-8 px-3 text-xs font-medium"
        >
          EN
        </Button>
      </div>
    </div>
  );
}
