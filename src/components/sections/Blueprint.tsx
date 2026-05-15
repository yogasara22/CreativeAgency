import { motion } from "framer-motion";

const pillars = [
  {
    n: 1,
    title: "Quick Response",
    desc: "Agility, proactive communication, and an inherent respect for client time and deadlines.",
    pos: "right",
  },
  {
    n: 2,
    title: "Brief-Oriented",
    desc: "Deep listening, precise strategic alignment, and staying true to the brand's core objectives.",
    pos: "bottom",
  },
  {
    n: 3,
    title: "Focus on Detail",
    desc: "Meticulous execution, rigorous quality control, and flawless delivery across every touchpoint.",
    pos: "left",
  },
];

// Three circle centers arranged into a heart silhouette (inside an 800x640 viewBox).
const C = {
  left: { cx: 220, cy: 260 },
  right: { cx: 580, cy: 260 },
  bottom: { cx: 400, cy: 470 },
};
const R = 130;

export function Blueprint() {
  return (
    <section
      id="values"
      className="relative overflow-hidden py-28 sm:py-36 bg-rose-gradient"
    >
      <div className="watercolor-blob h-[28rem] w-[28rem] -top-32 -left-32 bg-cream/70" />
      <div className="watercolor-blob h-[28rem] w-[28rem] -bottom-32 -right-32 bg-blush/60" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink">
            Creative Attentiveness
          </h2>
          <p className="mt-3 font-script text-2xl sm:text-3xl text-ink/70">
            The Blueprint of Care
          </p>
        </div>

        {/* Diagram */}
        <div className="relative mx-auto w-full max-w-3xl">
          <motion.svg
            viewBox="0 0 800 640"
            className="w-full h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
          >
            <defs>
              <linearGradient id="rose-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f4c2c2" />
                <stop offset="100%" stopColor="#d96a73" />
              </linearGradient>
              <linearGradient id="silver-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c9c9cf" />
                <stop offset="100%" stopColor="#8d8d93" />
              </linearGradient>
              <marker
                id="arrow-rose"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#d96a73" />
              </marker>
              <marker
                id="arrow-silver"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#9a9aa0" />
              </marker>
            </defs>

            {/* Brushy outer rings around each circle */}
            {[C.left, C.right, C.bottom].map((c, i) => (
              <g key={i} opacity={0.65}>
                <motion.circle
                  cx={c.cx}
                  cy={c.cy}
                  r={R + 18}
                  fill="none"
                  stroke="url(#rose-stroke)"
                  strokeWidth={6}
                  strokeLinecap="round"
                  strokeDasharray="380 900"
                  initial={{ rotate: 0, opacity: 0 }}
                  whileInView={{ rotate: 360, opacity: 0.8 }}
                  transition={{
                    opacity: { duration: 1, delay: 0.2 + i * 0.15 },
                    rotate: {
                      duration: 26 + i * 4,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
                />
                <motion.circle
                  cx={c.cx}
                  cy={c.cy}
                  r={R + 30}
                  fill="none"
                  stroke="url(#silver-stroke)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeDasharray="120 600"
                  initial={{ rotate: 180, opacity: 0 }}
                  whileInView={{ rotate: -180, opacity: 0.55 }}
                  transition={{
                    opacity: { duration: 1, delay: 0.3 + i * 0.15 },
                    rotate: {
                      duration: 32 + i * 3,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
                />
              </g>
            ))}

            {/* Curved arrows: left → right (top arc), right → bottom, bottom → left */}
            {[
              {
                d: "M 230 150 Q 400 40 570 150",
                marker: "arrow-rose",
                stroke: "url(#rose-stroke)",
                delay: 0.6,
              },
              {
                d: "M 660 350 Q 640 510 510 510",
                marker: "arrow-silver",
                stroke: "url(#silver-stroke)",
                delay: 0.9,
              },
              {
                d: "M 290 510 Q 160 510 140 350",
                marker: "arrow-rose",
                stroke: "url(#rose-stroke)",
                delay: 1.2,
              },
            ].map((a, i) => (
              <motion.path
                key={i}
                d={a.d}
                fill="none"
                stroke={a.stroke}
                strokeWidth={5}
                strokeLinecap="round"
                markerEnd={`url(#${a.marker})`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.2, delay: a.delay, ease: "easeInOut" }}
              />
            ))}

            {/* Center small heart */}
            <motion.path
              d="M 400 290 C 400 270, 372 256, 360 280 C 348 304, 380 326, 400 348 C 420 326, 452 304, 440 280 C 428 256, 400 270, 400 290 Z"
              fill="#f4a7ad"
              stroke="#d96a73"
              strokeWidth={1.5}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6, type: "spring" }}
              style={{ transformOrigin: "400px 310px" }}
            />
            <motion.path
              d="M 400 290 C 400 270, 372 256, 360 280 C 348 304, 380 326, 400 348 C 420 326, 452 304, 440 280 C 428 256, 400 270, 400 290 Z"
              fill="none"
              stroke="#d96a73"
              strokeWidth={2}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              style={{ transformOrigin: "400px 310px" }}
            />

            {/* Inner white circles holding the text */}
            {pillars.map((p, i) => {
              const c =
                p.pos === "left" ? C.left : p.pos === "right" ? C.right : C.bottom;
              return (
                <motion.circle
                  key={p.n}
                  cx={c.cx}
                  cy={c.cy}
                  r={R}
                  fill="#fffaf7"
                  stroke="#f4d2cf"
                  strokeWidth={1.5}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.15,
                    duration: 0.6,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
                />
              );
            })}
          </motion.svg>

          {/* HTML overlay text inside circles (responsive) */}
          <div className="pointer-events-none absolute inset-0">
            {pillars.map((p, i) => {
              const c =
                p.pos === "left" ? C.left : p.pos === "right" ? C.right : C.bottom;
              return (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{
                    left: `${(c.cx / 800) * 100}%`,
                    top: `${(c.cy / 640) * 100}%`,
                    width: `${(R * 1.7 / 800) * 100}%`,
                  }}
                >
                  <div className="font-display text-lg sm:text-2xl text-ink/80 leading-none">
                    {p.n}
                  </div>
                  <div className="mt-1 font-display text-[11px] sm:text-base font-medium text-ink">
                    {p.title}
                  </div>
                  <p className="mt-1 hidden sm:block text-[10px] lg:text-xs text-muted-foreground leading-snug px-2">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile-only descriptions */}
        <div className="grid sm:hidden grid-cols-1 gap-4 mt-10">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="rounded-2xl bg-card/80 border border-rose/20 p-5 shadow-card"
            >
              <div className="font-display text-rose-deep">{p.n}. {p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
