import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook } from "lucide-react";

const ContactoSection = () => {
  return (
    <section id="contacto" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Contacto</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Contacta con nosotros</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
          { icon: MapPin, title: "Dirección", lines: ["C. Cam. de las Labores, 21", "28440 Guadarrama, Madrid"] },
          { icon: Phone, title: "Teléfono", lines: ["91 851 03 67"] },
          { icon: Mail, title: "Email", lines: ["info@sierrabus.net"] },
          { icon: Clock, title: "Horario", lines: ["Lunes - Viernes", "9h - 14h / 16h - 19h"] },
          { icon: Instagram, title: "Instagram", lines: [], href: "https://www.instagram.com/sierrabus" },
          { icon: Linkedin, title: "Linkedin", lines: [], href: "https://es.linkedin.com/company/sierrab-s" },
          { icon: Facebook, title: "Facebook", lines: [], href: "https://www.facebook.com/sierrabus/" }].
          map((item, i) => {
            const content =
            <>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{item.title}</h3>
                {item.lines.map((line) =>
              <p key={line} className="text-sm text-muted-foreground">{line}</p>
              )}
              </>;


            return item.href ?
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group">

                {content}
              </motion.a> :

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group">

                {content}
              </motion.div>;

          })}
        </div>
      </div>
    </section>);

};

export default ContactoSection;