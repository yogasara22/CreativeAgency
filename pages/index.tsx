import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { BringingToLife } from "@/components/sections/BringingToLife";
import { Blueprint } from "@/components/sections/Blueprint";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { Brands } from "@/components/sections/Brands";
import { Contact } from "@/components/sections/Contact";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
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
