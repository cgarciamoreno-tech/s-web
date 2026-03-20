import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import remolque from "@/assets/IMG_5466 2.jpg";
import img_5170 from "@/assets/IMG_5170.jpg";
import img_5173 from "@/assets/IMG_5173.jpg";
import img_5171 from "@/assets/IMG_5171.jpg";
import img_5169 from "@/assets/IMG_5169.jpg";
import img_5172 from "@/assets/IMG_5172.jpg";
import img_5232 from "@/assets/IMG_5232.jpg";
import img_5227 from "@/assets/IMG_5227.jpg";
import img_5233 from "@/assets/IMG_5233.jpg";
import img_5231 from "@/assets/IMG_5231.jpg";
import img_5223 from "@/assets/IMG_5223.jpg";
import img_5222 from "@/assets/IMG_5222.jpg";
import img_5220 from "@/assets/IMG_5220.jpg";
import img_5228 from "@/assets/IMG_5228.jpg";
import img_5218 from "@/assets/IMG_5218.jpg";
import img_5217 from "@/assets/IMG_5217.jpg";
import img_5216 from "@/assets/IMG_5216.jpg";
import img_5215 from "@/assets/IMG_5215.jpg";
import img_5214 from "@/assets/IMG_5214.jpg";
import img_5225 from "@/assets/IMG_5225.jpg";
import img_5226 from "@/assets/IMG_5226.jpg";
import img_5211 from "@/assets/IMG_5211.jpg";
import img_5210 from "@/assets/IMG_5210.jpg";
import img_5209 from "@/assets/IMG_5209.jpg";
import img_5208 from "@/assets/IMG_5208.jpg";
import img_5207 from "@/assets/IMG_5207.jpg";
import img_5224 from "@/assets/IMG_5224.jpg";
import img_5206 from "@/assets/IMG_5206.jpg";
import img_5204 from "@/assets/IMG_5204.jpg";
import img_5203 from "@/assets/IMG_5203.jpg";
import img_5202 from "@/assets/IMG_5202.jpg";
import img_5200 from "@/assets/IMG_5200.jpg";
import img_5199 from "@/assets/IMG_5199.jpg";
import img_5198 from "@/assets/IMG_5198.jpg";
import img_5197 from "@/assets/IMG_5197.jpg";
import img_5196 from "@/assets/IMG_5196.jpg";
import img_5205 from "@/assets/IMG_5205.jpg";
import img_5194 from "@/assets/IMG_5194.jpg";
import img_5193 from "@/assets/IMG_5193.jpg";
import img_5192 from "@/assets/IMG_5192.jpg";
import img_5191 from "@/assets/IMG_5191.jpg";
import img_5190 from "@/assets/IMG_5190.jpg";
import img_5189 from "@/assets/IMG_5189.jpg";
import img_5188 from "@/assets/IMG_5188.jpg";
import img_5213 from "@/assets/IMG_5213.jpg";
import img_5186 from "@/assets/IMG_5186.jpg";
import img_5185 from "@/assets/IMG_5185.jpg";
import img_5184 from "@/assets/IMG_5184.jpg";
import img_5183 from "@/assets/IMG_5183.jpg";
import img_5182 from "@/assets/IMG_5182.jpg";
import img_5181 from "@/assets/IMG_5181.jpg";
import img_5180 from "@/assets/IMG_5180.jpg";
import img_5179 from "@/assets/IMG_5179.jpg";
import img_5178 from "@/assets/IMG_5178.jpg";
import img_5177 from "@/assets/IMG_5177.jpg";
import img_5176 from "@/assets/IMG_5176.jpg";
import img_5175 from "@/assets/IMG_5175.jpg";
import img_5174 from "@/assets/IMG_5174.jpg";
import img_5195 from "@/assets/IMG_5195.jpg";
import img_5187 from "@/assets/IMG_5187.jpg";
import img_5212 from "@/assets/IMG_5212.jpg";
import img_5219 from "@/assets/IMG_5219.jpg";


const categories = ["Autocares", "Midibuses", "Microbuses", "Van", "Luxury", "Vintage", "Remolques"];

const vehicles: { src: string; cat: string; fit?: string }[] = [
  { src: remolque, cat: "Remolques" },
  { src: "https://sierrabus.net/wp-content/uploads/2025/6.jpeg", cat: "Midibuses" },
  { src: "https://sierrabus.net/wp-content/uploads/2025/8.jpeg", cat: "Midibuses" },
  { src: "https://sierrabus.net/wp-content/uploads/2025/10.jpeg", cat: "Midibuses" },
  { src: "https://sierrabus.net/wp-content/uploads/2017/12/setra1.jpg", cat: "Midibuses" },
  { src: "https://sierrabus.net/wp-content/uploads/2017/12/setra2.jpg", cat: "Midibuses" },
  { src: "https://sierrabus.net/wp-content/uploads/2017/12/tourismo2.jpg", cat: "Midibuses" },
  { src: "https://sierrabus.net/wp-content/uploads/2019/04/IMG_2729.jpg", cat: "Microbuses" },
  { src: "https://sierrabus.net/wp-content/uploads/2019/04/IMG_2727.jpg", cat: "Microbuses" },
  { src: "https://sierrabus.net/wp-content/uploads/2019/04/IMG_1698.jpg", cat: "Van" },
  { src: "https://sierrabus.net/wp-content/uploads/2019/04/Imagen-229.jpg", cat: "Autocares" },
  { src: "https://sierrabus.net/wp-content/uploads/2020/5/vip.jpeg", cat: "Midibuses" },
  { src: "https://sierrabus.net/wp-content/uploads/2020/5/sb_pwc.jpg", cat: "Autocares" },
  { src: img_5170, cat: "Autocares" },
{ src: img_5173, cat: "Autocares" },
{ src: img_5171, cat: "Autocares" },
{ src: img_5169, cat: "Remolques" },
{ src: img_5172, cat: "Autocares" },
{ src: img_5232, cat: "Vintage" },
{ src: img_5227, cat: "Autocares" },
{ src: img_5233, cat: "Autocares" },
{ src: img_5231, cat: "Autocares" },
{ src: img_5223, cat: "Autocares" },
{ src: img_5222, cat: "Autocares" },
{ src: img_5220, cat: "Autocares" },
{ src: img_5228, cat: "Autocares" },
{ src: img_5218, cat: "Autocares" },
{ src: img_5217, cat: "Autocares" },
{ src: img_5216, cat: "Autocares" },
{ src: img_5215, cat: "Autocares" },
{ src: img_5214, cat: "Autocares" },
{ src: img_5225, cat: "Autocares" },
{ src: img_5226, cat: "Autocares" },
{ src: img_5211, cat: "Vintage" },
{ src: img_5210, cat: "Autocares" },
{ src: img_5209, cat: "Autocares" },
{ src: img_5208, cat: "Autocares" },
{ src: img_5207, cat: "Autocares" },
{ src: img_5224, cat: "Autocares" },
{ src: img_5206, cat: "Luxury" },
{ src: img_5204, cat: "Autocares" },
{ src: img_5203, cat: "Autocares" },
{ src: img_5202, cat: "Autocares" },
{ src: img_5200, cat: "Autocares" },
{ src: img_5199, cat: "Autocares" },
{ src: img_5198, cat: "Autocares" },
{ src: img_5197, cat: "Vintage" },
{ src: img_5196, cat: "Autocares" },
{ src: img_5205, cat: "Autocares" },
{ src: img_5194, cat: "Vintage" },
{ src: img_5193, cat: "Autocares" },
{ src: img_5192, cat: "Autocares" },
{ src: img_5191, cat: "Autocares" },
{ src: img_5190, cat: "Autocares" },
{ src: img_5189, cat: "Autocares" },
{ src: img_5188, cat: "Autocares" },
{ src: img_5213, cat: "Autocares" },
{ src: img_5186, cat: "Vintage" },
{ src: img_5185, cat: "Vintage" },
{ src: img_5184, cat: "Autocares" },
{ src: img_5183, cat: "Vintage" },
{ src: img_5182, cat: "Vintage" },
{ src: img_5181, cat: "Autocares" },
{ src: img_5180, cat: "Luxury" },
{ src: img_5179, cat: "Luxury" },
{ src: img_5178, cat: "Autocares" },
{ src: img_5177, cat: "Luxury" },
{ src: img_5176, cat: "Autocares" },
{ src: img_5175, cat: "Autocares" },
{ src: img_5174, cat: "Autocares" },
{ src: img_5195, cat: "Autocares" },
{ src: img_5187, cat: "Autocares" },
{ src: img_5212, cat: "Vintage" },
{ src: img_5219, cat: "Autocares" },
];

const FlotaSection = () => {
  const [active, setActive] = useState("Autocares");

  const filtered = vehicles.filter((v) => v.cat === active);

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
                  className={`w-full h-full ${v.fit === "contain" ? "object-contain" : "object-cover"} group-hover:scale-110 transition-transform duration-700`}
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
