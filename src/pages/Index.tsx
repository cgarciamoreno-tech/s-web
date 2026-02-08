import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiciosSection from "@/components/ServiciosSection";
import HistoriaSection from "@/components/HistoriaSection";
import FlotaSection from "@/components/FlotaSection";
import CalidadSection from "@/components/CalidadSection";
import NoticiasSection from "@/components/NoticiasSection";
import ContactoSection from "@/components/ContactoSection";
import PresupuestoSection from "@/components/PresupuestoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServiciosSection />
      <HistoriaSection />
      <FlotaSection />
      <CalidadSection />
      <NoticiasSection />
      <ContactoSection />
      <PresupuestoSection />
      <Footer />
    </div>
  );
};

export default Index;
