import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Jorge", text: "El servicio que hemos tenido durante estos días en Madrid ha sido excelente. El comportamiento y la amabilidad de los conductores ha sido de 10." },
  { name: "Carlos", text: "Fue todo perfecto y no dudaré en volveros a avisar y recomendaros porque fue todo un placer contar con vuestros servicios." },
  { name: "Olga", text: "Decidimos confiar en vosotros por la profesionalidad y el buen hacer. Muy profesional a la vez que cercano. ¡Enhorabuena!" },
  { name: "Juan", text: "Recomendable 100%. Todo fenomenal, desde presupuesto inicial hasta la puntualidad, el trato y la limpieza del vehículo." },
  { name: "Patricia", text: "El servicio de transporte fue perfecto desde el primer momento. Conductores amables, puntuales, uniformados. Recomendable 100%." },
  { name: "Javier", text: "MUY RECOMENDABLE. Formales, puntuales, vehículo impecable, conductores agradables. Incluso con cambios de horario, todo fueron facilidades." },
];

const NoticiasSection = () => {
  return (
    <section id="noticias" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Opiniones</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Lo que dicen nuestros clientes</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{t.text}</p>
              <p className="mt-6 text-foreground font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
