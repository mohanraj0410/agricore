import { memo } from "react";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";
import LazyImage from "../ui/LazyImage";
import director01 from "../../assets/images/director01.jpg";
import director02 from "../../assets/images/director02.jpg";
import finance01 from "../../assets/images/financial&account.png";

const teamMembers = [
  {
    id: 1,
    name: "Akash",
    role: "Director",
    bio: "Driving the company's strategic vision and ensuring that every project reflects our core values of sustainability and architectural innovation.",
    image: director02,
  },
  {
    id: 2,
    name: "Bubesh Kumar",
    role: "Director",
    bio: "Leading operational excellence and overseeing complex architectural installations, ensuring seamless execution from blueprint to breathtaking reality.",
    image: director01,
  },
  {
    id: 3,
    name: "Nandhini",
    role: "Finance & Account",
    bio: "Managing the firm's financial health, project budgeting, and transparent accounting, ensuring every venture remains legally and economically sound.",
    image: finance01,
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
