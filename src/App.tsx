import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { init } from "@plausible-analytics/tracker"; // <-- ici on utilise init

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const queryClient = new QueryClient();

// Initialisation de Plausible
init({
  domain: "WWW.pandoraafrika.com", // remplace par ton domaine
});

// Tracker automatique des pages
const PlausibleTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Plausible tracke automatiquement les pages si init est appelé
    // Si tu veux un suivi manuel des événements, tu peux faire : window.plausible('NomEvenement')
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div style={{ position: "fixed", top: 16, right: 16, zIndex: 100 }}>
        <LanguageSwitcher />
      </div>
      <BrowserRouter>
        <PlausibleTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
