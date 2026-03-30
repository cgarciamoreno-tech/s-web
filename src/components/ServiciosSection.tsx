import { motion } from "framer-motion";
import { Bus, Heart, Film, Trophy, Building2, GraduationCap, Plane, Users } from "lucide-react";
const services = [{
  icon: GraduationCap,
  title: "Rutas escolares y de trabajadores",
  desc: "Transporte diario seguro y puntual para colegios y empresas"
}, {
  icon: Heart,
  title: "Bodas, bautizos y comuniones",
  desc: "Servicio personalizado para los momentos más especiales"
}, {
  icon: Film,
  title: "Rodajes cinematográficos",
  desc: "Transporte especializado para producciones audiovisuales"
}, {
  icon: Trophy,
  title: "Equipos deportivos",
  desc: "Traslado cómodo y seguro para competiciones y entrenamientos"
}, {
  icon: Building2,
  title: "Eventos de empresa",
  desc: "Soluciones de transporte corporativo a medida"
}, {
  icon: Plane,
  title: "Transfers aeropuerto",
  desc: "Recogida y traslado puntual desde y hasta el aeropuerto"
}, {
  icon: Users,
  title: "Excursiones y viajes",
  desc: "Viajes nacionales e internacionales con total comodidad"
}, {
  icon: Bus,
  title: "Servicios especiales",
  desc: "Alquiler flexible con conductor para cualquier tipo de necesidad"
}];
const ServiciosSection = () => {
  return <section id="servicios" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Servicios</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">¿Qué podemos hacer por tí?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.1
        }} className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group">
              <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default ServiciosSection;