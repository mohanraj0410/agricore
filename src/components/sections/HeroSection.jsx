import { memo } from "react";
import { Link } from "react-router-dom";
import brandBg from "../../assets/images/brandBackground.jpeg";
import premiumGardenDesign from "../../assets/images/premiumGardenDesign.jpeg";
import artificialLandscape from "../../assets/images/artificialLandscape01.jpeg";

const HeroSection = memo(function HeroSection() {
  return (
    <section id="hero" role="banner">
      <div
        className="hero-bg"
        role="img"
        aria-label="Lush green landscaped garden"
        style={{ backgroundImage: `url(${brandBg})` }}
      ></div>

      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Est. 2021 · Coimbatore's Elite Landscaping</span>
          </div>

          <h1 className="hero-title">
            Exceptional <br />
            <span className="text-highlight">Outdoor</span> <br />
            Living <em>Studios</em>
          </h1>

          <p className="hero-desc">
            We blend architectural precision with botanical art to create
            extraordinary landscapes that evolve with time.
          </p>

          <div className="hero-actions">
            <Link to="/portfolio" className="btn btn-gold">
              Explore Projects
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-glass">
              Book a Visit
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="main-image-panel">
            <img src={premiumGardenDesign} alt="Premium Garden Design" />
            <div className="image-overlay"></div>
          </div>
          <div className="accent-image-panel">
            <img
              src={artificialLandscape}
              alt="Detail of high-end garden feature"
            />
          </div>

          <div className="floating-stats">
            <div className="stat-card reveal-stat-1">
              <span className="stat-v">100+</span>
              <span className="stat-l">Masterpieces</span>
            </div>
            <div className="stat-card reveal-stat-2">
              <span className="stat-v">5+</span>
              <span className="stat-l">Years</span>
            </div>
            <div className="stat-card reveal-stat-3">
              <span className="stat-v">98%</span>
              <span className="stat-l">Happy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
