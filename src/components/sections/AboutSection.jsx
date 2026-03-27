import { memo } from "react";
import { Link } from "react-router-dom";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";
import LazyImage from "../ui/LazyImage";
import aboutTeam from "../../assets/images/aboutTeam.jpeg";
import gardenDesign from "../../assets/images/gardenDesign.jpeg";

const AboutSection = memo(function AboutSection() {
  return (
    <section id="about" aria-label="About Agricore Ventures">
      <div className="container">
        <div className="about-grid">
          <RevealWrapper className="about-imgs">
            <div
              className="about-badge-float"
              aria-label="5 years of excellence"
            >
              <div className="num">5</div>
              <div className="txt">
                Years of
                <br />
                Excellence
              </div>
            </div>
            <div className="about-main-img">
              <LazyImage
                src={aboutTeam}
                alt="Agricore Ventures team on-site at a premium garden project"
                width="700"
                height="875"
              />
            </div>
            <div className="about-accent-img">
              <LazyImage
                src={gardenDesign}
                alt="Beautiful garden design crafted by Agricore"
                width="400"
                height="400"
              />
            </div>
          </RevealWrapper>

          <RevealWrapper delay="0.15s">
            <SectionTag>Our Story</SectionTag>
            <h2 className="section-heading">
              Rooted in Passion.
              <br />
              Growing with Purpose.
            </h2>
            <p className="section-sub">
              Founded in 2021 in Coimbatore, Agricore Ventures has grown from a
              small horticultural studio into South India's most trusted
              landscaping company — with over 100 projects that span residential
              gardens, corporate campuses, and public parks.
            </p>
            <ul className="about-list" role="list">
              <li>Licensed & insured with 5+ years of field expertise</li>
              <li>
                Team of 50+ certified horticulturists and landscape architects
              </li>
              <li>Eco-friendly practices — zero harmful chemicals policy</li>
              <li>End-to-end project management from concept to maintenance</li>
              <li>
                Awarded "Best Landscaping Company – Tamil Nadu" 4 consecutive
                years
              </li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Meet Our Team
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
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
