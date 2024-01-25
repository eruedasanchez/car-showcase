'use client';

import CarCatalogueContainer from "@/components/CarCatalogueContainer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <CarCatalogueContainer/>
    </main>
  );
}
