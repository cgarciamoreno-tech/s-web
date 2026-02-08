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
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="flex items-center gap-6">
          <a href="mailto:info@sierrabus.net" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-3.5 h-3.5" /> info@sierrabus.net
          </a>
          <a href="tel:+34918510367" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-3.5 h-3.5" /> 91 851 03 67
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-2xl font-bold tracking-tight text-foreground">
            Sierra<span className="text-gradient">Bus</span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#presupuesto"
              className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-accent transition-colors uppercase tracking-wider"
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-foreground uppercase tracking-widest hover:text-gradient transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#presupuesto"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold uppercase tracking-wider"
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
