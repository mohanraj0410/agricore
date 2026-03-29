import { memo } from "react";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";
import LazyImage from "../ui/LazyImage";
import whyUsImg from "../../assets/images/whyus.png";

import { FaLeaf, FaBullseye, FaTrophy, FaShieldAlt } from "react-icons/fa";

const WhyUsSection = memo(function WhyUsSection() {
  return (
    <section id="why-us" aria-label="Why choose Agricore Ventures">
      <div className="container">
        <div className="why-grid">
          <RevealWrapper className="why-img">
            <LazyImage
              src={whyUsImg}
              alt="Agricore Ventures premium landscaping excellence"
              width="700"
              height="500"
            />
          </RevealWrapper>
          <RevealWrapper delay="0.15s">
            <SectionTag>Why Agricore</SectionTag>
            <h2 className="section-heading">The Agricore Difference</h2>
            <p className="section-sub">
              We combine scientific horticultural knowledge with artistic design
              sensibility to deliver results that look stunning and last for
              decades.
            </p>
            <div className="why-features" role="list">
              {[
                {
                  icon: <FaLeaf />,
                  title: "100% Eco-Friendly Practices",
                  desc: "We use only organic fertilizers, natural pest control and water-efficient methods. Your garden is safe for children, pets and the planet.",
                },
                {
                  icon: <FaBullseye />,
                  title: "On-Time, On-Budget Delivery",
                  desc: "We've delivered 98% of projects on schedule. Fixed-price contracts mean no nasty surprises — what we quote is what you pay.",
                },
                {
                  icon: <FaTrophy />,
                  title: "Award-Winning Design Team",
                  desc: "Led by IGBC-certified landscape architects with international exposure and a portfolio spanning 100+ projects across South India.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "2-Year Maintenance Warranty",
                  desc: "Every project comes with a 2-year plant health guarantee. If anything doesn't thrive, we replace it — no questions asked.",
                },
              ].map((f, i) => (
                <div key={i} className="feature-item" role="listitem">
                  <div className="feature-icon" aria-hidden="true">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
});

export default WhyUsSection;
