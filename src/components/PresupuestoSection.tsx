import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
const PresupuestoSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return <section id="presupuesto" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Presupuesto</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Solicita tu presupuesto</h2>
          <p className="text-muted-foreground">Sin compromiso. Te respondemos en menos de 24 horas.</p>
        </motion.div>

        {submitted ? <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="glass-card p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Send className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">¡Gracias!</h3>
            <p className="text-muted-foreground">Hemos recibido tu solicitud. Nos pondremos en contacto contigo lo antes posible.</p>
          </motion.div> : <motion.form onSubmit={handleSubmit} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="glass-card p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <input type="text" required className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="A\xF1ade aqu\xED tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="A\xF1ade aqu\xED tu email" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                <input type="tel" className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="A\xF1ade aqu\xED tu tel\xE9fono" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tipo de servicio</label>
                <select className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Rutas escolares</option>
                  <option>Bodas y eventos</option>
                  <option>Eventos de empresa</option>
                  <option>Equipos deportivos</option>
                  <option>Excursiones</option>
                  <option>Transfers</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
              <textarea rows={4} required className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Cu\xE9ntanos los detalles del servicio que necesitas" />
            </div>
            <button type="submit" className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold uppercase tracking-wider hover:bg-accent transition-colors flex items-center justify-center gap-3">
              <Send className="w-4 h-4" />
              Enviar solicitud
            </button>
          </motion.form>}
      </div>
    </section>;
};
export default PresupuestoSection;