import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Values", href: "#values" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function HeroHeart() {
  return (
    <motion.span
      className="relative mx-1 inline-flex h-[2.6em] w-[2.6em] shrink-0 items-center justify-center align-middle sm:mx-2 sm:h-[3.2em] sm:w-[3.2em]"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatDelay: 0.8 }}
    >
      <svg
        viewBox="0 0 48 48"
        className="h-full w-full drop-shadow-[0_10px_28px_rgba(236,79,123,0.18)]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-heart-fill" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="oklch(0.95 0.17 35)" />
            <stop offset="40%" stopColor="oklch(0.85 0.19 24)" />
            <stop offset="100%" stopColor="oklch(0.70 0.16 18)" />
          </radialGradient>
          <linearGradient id="hero-heart-shine" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.7" />
            <stop offset="40%" stopColor="white" stopOpacity="0.18" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M24 42s-14-8.5-17.8-17.2C3.2 18.4 6.5 11 12.5 11c3.5 0 6.2 2 7.5 4.8C21.3 13 24 11 27.5 11 33.5 11 36.8 18.4 33.8 24.8 30 33.5 24 42 24 42z"
          fill="url(#hero-heart-fill)"
        />
        <path
          d="M24 42s-14-8.5-17.8-17.2C3.2 18.4 6.5 11 12.5 11c3.5 0 6.2 2 7.5 4.8C21.3 13 24 11 27.5 11 33.5 11 36.8 18.4 33.8 24.8 30 33.5 24 42 24 42z"
          fill="url(#hero-heart-shine)"
        />
      </svg>
    </motion.span>
  );
}

function BackgroundHearts() {
  const hearts = [
    { top: "8%", left: "6%", size: 140, rotate: -12 },
    { top: "18%", right: "8%", size: 200, rotate: 8 },
    { top: "55%", left: "4%", size: 180, rotate: 15 },
    { top: "62%", right: "5%", size: 160, rotate: -8 },
    { top: "78%", left: "22%", size: 120, rotate: 6 },
    { top: "32%", left: "42%", size: 100, rotate: -5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {hearts.map((h, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          className="absolute text-rose/25"
          style={{
            top: h.top,
            left: h.left,
            right: h.right,
            width: h.size,
            height: h.size,
            transform: `rotate(${h.rotate}deg)`,
          }}
        >
          <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.5 4.5c2 0 3.6 1.1 4.5 2.7C12 5.6 13.5 4.5 15.5 4.5 19 4.5 21.1 8.2 19.6 11.7 17.5 16.4 12 21 12 21z" />
        </svg>
      ))}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-hero">
      <BackgroundHearts />

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 sm:px-10">
        <span className="text-base font-semibold tracking-tight text-ink sm:text-lg">
          Kalau Syang Bilang
        </span>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex flex-1 flex-col items-center justify-center px-6 pb-28 pt-4 text-center sm:px-10"
      >
        <p className="mb-10 rounded-full border border-border/80 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground sm:text-[11px]">
          Creative Communication Credential
        </p>

        <h1 className="text-balance leading-[0.95] text-ink">
          <span className="flex flex-wrap items-baseline justify-center gap-x-1 sm:gap-x-2">
            <span className="font-display text-5xl font-normal tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Kalau{" "}
            </span>
            <span className="inline-flex items-baseline gap-0 sm:gap-1">
              <span className="font-script text-5xl font-medium leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                S
              </span>
              <HeroHeart />
              <span className="font-script text-5xl font-medium leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                yang
              </span>
            </span>
          </span>
          <span className="mt-1 block font-display text-5xl font-normal tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            bilang
          </span>
        </h1>

        <p className="mt-8 text-base font-semibold text-ink sm:text-lg">
          A Multiline Creative Communication Agency
        </p>
        <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
          Serving FMCG, pharmacy, beauty, financial services, and beyond.
        </p>

        <div className="mt-10 flex flex-col items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-hero-cta px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-soft transition-all hover:brightness-105 hover:shadow-card sm:text-sm"
          >
            Let&apos;s build together
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 block h-16 w-px origin-top bg-border"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </section>
  );
}
