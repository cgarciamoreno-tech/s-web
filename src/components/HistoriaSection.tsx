import { motion } from "framer-motion";
import { Target, Eye, Gem, Award, HeartPulse, Wind, Leaf, ShieldPlus, Accessibility } from "lucide-react";

const values = [
{ icon: Target, title: "Misión", desc: "Garantizar el servicio más diferenciador, personalizado y confortable a nuestros clientes." },
{ icon: Eye, title: "Visión", desc: "Ser referentes en el sector del transporte discrecional, ofreciendo un servicio de máxima calidad." },
{ icon: Gem, title: "Valores", desc: "Puntualidad, seriedad, limpieza, buen trato, servicio 24h." }];


const calidadItems = [
{ icon: Award, title: "ISO 9001", desc: "Adaptación de nuestros procesos de gestión a la norma de estandarización ISO 9001." },
{ icon: HeartPulse, title: "Desfibrilador DESA", desc: "Incorporación opcional de desfibrilador semiautomático. Solo un 2% de empresas españolas lo ofrecen." },
{ icon: Wind, title: "Desinfección periódica", desc: "Tratamiento de desinfección del aire interior mediante cañón de ozono físico-químico." },
{ icon: Leaf, title: "Conducción eficiente", desc: "Cursos periódicos de conducción eficiente y segura. Concienciación con el medio ambiente." },
{ icon: ShieldPlus, title: "Asientos salvavidas", desc: "Seguridad avanzada: asientos con sistema e-Rescue." },
{ icon: Accessibility, title: "Accesibilidad PMR", desc: "Vehículos adaptados para personas con movilidad reducida, garantizando la inclusión." }];


const HistoriaSection = () => {
  return (
    <section id="historia" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Sobre nosotros */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>

            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Sobre nosotros</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Más de 40 años de experiencia</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                En Sierrabus nos dedicamos al transporte de viajeros por carretera, avalados con <strong className="text-foreground">más de 40 años</strong> de experiencia en el sector.
              </p>
              <p>
                Ofrecemos un servicio directo y personal a cada tipo de cliente, permitiéndonos conocer a fondo sus necesidades. Fundada en 1988, ofrecemos un servicio directo y personal a cada tipo de cliente, permitiéndonos conocer a fondo sus necesidades.
              </p>
              <p>
                Nuestros vehículos motorizados con <strong className="text-foreground">Mercedes-Benz</strong> y <strong className="text-foreground">Setra</strong> cumplen con la normativa nacional y comunitaria en materia de transporte y seguridad.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6">

            {values.map((v, i) =>
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6 flex items-start gap-5">

                <div className="p-3 rounded-xl bg-primary/10">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Calidad - integrated below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 mb-16">

          
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">Comprometidos con la excelencia</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calidadItems.map((item, i) =>
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center">

              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default HistoriaSection;