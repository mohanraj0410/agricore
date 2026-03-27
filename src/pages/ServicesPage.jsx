import { memo } from "react";
import ServicesSection from "../components/sections/ServicesSection";

const ServicesPage = memo(function ServicesPage() {
  return (
    <main className="page-content" style={{ paddingTop: "100px" }}>
      <div
        className="container"
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <h1 className="section-heading">Our Landscaping Expertise</h1>
        <p className="section-sub" style={{ margin: "24px auto 0" }}>
          From initial design to year-round maintenance, we provide a full suite
          of landscaping services tailored to your specific needs.
        </p>
      </div>
      <ServicesSection />
    </main>
  );
});

export default ServicesPage;
