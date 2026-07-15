import Hero from "@/components/Hero";
import Header from "@/components/Header";
import FeatureSection from "@/components/FeatureSection";
import InfoSection from "@/components/InfoSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import SetupProcessSection from "@/components/SetupProcessSection";
import FeaturesListSection from "@/components/FeaturesListSection";
import ExistingAccessSection from "@/components/ExistingAccessSection";
import DevicesSection from "@/components/DevicesSection";
import ComparisonSection from "@/components/ComparisonSection";
import PlanPickerSection from "@/components/PlanPickerSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />
      <Hero />
      <ScrollReveal>
        <FeatureSection />
      </ScrollReveal>
      <ScrollReveal>
        <InfoSection />
      </ScrollReveal>
      <ScrollReveal>
        <BenefitsSection />
      </ScrollReveal>
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      <ScrollReveal>
        <SetupProcessSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturesListSection />
      </ScrollReveal>
      <ScrollReveal>
        <ExistingAccessSection />
      </ScrollReveal>
      <ScrollReveal>
        <DevicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <ComparisonSection />
      </ScrollReveal>
      <ScrollReveal>
        <PlanPickerSection />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal>
        <FinalCTASection />
      </ScrollReveal>
      <Footer />
    </div>
  );
}
