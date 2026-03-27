import { memo, useState } from "react";
import { faqs } from "../../data/faqs";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";
import LazyImage from "../ui/LazyImage";

const FAQSection = memo(function FAQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <section id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq-grid">
          <RevealWrapper>
            <SectionTag>FAQs</SectionTag>
            <h2 className="section-heading">
              Questions We
              <br />
              Hear Often
            </h2>
            <div className="faq-list" role="list">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaqIndex === index ? "open" : ""}`}
                  role="listitem"
                >
                  <button
                    className="faq-q"
                    onClick={() =>
                      setOpenFaqIndex((prev) => (prev === index ? null : index))
                    }
                    aria-expanded={openFaqIndex === index}
                  >
                    {item.q}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                  <div className="faq-a">{item.a}</div>
                </div>
              ))}
            </div>
          </RevealWrapper>
          <RevealWrapper className="faq-img" delay="0.2s">
            <LazyImage
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80"
              alt="Peaceful garden landscape exemplifying Agricore's work quality"
              width="700"
              height="600"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
});

export default FAQSection;
