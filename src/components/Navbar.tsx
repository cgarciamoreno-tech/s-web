import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active section on scroll
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-foreground font-bold"
                    : "text-muted-foreground font-medium hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

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
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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
            className="fixed inset-0 z-30 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-xl uppercase tracking-widest transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-foreground font-bold"
                    : "text-muted-foreground font-medium hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#presupuesto"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold uppercase tracking-wider"
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
