import { memo } from "react";
import { useContactForm } from "../../hooks/useContactForm";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";
import CustomSelect from "../ui/CustomSelect";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = memo(function ContactSection() {
  const { values, errors, status, handleChange, handleSubmit } =
    useContactForm();

  const services = [
    "Landscape Design",
    "Artificial Landscape",
    "Vertical Garden",
    "Garden Lights",
    "Fabric Design",
    "Garden Swings",
    "Gazebo Gardens",
    "Drip Irrigation",
    "Lawn Maintenance",
    "Garden Maintenance",
  ];

  return (
    <section id="contact" aria-label="Contact Agricore Ventures">
      <div className="container">
        <div className="contact-grid">
          <RevealWrapper className="contact-info">
            <SectionTag
              style={{
                color: "var(--gold)",
                borderColor: "rgba(212, 175, 55, 0.3)",
              }}
            >
              Get In Touch
            </SectionTag>
            <h2 className="section-heading">
              Let's Build Your
              <br />
              Masterpiece.
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                margin: "24px 0 48px",
              }}
            >
              Whether it's a private terrace garden or a sprawling corporate
              campus, our experts are ready to bring your vision to life.
            </p>

            <div className="contact-details">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Registered Office",
                  value:
                    "No. 10A, Krishnasamy Street, Nalvar layout, Rathinapuri, Coimbatore – 641027",
                },
                {
                  icon: <FaPhoneAlt />,
                  label: "Direct Line",
                  value: "+91 63696 84474",
                  link: "tel:+916369684474",
                },
                {
                  icon: <FaEnvelope />,
                  label: "Email Support",
                  value: "agricoreventures.pvtld@gmail.com",
                  link: "mailto:agricoreventures.pvtld@gmail.com",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="contact-item"
                  style={{ marginBottom: "32px" }}
                >
                  <div
                    className="contact-icon"
                    style={{
                      background: "rgba(212, 175, 55, 0.1)",
                      color: "var(--gold)",
                      borderRadius: "2px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="contact-label"
                      style={{
                        fontSize: "12px",
                        letterSpacing: "1px",
                        color: "var(--gold)",
                      }}
                    >
                      {item.label}
                    </div>
                    <div className="contact-value" style={{ fontWeight: 500 }}>
                      {item.link ? (
                        <a href={item.link}>{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper
            className="contact-form"
            delay="0.2s"
            style={{
              background: "var(--glass)",
              border: "1px solid var(--glass-border)",
              padding: "48px",
              borderRadius: "var(--radius-lg)",
            }}
          >
            {status === "success" ? (
              <div
                className="form-success-state"
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div style={{ fontSize: "48px", marginBottom: "24px" }}>🌿</div>
                <h3 style={{ color: "white", marginBottom: "12px" }}>
                  Message Received
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>
                  Thank you for reaching out. An expert from our design team
                  will contact you within 24 hours.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="btn btn-gold"
                  style={{ marginTop: "32px" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Rajan"
                      className={errors.firstName ? "input-error" : ""}
                    />
                    {errors.firstName && (
                      <span className="error-msg">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Suresh"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="rajan@company.com"
                      className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && (
                      <span className="error-msg">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="+91 12345 67890"
                      className={errors.phone ? "input-error" : ""}
                    />
                    {errors.phone && (
                      <span className="error-msg">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Type</label>
                  <CustomSelect
                    options={services}
                    value={values.service}
                    onChange={handleChange}
                    placeholder="Select an option..."
                  />
                </div>

                <div className="form-group">
                  <label>Project Details</label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell us about your outdoor space..."
                    rows="4"
                  ></textarea>
                </div>

                {status === "error" && (
                  <div
                    style={{
                      color: "#ff6b6b",
                      fontSize: "13px",
                      marginBottom: "16px",
                    }}
                  >
                    ⚠️ Something went wrong. Please try again or call us
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-gold"
                  disabled={status === "loading"}
                  style={{
                    width: "100%",
                    padding: "18px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {status === "loading" ? "Sending Request..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </RevealWrapper>
        </div>
      </div>

      <style>{`
          .contact-form label {
            display: block;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: rgba(255,255,255,0.4);
            margin-bottom: 8px;
          }
          .contact-form input, 
          .contact-form textarea {
            width: 100%;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 14px;
            color: white;
            font-family: var(--font-body);
            font-size: 14px;
            outline: none;
            transition: border-color 0.3s;
            margin-bottom: 20px;
            cursor: pointer;
          }
          .contact-form input:focus, 
          .contact-form textarea:focus {
            border-color: var(--gold);
          }
          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .error-msg {
            color: #ff6b6b;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: block;
            margin-top: -16px;
            margin-bottom: 16px;
          }
          .input-error {
            border-color: #ff6b6b !important;
          }
          @media (max-width: 768px) {
            .form-row { grid-template-columns: 1fr; gap: 0; }
          }
        `}</style>
    </section>
  );
});

export default ContactSection;
