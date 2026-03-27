import { memo } from "react";
import { Link } from "react-router-dom";
import { usePortfolioFilter } from "../../hooks/usePortfolioFilter";
import LazyImage from "../ui/LazyImage";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";

const PortfolioSection = memo(function PortfolioSection() {
  const { filtered, activeFilter, setActiveFilter } = usePortfolioFilter();

  return (
    <section id="portfolio" aria-label="Project portfolio">
      <div className="container">
        <div className="portfolio-header">
          <RevealWrapper>
            <SectionTag>Our Projects</SectionTag>
            <h2 className="section-heading">
              Where Vision
              <br />
              Meets the Earth
            </h2>
            <div
              className="portfolio-filters"
              role="group"
              aria-label="Filter projects by category"
            >
              {["all", "residential", "commercial", "rooftop"].map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}{" "}
                  {f === "all" ? "Projects" : ""}
                </button>
              ))}
            </div>
          </RevealWrapper>
          <RevealWrapper delay="0.1s">
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              Start Your Project →
            </Link>
          </RevealWrapper>
        </div>
        <RevealWrapper className="portfolio-masonry" delay="0.2s">
          {filtered.map((item) => (
            <div key={item.id} className="portfolio-item">
              <LazyImage
                className="portfolio-img"
                src={item.image}
                alt={item.alt}
              />
              <div className="portfolio-overlay">
                <span className="portfolio-cat">{item.category}</span>
                <span className="portfolio-name">{item.name}</span>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
});

export default PortfolioSection;
