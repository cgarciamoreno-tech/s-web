import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiciosSection from "@/components/ServiciosSection";
import HistoriaSection from "@/components/HistoriaSection";
import FlotaSection from "@/components/FlotaSection";
import NoticiasSection from "@/components/NoticiasSection";
import ContactoSection from "@/components/ContactoSection";
import PresupuestoSection from "@/components/PresupuestoSection";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar />
      <HeroSection />
      <ServiciosSection />
      <FlotaSection />
      <HistoriaSection />
      <NoticiasSection />
      <ContactoSection />
      <PresupuestoSection />
      <Footer />
    </div>
  );
};

export default Index;
