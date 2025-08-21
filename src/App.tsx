import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const script = document.createElement("script");
      script.src = "https://plausible.io/js/script.js";
      script.defer = true;
      script.setAttribute("data-domain", "https://www.pandoraafrika.com"); // ⚠️ mets ton vrai domaine ou ton .vercel.app
      document.head.appendChild(script);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div style={{ position: "fixed", top: 16, right: 16, zIndex: 100 }}>
          <LanguageSwitcher />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
