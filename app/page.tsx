'use client';

import CarCatalogueContainer from "@/components/CarCatalogueContainer";
import Hero from "@/components/Hero";

// import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <CarCatalogueContainer/>
    </main>
  );
}
