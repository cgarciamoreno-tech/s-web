import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
const values = [{
  icon: Target,
  title: "Misión",
  desc: "Garantizar el servicio más diferenciador, personalizado y confortable a nuestros clientes."
}, {
  icon: Eye,
  title: "Visión",
  desc: "Ser referentes en el sector del transporte discrecional, ofreciendo un servicio de máxima calidad."
}, {
  icon: Gem,
  title: "Valores",
  desc: "Puntualidad, seriedad, limpieza, buen trato, atención 24h los 365 días del año."
}];
const HistoriaSection = () => {
  return <section id="historia" className="section-padding" style={{
    background: "var(--section-gradient)"
  }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Historia</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Más de 35 años de experiencia</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                En SierraBus nos dedicamos al <strong className="text-foreground">35 años</strong> de viajeros por carretera, avalados con más de <strong className="text-foreground">40 años</strong> de experiencia en el sector.
              </p>
              <p>Ofrecemos un servicio directo y personal a cada tipo de cliente, permitiéndonos conocer a fondo sus necesidades. Empresa familiar fundada en 1988, actualmente liderada por Miguel Gea De Castro, perteneciéndo a la segunda generación y con formación específica del transporte de viajeros por carretera. Ofrecemos un servicio directo y personal a cada tipo de cliente, permitiéndonos conocer a fondo sus necesidades.<strong className="text-foreground">Don Antonio Gea García</strong> en 1988, ofrecemos un servicio directo y personal a cada tipo de cliente, permitiéndonos conocer a fondo sus necesidades.
              </p>
              <p>
                Nuestros vehículos motorizados con <strong className="text-foreground">Mercedes-Benz</strong> y <strong className="text-foreground">Setra</strong> cumplen con la normativa nacional y comunitaria en materia de transporte y seguridad.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="space-y-6">
            {values.map((v, i) => <motion.div key={v.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.15
          }} className="glass-card p-6 flex items-start gap-5">
                <div className="p-3 rounded-xl bg-primary/10">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HistoriaSection;