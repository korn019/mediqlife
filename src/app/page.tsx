import CTASection from "@/components/modules/home/CTASection";
import HeroSection from "@/components/modules/home/HeroSection";
import KnowledgeSection from "@/components/modules/home/KnowledgeSection";
import MediQApp from "@/components/modules/home/MediqApp";
import PromotionSection from "@/components/modules/home/PromotionSection";
import WhyDidMediQHappen from "@/components/modules/home/WhyDidMediQHappen";
import WhyMustUseMediQ from "@/components/modules/home/WhyMustUseMediQ";

export default function Home() {
  return (
    <main className="space-y-20 mt-10">
      <HeroSection />
      <WhyDidMediQHappen />
      <WhyMustUseMediQ />
      <KnowledgeSection />
      <MediQApp />
      <PromotionSection />
      <CTASection />
    </main>
  );
}
