import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoSierrabus from "@/assets/logo-sierrabus.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Logo - outside stacking context so mix-blend-multiply works with actual background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex items-center justify-center mx-auto"
      >
        <span
          className="text-[80px] md:text-[130px] lg:text-[180px] font-black uppercase tracking-tight leading-none"
          style={{ color: '#1F3556' }}
        >
          SIERRA
        </span>
        <span
          className="text-[80px] md:text-[130px] lg:text-[180px] font-black uppercase tracking-tight leading-none"
          style={{
            background: 'linear-gradient(135deg, #2F6FA3, #3E86C6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          BUS
        </span>
      </motion.div>

      {/* Text above and below logo */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        className="text-sm md:text-base uppercase tracking-[0.3em] text-[hsl(210,50%,25%)] mb-40"
        >
          Alquiler de autocares en Madrid
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-40 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Calidad, seguridad y confort. Más de 40 años ofreciendo el mejor servicio de transporte de viajeros.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-[0.2em]">DESLIZA HACIA ABAJO</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
