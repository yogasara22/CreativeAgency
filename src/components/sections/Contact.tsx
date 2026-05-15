import { motion } from "framer-motion";
import { HeartLogo } from "../HeartLogo";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-40 bg-background">
      <div className="watercolor-blob h-[32rem] w-[32rem] top-1/4 left-1/2 -translate-x-1/2 bg-blush/70" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="inline-block mb-8"
        >
          <HeartLogo className="h-16 w-16 text-rose-deep animate-heartbeat" />
        </motion.div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-ink leading-tight text-balance">
          Let's build your{" "}
          <span className="font-script italic text-rose-deep">[brand]</span>{" "}
          together.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Tell us what you care about. We'll listen, plan, and bring it to life —
          with the attentiveness your brand deserves.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="https://wa.me/6287883822614"
            className="group inline-flex items-center gap-3 rounded-full bg-rose-deep px-8 py-4 text-cream text-sm font-medium shadow-soft transition-all hover:bg-ink"
          >
            <span>+62 878 8382 2614</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="mailto:hello@kalausayangbilang.id"
            className="text-sm font-medium text-ink underline decoration-rose decoration-2 underline-offset-8 hover:decoration-rose-deep"
          >
            hello@kalausayangbilang.id
          </a>
        </div>

        <div className="mt-24 pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <HeartLogo className="h-4 w-4 text-rose-deep" />
            <span className="font-display text-base text-ink">Sayang</span>
            <span>— Kalau sayang bilang.</span>
          </div>
          <p>© {new Date().getFullYear()} Sayang Creative. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
