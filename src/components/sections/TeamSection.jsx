import { memo } from "react";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";
import LazyImage from "../ui/LazyImage";
import director01 from "../../assets/images/director01.jpg";
import director02 from "../../assets/images/director02.jpg";
import finance01 from "../../assets/images/financial&account.png";
import business01 from "../../assets/images/businesshead.PNG";

const teamMembers = [
  {
    id: 1,
    name: "Akash",
    role: "Director",
    bio: "With over a decade of experience in agro-innovation, Akash drives Agricore's strategic vision, ensuring every project balances environmental sustainability with cutting-edge landscape architecture.",
    image: director02,
  },
  {
    id: 2,
    name: "Bubesh Kumar",
    role: "Director",
    bio: "Leading our on-ground operations, Bubesh oversees complex horticultural projects from design to completion, ensuring the seamless transformation of blueprints into thriving green realities.",
    image: director01,
  },
  {
    id: 3,
    name: "Nandhini",
    role: "Finance & Account",
    bio: "Meticulous in financial planning and transparent accounting, Nandhini manages the firm's fiscal health, ensuring all landscaping ventures are economically viable and legally robust.",
    image: finance01,
  },
  {
    id: 4,
    name: "Manimegalai",
    role: "Business Development Head",
    bio: "Dedicated to building lasting partnerships, Manimegalai leads our growth strategy, connecting clients across South India with bespoke sustainable landscaping solutions that elevate their outdoor spaces.",
    image: business01,
  },
];

const TeamSection = memo(function TeamSection() {
  return (
    <section id="team" aria-label="Our Expert Team" className="section-white">
      <div className="container">
        <RevealWrapper style={{ textAlign: "center", marginBottom: "60px" }}>
          <SectionTag
            style={{
              color: "var(--gold)",
              borderColor: "rgba(212, 175, 55, 0.4)",
              margin: "0 auto 16px",
            }}
          >
            Meet the Experts
          </SectionTag>
          <h2 className="section-heading">The Minds Behind Your Masterpiece</h2>
          <p
            className="section-sub"
            style={{ margin: "0 auto", textAlign: "center", maxWidth: "700px" }}
          >
            Our diverse team of scientists, designers, and engineers work in
            harmony to transform your vision into a living reality.
          </p>
        </RevealWrapper>

        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <RevealWrapper
              key={member.id}
              delay={`${0.1 * i}s`}
              className="team-card"
            >
              <div className="team-image-box">
                <LazyImage
                  src={member.image}
                  alt={member.name}
                  className="team-img"
                  width="400"
                  height="500"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TeamSection;
