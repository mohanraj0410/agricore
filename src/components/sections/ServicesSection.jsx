import { memo } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import LazyImage from "../ui/LazyImage";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";

import { 
  FaCompass, 
  FaSeedling, 
  FaTree, 
  FaLightbulb, 
  FaUmbrella, 
  FaChair, 
  FaHome, 
  FaTint, 
  FaLeaf, 
  FaCut 
} from "react-icons/fa";

const getIcon = (id) => {
  switch (id) {
    case 'landscape-design': return <FaCompass />;
    case 'artificial-landscape': return <FaSeedling />;
    case 'vertical-garden': return <FaTree />;
    case 'garden-lights': return <FaLightbulb />;
    case 'garden-fabric-design': return <FaUmbrella />;
    case 'garden-swings': return <FaChair />;
    case 'gazebo-gardens': return <FaHome />;
    case 'garden-drip-pipes': return <FaTint />;
    case 'lawn-maintenance': return <FaLeaf />;
    case 'garden-maintenance': return <FaCut />;
    default: return <FaLeaf />;
  }
};

const ServiceCard = memo(function ServiceCard({ service, index }) {
  const { id, name, description, image, imageAlt, isLarge } = service;
  return (
    <article
      className={`service-card ${isLarge ? "service-card--large" : ""}`}
      aria-label={`${name} service`}
      style={{ "--delay": `${index * 0.1}s` }}
    >
      <div className="service-img">
        <LazyImage src={image} alt={imageAlt} />
      </div>
      <div className="service-body">
        <div className="service-icon" aria-hidden="true">
          {getIcon(id)}
        </div>
        <h3 className="service-name">{name}</h3>
        <p className="service-desc">{description}</p>
        <Link to="/contact" className="service-link">
          Explore Service →
        </Link>
      </div>
    </article>
  );
});

export default function ServicesSection() {
  return (
    <section id="services" aria-label="Our landscaping services">
      <div className="container">
        <div className="services-header">
          <RevealWrapper>
            <SectionTag>What We Do</SectionTag>
            <h2 className="section-heading">Comprehensive Outdoor Solutions</h2>
          </RevealWrapper>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
