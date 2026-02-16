import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Briefcase } from "lucide-react";

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

        <div className="flex flex-wrap justify-center items-start gap-8">
          {[
            { icon: MapPin, title: "Dirección", lines: ["C. Cam. de las Labores, 21", "28440 Guadarrama, Madrid"] },
            { icon: Phone, title: "Teléfono", lines: ["91 851 03 67"] },
            { icon: Mail, title: "Email", lines: ["info@sierrabus.net"] },
            { icon: Clock, title: "Horario", lines: ["Lunes - Viernes", "9h - 14h / 16h - 19h"] },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Empleo block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-2xl mx-auto text-center glass-card p-10 rounded-2xl"
          style={{ background: "hsla(215, 60%, 25%, 0.05)" }}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">¿Quieres unirte a nuestro equipo?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Si te apasiona el transporte y el trato al cliente, nos encantaría conocerte.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-2">
            Buscamos personas responsables y comprometidas con la seguridad y el servicio.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Envíanos tu CV a{" "}
            <a href="mailto:info@sierrabus.net" className="font-bold text-primary hover:underline">
              info@sierrabus.net
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactoSection;
