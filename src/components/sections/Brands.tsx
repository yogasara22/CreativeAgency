const brands = [
  "Unilever", "Nestlé", "UMG", "Arnott's GoodTime", "Oreo", "Teh Botol Sosro",
  "Rinso", "Molto", "Taro", "Meg Cheese", "Alderon", "Sakative",
];

export function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section className="relative bg-cream py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-rose-deep mb-3">Brands we love</p>
        <h2 className="font-display text-2xl sm:text-3xl text-ink">
          Trusted by the brands you grew up with.
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {loop.map((b, i) => (
            <div
              key={i}
              className="mx-10 font-display text-3xl sm:text-4xl text-ink/50 hover:text-rose-deep transition-colors"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
