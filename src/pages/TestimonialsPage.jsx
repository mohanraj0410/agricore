import { memo } from "react";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const TestimonialsPage = memo(function TestimonialsPage() {
  return (
    <main className="page-content" style={{ paddingTop: "100px" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 className="section-heading">What Our Clients Say</h1>
          <p className="section-sub" style={{ margin: "24px auto 0" }}>
            Read the experiences of homeowners and businesses who have partnered
            with Agricore Ventures for their landscaping needs.
          </p>
        </div>
      </div>
      <TestimonialsSection />
    </main>
  );
});

export default TestimonialsPage;
