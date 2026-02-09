import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactoSection = () => {
  return (
    <section id="contacto" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Contacto</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Contacta con nosotros</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MapPin, title: "Dirección", lines: ["Sierra de Madrid", "Madrid, España"] },
            { icon: Phone, title: "Teléfono", lines: ["91 851 03 67"] },
            { icon: Mail, title: "Email", lines: ["info@sierrabus.net"] },
            { icon: Clock, title: "Horario", lines: ["Atención 24h", "365 días al año"] },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
