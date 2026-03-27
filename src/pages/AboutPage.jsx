import { memo } from "react";
import AboutSection from "../components/sections/AboutSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import CTABanner from "../components/sections/CTABanner";

const AboutPage = memo(function AboutPage() {
  return (
    <main className="page-content" style={{ paddingTop: "100px" }}>
      <div
        className="container"
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <h1 className="section-heading">Our Story and Values</h1>
        <p className="section-sub" style={{ margin: "24px auto 0" }}>
          Agricore Ventures has been transforming outdoor spaces since 2021 with
          a commitment to quality and sustainability.
        </p>
      </div>
      <AboutSection />
      <WhyUsSection />
      <CTABanner />
    </main>
  );
});

export default AboutPage;
