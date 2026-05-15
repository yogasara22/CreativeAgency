import { motion } from "framer-motion";

const nodes = [
  {
    title: "Digital Presence",
    desc: "Reaching the mind through strategy and tech",
    pos: "top-left",
  },
  {
    title: "Physical Activation",
    desc: "Engaging the senses on the ground",
    pos: "top-right",
  },
  {
    title: "Creative Content",
    desc: "Capturing the heart through visual storytelling",
    pos: "bottom",
  },
];

// Three overlapping circles forming a Venn diagram (viewBox 800x640)
const V = {
  a: { cx: 320, cy: 280 }, // top-left
  b: { cx: 480, cy: 280 }, // top-right
  c: { cx: 400, cy: 410 }, // bottom
};
const VR = 150;

export function BringingToLife() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 bg-cream">
      <div className="watercolor-blob h-[28rem] w-[28rem] -top-20 -left-32 bg-blush/60" />
      <div className="watercolor-blob h-[26rem] w-[26rem] bottom-0 -right-32 bg-peach/60" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
        {/* Headline */}
        <div className="lg:col-span-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-rose-deep"
          >
            Bringing<br />Brand<br />to Life
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-muted-foreground max-w-xs"
          >
            Three forces converge on a single beating heart — and together they
            create meaningful, measurable brand growth.
          </motion.p>
        </div>

        {/* Venn diagram */}
        <div className="lg:col-span-8 relative">
          <motion.svg
            viewBox="0 0 800 640"
            className="w-full h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
          >
            {/* The 3 circles, drawn as strokes */}
            {[V.a, V.b, V.c].map((c, i) => (
              <motion.circle
                key={i}
                cx={c.cx}
                cy={c.cy}
                r={VR}
                fill="none"
                stroke="#3a3a44"
                strokeWidth={1.5}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.85 }}
                transition={{ duration: 1.4, delay: 0.2 + i * 0.25, ease: "easeInOut" }}
              />
            ))}

            {/* Center heart */}
            <motion.path
              d="M 400 320 C 400 296, 366 280, 354 308 C 342 336, 380 360, 400 386 C 420 360, 458 336, 446 308 C 434 280, 400 296, 400 320 Z"
              fill="#e89aa1"
              stroke="#d96a73"
              strokeWidth={1.2}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7, type: "spring" }}
              style={{ transformOrigin: "400px 340px" }}
            />
            {/* Heart pulse aura */}
            <motion.path
              d="M 400 320 C 400 296, 366 280, 354 308 C 342 336, 380 360, 400 386 C 420 360, 458 336, 446 308 C 434 280, 400 296, 400 320 Z"
              fill="none"
              stroke="#d96a73"
              strokeWidth={2}
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: 2 }}
              style={{ transformOrigin: "400px 340px" }}
            />

            {/* Dashed arrow → Meaningful Brand Growth */}
            <motion.path
              d="M 470 340 L 720 340"
              fill="none"
              stroke="#d96a73"
              strokeWidth={2}
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            />
            <motion.polygon
              points="715,332 730,340 715,348"
              fill="#d96a73"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.4 }}
            />
          </motion.svg>

          {/* Labels overlay */}
          <div className="pointer-events-none absolute inset-0">
            {/* Top-left label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute text-right max-w-[40%]"
              style={{ left: "1%", top: "12%" }}
            >
              <div className="font-display font-semibold text-ink">{nodes[0].title}</div>
              <p className="text-xs sm:text-sm text-muted-foreground">{nodes[0].desc}</p>
            </motion.div>
            {/* Top-right label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="absolute max-w-[36%]"
              style={{ right: "16%", top: "12%" }}
            >
              <div className="font-display font-semibold text-ink">{nodes[1].title}</div>
              <p className="text-xs sm:text-sm text-muted-foreground">{nodes[1].desc}</p>
            </motion.div>
            {/* Bottom label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute text-center w-[40%]"
              style={{ left: "30%", bottom: "2%" }}
            >
              <div className="font-display font-semibold text-ink">{nodes[2].title}</div>
              <p className="text-xs sm:text-sm text-muted-foreground">{nodes[2].desc}</p>
            </motion.div>
            {/* Right outcome */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.4, duration: 0.7 }}
              className="absolute text-left"
              style={{ right: "0%", top: "44%" }}
            >
              <div className="font-display text-xl sm:text-2xl font-semibold text-rose-deep leading-tight">
                Meaningful<br />Brand Growth
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
