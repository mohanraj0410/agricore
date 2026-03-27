import { memo } from "react";
import { testimonials } from "../../data/testimonials";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";
import LazyImage from "../ui/LazyImage";

const TestimonialsSection = memo(function TestimonialsSection() {
  return (
    <section id="testimonials" aria-label="Client testimonials">
      <div className="container">
        <RevealWrapper className="testi-header" style={{ textAlign: "center" }}>
          <SectionTag
            style={{
              color: "var(--gold)",
              borderColor: "rgba(201,168,76,0.35)",
              margin: "0 auto 16px",
            }}
          >
            Client Stories
          </SectionTag>
          <h2 className="section-heading">Trusted by 100+ Happy Clients</h2>
          <p
            className="section-sub"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Real words from real people whose outdoor spaces we've transformed.
          </p>
        </RevealWrapper>
        <div className="testi-grid">
          {testimonials.map((testi, i) => (
            <RevealWrapper
              key={testi.id}
              delay={`${i * 0.1}s`}
              className="testi-card"
            >
              <article>
                <div className="testi-stars" aria-label="5 out of 5 stars">
                  {"★".repeat(testi.stars)}
                </div>
                <p className="testi-quote">{testi.quote}</p>
                <div className="testi-author">
                  <LazyImage
                    className="testi-avatar"
                    src={testi.avatar}
                    alt={`Portrait of ${testi.author}`}
                    width="46"
                    height="46"
                  />
                  <div>
                    <div className="testi-name">{testi.author}</div>
                    <div className="testi-role">{testi.role}</div>
                  </div>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection;
