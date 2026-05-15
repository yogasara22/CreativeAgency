import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { BringingToLife } from "@/components/sections/BringingToLife";
import { Services } from "@/components/sections/Services";
import { Blueprint } from "@/components/sections/Blueprint";
import { Showcase } from "@/components/sections/Showcase";
import { Brands } from "@/components/sections/Brands";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sayang — A Multiline Creative Communication Agency" },
      {
        name: "description",
        content:
          "Kalau Sayang bilang. A comprehensive ecosystem of creative services — brand activation, TVC, web, ads — for FMCG, pharmacy, beauty, and beyond.",
      },
      { property: "og:title", content: "Sayang — Bringing Brands to Life with Care" },
      {
        property: "og:description",
        content:
          "Creative communication agency serving Unilever, Nestlé, Arnott's, Sosro, Oreo and more.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <SmoothScroll />
      <Hero />
      <Manifesto />
      <BringingToLife />
      <Blueprint />
      <Services />
      <Showcase />
      <Brands />
      <Contact />
    </main>
  );
}
