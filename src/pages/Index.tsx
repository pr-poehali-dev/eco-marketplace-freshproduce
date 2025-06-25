import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductShowcase from "@/components/ProductShowcase";
import SubscriptionPreview from "@/components/SubscriptionPreview";
import GiftCertificates from "@/components/GiftCertificates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ProductShowcase />
      <SubscriptionPreview />
      <GiftCertificates />
      <Footer />
    </div>
  );
};

export default Index;
