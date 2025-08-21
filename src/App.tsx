import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlausibleProvider from '@plausible-analytics/react';

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const queryClient = new QueryClient();

const App = () => (
  <PlausibleProvider domain="pandoraafrika.com">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 100 }}>
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
  </PlausibleProvider>
);

export default App;
