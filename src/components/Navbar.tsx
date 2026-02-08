import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Historia", href: "#historia" },
  { label: "Flota", href: "#flota" },
  { label: "Calidad", href: "#calidad" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>

      {/* Main nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-xl shadow-lg shadow-black/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-2xl font-bold tracking-tight text-foreground">
            Sierra<span className="text-gradient">Bus</span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="#presupuesto"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-accent transition-colors uppercase tracking-wider"
            >
              Presupuesto
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <a
              href="#presupuesto"
              onClick={() => setMobileOpen(false)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold uppercase tracking-wider"
            >
              Presupuesto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
