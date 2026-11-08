import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import CoreFeatures from "./components/sections/CoreFeatures";
import BenefitsGrid from "./components/sections/BenefitsGrid";
import FaqAccordion from "./components/sections/FaqAccordion";

export default function App() {
  return (
    <div className="bg-dark-secondary flex flex-col flex-1 min-h-screen font-sans">
      <Header />
      <main className="isolate flex-1 flex flex-col">
        <HeroSection />
        <CoreFeatures />
        <BenefitsGrid />
        <FaqAccordion />
      </main>
      <Footer />
    </div>
  );
}
