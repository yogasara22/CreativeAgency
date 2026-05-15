import { motion } from "framer-motion";

const cards = [
  {
    title: "FMCG",
    desc: "Food, snacks & beverages for everyday shelves.",
    icon: "🛒",
  },
  {
    title: "Pharmacy",
    desc: "Health & wellness brands consumers trust.",
    icon: "💊",
  },
  {
    title: "Beauty",
    desc: "Personal care that celebrates confidence.",
    icon: "💄",
  },
  {
    title: "Financial Services",
    desc: "Banking & fintech for modern lives.",
    icon: "🏦",
  },
  {
    title: "Industrial",
    desc: "B2B brands with strategic communication depth.",
    icon: "🏭",
  },
  {
    title: "And Beyond",
    desc: "Open to bold, emerging categories.",
    icon: "✨",
  },
];

export function Manifesto() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-28 lg:py-32">
      <div className="watercolor-blob h-[36rem] w-[36rem] -top-32 -left-24 bg-blush/50" />
      <div className="watercolor-blob h-[32rem] w-[32rem] -bottom-28 -right-16 bg-peach/40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="text-xs uppercase tracking-[0.38em] text-rose-deep/80"
            >
              A comprehensive ecosystem of creative services
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.85 }}
              className="mt-8 font-script text-[4.75rem] leading-[0.9] text-rose-deep sm:text-[5.75rem] md:text-[6.8rem] lg:text-[7.5rem]"
            >
              Hello.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.85 }}
              className="mt-8 inline-flex flex-col items-center gap-4 lg:items-start"
            >
              <div className="inline-flex items-center gap-2 text-sm text-ink/80 sm:text-base">
                <span>Kalau</span>
                <span className="inline-flex items-center gap-1 text-rose-deep font-semibold">
                  <span>S</span>
                  <span className="text-2xl leading-none">♥</span>
                  <span>yang</span>
                </span>
                <span>bilang</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-rose-deep/20 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-rose-deep shadow-sm">
                  🍑 sakative
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-rose-deep/20 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-rose-deep shadow-sm">
                  ❤️ OTW
                </span>
              </div>
            </motion.div>
          </div>

          <div className="space-y-10 px-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="max-w-2xl"
            >
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
                A Multiline Creative Communication Agency
              </h3>
              <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
                We serve comprehensive brand and marketing communication needs across diverse, high-demand industries. Our expertise spans FMCG (food, snacks, beverages), pharmacy, beauty, financial services, and beyond.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                  className="group overflow-hidden rounded-[1.75rem] border border-border/70 bg-rose-deep/5 p-6 transition hover:-translate-y-1 hover:border-rose-deep/40"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm text-2xl">
                    {card.icon}
                  </div>
                  <div className="mt-4 font-display text-base font-semibold text-ink">
                    {card.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
