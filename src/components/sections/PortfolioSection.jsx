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
        <div className="portfolio-header-v3">
          <RevealWrapper className="portfolio-info-side">
            <SectionTag>Signature Work</SectionTag>
            <h2 className="section-title-v3">Where Nature Meets Design</h2>
            <p className="portfolio-sub-v3">
              Discover how we blend organic life with contemporary architecture 
              to create sustainable, high-impact outdoor environments.
            </p>
          </RevealWrapper>
          
          <RevealWrapper className="portfolio-tabs-side" delay="0.1s">
            <div className="portfolio-tabs-v3">
              {["all", "residential", "commercial", "rooftop"].map((f) => (
                <button
                  key={f}
                  className={`tab-btn-v3 ${activeFilter === f ? "active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f === "all" ? "All Projects" : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </RevealWrapper>
        </div>

        <div className="portfolio-grid-v4">
          {filtered.map((item, idx) => (
            <RevealWrapper
              key={item.id}
              delay={`${0.1 * idx}s`}
              className="portfolio-card-v4"
            >
              <div className="card-img-wrapper-v4">
                <LazyImage
                  className="card-img-v4"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
              <div className="card-info-v4">
                <div className="card-meta-v4">
                  <span className="card-cat-v4">{item.category}</span>
                  <span className="card-num-v4">0{idx + 1}</span>
                </div>
                <h3 className="card-name-v4">{item.name}</h3>
                <Link to="/portfolio" className="card-link-v4">
                   View Project Details →
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
});

export default PortfolioSection;
