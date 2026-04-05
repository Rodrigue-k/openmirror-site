import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import FAQSection from "@/components/FAQSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <UseCasesSection />
        <FAQSection />
        <OpenSourceSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
