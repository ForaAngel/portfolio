import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import Problem from "@/components/Problem";
// import FeaturesAccordion from "@/components/FeaturesAccordion";
// import Pricing from "@/components/Pricing";
// import FAQ from "@/components/FAQ";
// import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
