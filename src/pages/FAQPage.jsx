import { memo } from "react";
import FAQSection from "../components/sections/FAQSection";

const FAQPage = memo(function FAQPage() {
  return (
    <main className="page-content" style={{ paddingTop: "100px" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 className="section-heading">Frequently Asked Questions</h1>
          <p className="section-sub" style={{ margin: "24px auto 0" }}>
            Everything you need to know about our landscaping process,
            maintenance services, and more.
          </p>
        </div>
      </div>
      <FAQSection />
    </main>
  );
});

export default FAQPage;
