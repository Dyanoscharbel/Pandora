import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DeliverablesSection } from "@/components/DeliverablesSection";
import { ProofSection } from "@/components/ProofSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <DeliverablesSection />
      <ProofSection />
      <ProcessSection />
      <ContactSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
