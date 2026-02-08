import { motion } from "framer-motion";
import { Award, HeartPulse, Wind, Leaf, Wifi, Accessibility } from "lucide-react";

const items = [
  { icon: Award, title: "ISO 9001", desc: "Adaptación de nuestros procesos de gestión a la norma de estandarización ISO 9001." },
  { icon: HeartPulse, title: "Desfibrilador DESA", desc: "Incorporación opcional de desfibrilador semiautomático. Solo un 2% de empresas españolas lo ofrecen." },
  { icon: Wind, title: "Desinfección periódica", desc: "Tratamiento de desinfección del aire interior mediante cañón de ozono físico-químico." },
  { icon: Leaf, title: "Conducción eficiente", desc: "Cursos periódicos de conducción eficiente y segura. Concienciación con el medio ambiente." },
  { icon: Wifi, title: "WiFi a bordo", desc: "Conexión WiFi gratuita disponible en nuestros vehículos para tu comodidad." },
  { icon: Accessibility, title: "Accesibilidad PMR", desc: "Vehículos adaptados para personas con movilidad reducida, garantizando la inclusión." },
];

const CalidadSection = () => {
  return (
    <section id="calidad" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Calidad</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Comprometidos con la excelencia</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalidadSection;
