import HeroSection from "../components/sections/HeroSection";
import MarqueeStrip from "../components/ui/MarqueeStrip";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProcessSection from "../components/sections/ProcessSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import TeamSection from "../components/sections/TeamSection";
import FAQSection from "../components/sections/FAQSection";
import CTABanner from "../components/sections/CTABanner";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />

      <div className="section-white">
        <AboutSection />
      </div>

      <div className="section-linen section-divide">
        <ServicesSection />
      </div>

      <ProcessSection />

      <div className="section-white">
        <PortfolioSection />
      </div>

      <div className="section-linen">
        <WhyUsSection />
      </div>

      <TeamSection />

      <div className="section-linen section-divide">
        <FAQSection />
      </div>

      <div className="section-white section-divide">
        <CTABanner />
      </div>

      <div className="section-forest">
        <ContactSection />
      </div>
    </main>
  );
}
