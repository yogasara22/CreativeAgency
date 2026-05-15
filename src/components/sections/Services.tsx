import { motion } from "framer-motion";

const services = [
  {
    title: "Creative Communication",
    desc: "Social media content strategy, insight & analytics, community engagement, KOL & influencer.",
    icon: "✶",
  },
  {
    title: "Brand Activation",
    desc: "Corporate events, gathering, exhibition, selling programs, display product, label, merch & packaging.",
    icon: "❀",
  },
  {
    title: "TVC & Multimedia Video",
    desc: "TV commercials, podcast, corporate video and full-stack production from concept to delivery.",
    icon: "▶",
  },
  {
    title: "Web & Mobile Apps",
    desc: "Web development, mobile apps and web campaign support activities for end-to-end digital touchpoints.",
    icon: "◆",
  },
  {
    title: "Photography",
    desc: "Profiling, advertising, catalogue and product image — every frame crafted with intention.",
    icon: "◉",
  },
  {
    title: "Ads & Media Placement",
    desc: "Digital & social media ads, GDN, CPAS, CTR e-commerce — performance you can measure.",
    icon: "✦",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-32 sm:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-deep mb-4">What we do</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink text-balance">
            A comprehensive ecosystem of{" "}
            <span className="font-script italic text-rose-deep">creative services.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-card">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-card p-8 lg:p-10 transition-colors hover:bg-blush/30 cursor-default"
            >
              <div className="text-3xl text-rose-deep mb-6 transition-transform group-hover:scale-110 group-hover:rotate-12">
                {s.icon}
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px w-12 bg-rose origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
