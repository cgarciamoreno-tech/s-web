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

      {/* SVG filters: convert white bg to transparent, then colorize */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="color-sierra" colorInterpolationFilters="sRGB">
            <feColorMatrix type="luminanceToAlpha" result="luma" />
            <feComponentTransfer in="luma" result="inverted">
              <feFuncA type="linear" slope="-4" intercept="4" />
            </feComponentTransfer>
            <feFlood floodColor="#1F3556" result="color" />
            <feComposite in="color" in2="inverted" operator="in" />
          </filter>
          <filter id="color-bus" colorInterpolationFilters="sRGB">
            <feColorMatrix type="luminanceToAlpha" result="luma" />
            <feComponentTransfer in="luma" result="inverted">
              <feFuncA type="linear" slope="-4" intercept="4" />
            </feComponentTransfer>
            <feFlood floodColor="#1F3556" result="color" />
            <feComposite in="color" in2="inverted" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* Logo with corporate colors */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex items-center justify-center mx-auto z-10"
      >
        <div className="relative inline-block">
          {/* SIERRA portion - clip to include full "a" */}
          <img
            src={logoSierrabus}
            alt="SierraBus"
            className="w-[500px] md:w-[800px] lg:w-[1000px]"
            style={{
              filter: 'url(#color-sierra)',
              clipPath: 'inset(0 40% 0 0)',
            }}
          />
          {/* BUS portion */}
          <img
            src={logoSierrabus}
            alt="SierraBus logo"
            className="absolute inset-0 w-[500px] md:w-[800px] lg:w-[1000px]"
            style={{
              filter: 'url(#color-bus)',
              clipPath: 'inset(0 0 0 60%)',
            }}
          />
        </div>
      </motion.div>

      {/* Text above and below logo */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-[hsl(210,50%,25%)] mb-44 text-center w-full"
        >
          Alquiler de autocares en la Comunidad de Madrid
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-44 text-lg md:text-xl text-muted-foreground text-center w-full"
        >
          Calidad, seguridad y confort. Más de 40 años ofreciendo el mejor servicio de transporte de viajeros
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
