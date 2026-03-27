import { memo, useEffect } from "react";
import RevealWrapper from "../components/ui/RevealWrapper";
import { FaShieldHalved } from "react-icons/fa6";

const PrivacyPolicy = memo(function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="section-linen"
      style={{
        paddingTop: "140px",
        paddingBottom: "100px",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <RevealWrapper className="legal-page-header">
          <div className="legal-icon-box">
            <FaShieldHalved size={28} color="var(--gold)" />
          </div>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">Effective Date: March 2026</p>
        </RevealWrapper>

        <RevealWrapper delay="0.1s">
          <div className="legal-document">
            <div className="legal-section">
              <h2 className="legal-h2">1. Introduction</h2>
              <p className="legal-text">
                Agricore Ventures Private Limited ("we," "us," or "our") is
                deeply committed to protecting your personal privacy. This
                Privacy Policy explains in detail how we collect, use,
                safeguard, and share information about you when you visit our
                website or utilize our premium landscaping services.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">2. Information We Collect</h2>
              <p className="legal-text">
                We consciously collect information that you provide directly to
                us, such as when you request a landscaping consultation, fill
                out a contact form, or communicate with our support team. This
                information typically includes your name, email address,
                personal phone number, and physical details regarding your
                landscaping project.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">3. How We Use Your Information</h2>
              <p className="legal-text">
                We rely on the information we collect strictly to provide and
                continuously improve our specialized services, actively
                communicate with you regarding your projects, and send you
                promotional materials that may be of interest to you. We vow
                that we do not, and will not, sell your personal information to
                unapproved third parties.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">4. Data Security</h2>
              <p className="legal-text">
                We employ industry-standard, reasonable measures to protect your
                digital and physical personal information from unauthorized
                access, harmful use, or dangerous disclosure. However, no method
                of transmission over the internet or method of electronic
                storage is completely 100% secure.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">5. Contact Us</h2>
              <p className="legal-text">
                If you have any pressing questions or detailed concerns about
                this Privacy Policy, please reach out and contact us directly at{" "}
                <strong>agricoreventures.pvtld@gmail.com</strong>.
              </p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </main>
  );
});

export default PrivacyPolicy;
