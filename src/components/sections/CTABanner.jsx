import { memo } from "react";
import { Link } from "react-router-dom";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";

const CTABanner = memo(function CTABanner() {
  return (
    <section id="cta-banner" aria-label="Call to action">
      <RevealWrapper className="container">
        <SectionTag
          style={{
            color: "var(--forest)",
            borderColor: "rgba(26,58,42,0.25)",
            margin: "0 auto 20px",
          }}
        >
          Ready to Begin?
        </SectionTag>
        <h2 className="section-heading">
          Your Dream Garden
          <br />
          is One Call Away.
        </h2>
        <p className="section-sub">
          Book a free site visit and let our experts show you what's possible.
          No pressure. Just possibilities.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/contact" className="btn btn-primary">
            Schedule Free Consultation
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a href="tel:+916369684474" className="btn btn-outline">
            📞 +91 63696 84474
          </a>
        </div>
      </RevealWrapper>
    </section>
  );
});

export default CTABanner;
