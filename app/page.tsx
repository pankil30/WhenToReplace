import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AdPlaceholder from "@/components/AdPlaceholder";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import ContentSection from "@/components/ContentSection";
import MethodologySection from "@/components/MethodologySection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <div className="max-w-[1200px] mx-auto px-6">
        <AdPlaceholder size="leaderboard" />
      </div>
      <CategoryGrid />
      <FeaturedProducts />
      <ContentSection />
      <MethodologySection />
      <CTABanner />
    </>
  );
}
