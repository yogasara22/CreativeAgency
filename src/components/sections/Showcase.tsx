import { motion } from "framer-motion";
import activation from "@/assets/showcase-activation.jpg";
import premiere from "@/assets/showcase-premiere.jpg";
import production from "@/assets/showcase-production.jpg";
import packaging from "@/assets/showcase-packaging.jpg";

const works = [
  {
    img: activation,
    client: "Arnott's GoodTime",
    title: "Beda Keluarga Beda Cerita — Rekor MURI",
    tag: "Brand Activation",
  },
  {
    img: production,
    client: "Rinso × Molto",
    title: "Mudik Jabodetabek Campaign",
    tag: "TVC & Production",
  },
  {
    img: premiere,
    client: "Bangsatnya Cinta Pertama",
    title: "Gala Premier & Digital Check-in",
    tag: "Event & Premiere",
  },
  {
    img: packaging,
    client: "Teh Botol Sosro",
    title: "Bangga Berbudaya Indonesia — Special Pack",
    tag: "Packaging Launch",
  },
];

export function Showcase() {
  return (
    <section id="work" className="relative bg-background py-32 sm:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-rose-deep mb-4">Selected work</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink text-balance">
              Stories we've helped <span className="font-script italic text-rose-deep">tell.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            From record-breaking activations to nationwide launches —
            every campaign carried with the same care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {works.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className={`group relative ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-muted aspect-[4/3] shadow-card">
                <motion.img
                  src={w.img.src}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-cream translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs uppercase tracking-widest opacity-80">{w.tag}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-rose-deep mb-2">{w.client}</p>
                <h3 className="font-display text-2xl text-ink leading-snug">{w.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
