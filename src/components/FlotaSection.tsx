import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Todos", "Autocares", "Microbus", "Midibus", "Van", "Remolque"];

const vehicles = [
  { src: "https://sierrabus.net/wp-content/uploads/2025/6.jpeg", cat: "Autocares" },
  { src: "https://sierrabus.net/wp-content/uploads/2025/8.jpeg", cat: "Autocares" },
  { src: "https://sierrabus.net/wp-content/uploads/2025/10.jpeg", cat: "Autocares" },
  { src: "https://sierrabus.net/wp-content/uploads/2017/12/setra1.jpg", cat: "Autocares" },
  { src: "https://sierrabus.net/wp-content/uploads/2017/12/setra2.jpg", cat: "Autocares" },
  { src: "https://sierrabus.net/wp-content/uploads/2017/12/tourismo2.jpg", cat: "Autocares" },
  { src: "https://sierrabus.net/wp-content/uploads/2019/04/IMG_2729.jpg", cat: "Microbus" },
  { src: "https://sierrabus.net/wp-content/uploads/2019/04/IMG_2727.jpg", cat: "Microbus" },
  { src: "https://sierrabus.net/wp-content/uploads/2019/04/IMG_1698.jpg", cat: "Midibus" },
  { src: "https://sierrabus.net/wp-content/uploads/2019/04/Imagen-229.jpg", cat: "Van" },
  { src: "https://sierrabus.net/wp-content/uploads/2020/5/vip.jpeg", cat: "Autocares" },
  { src: "https://sierrabus.net/wp-content/uploads/2020/5/sb_pwc.jpg", cat: "Remolque" },
];

const FlotaSection = () => {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? vehicles : vehicles.filter((v) => v.cat === active);

  return (
    <section id="flota" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Flota</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Nuestra Flota</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((v, i) => (
              <motion.div
                key={v.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative aspect-video rounded-2xl overflow-hidden group"
              >
                <img
                  src={v.src}
                  alt={v.cat}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wider">{v.cat}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FlotaSection;
