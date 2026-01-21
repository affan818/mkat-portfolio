import About from "@/components/About";
import CaseStudyList from "@/components/CaseStudyList";

import ClientsSection from "@/components/ClientsSection";
import EditorialInstaGallery from "@/components/EditorialInstaGallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import ReelsShowcase from "@/components/ReelsShowcase";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EditorialInstaGallery />
      <ReelsShowcase />
      <ClientsSection />
      <CaseStudyList />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
