import { memo, useEffect } from "react";
import RevealWrapper from "../components/ui/RevealWrapper";
import { FaScaleBalanced } from "react-icons/fa6";

const TermsOfService = memo(function TermsOfService() {
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
            <FaScaleBalanced size={28} color="var(--gold)" />
          </div>
          <h1 className="legal-title">Terms of Service</h1>
        </RevealWrapper>

        <RevealWrapper delay="0.1s">
          <div className="legal-document">
            <div className="legal-section">
              <h2 className="legal-h2">1. Acceptance of Terms</h2>
              <p className="legal-text">
                By consciously using the digital website of Agricore Ventures
                Private Limited ("we," "us," or "our") or firmly engaging our
                professional services, you agree to comply with and be
                unconditionally bound by these official Terms of Service. If you
                strictly do not agree to these terms, please do not use our
                website or services in any capacity.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">2. Operating Services</h2>
              <p className="legal-text">
                We officially provide premium landscaping and advanced garden
                design services, comprehensively including consultations,
                initial design, full-scale installation, and regular
                maintenance. We firmly reserve the right to securely modify,
                expand, or discontinue our services at any exact time without
                prior public notice.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">3. Contractual Project Terms</h2>
              <p className="legal-text">
                All physical landscaping and architectural projects are firmly
                subject to highly specific agreements and legally binding
                contracts. Please carefully refer to your individual project
                contract for exact details on the approved scope of work,
                expected construction timelines, and structured payment terms.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">4. Company Intellectual Property</h2>
              <p className="legal-text">
                All content prominently displayed on our website, vividly
                including informational text, layout design, media images, and
                branded logos, is the absolute sole property of Agricore
                Ventures and is heavily protected by strict intellectual
                property laws. You strictly may not copy, replicate, or use our
                digital content without our confirmed, prior written consent.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">5. Strict Limitation of Liability</h2>
              <p className="legal-text">
                In no unfortunate event shall Agricore Ventures be held legally
                liable for any specific direct, indirect, highly incidental, or
                secondary consequential damages strictly arising from your
                informational use of our official website or related external
                services.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">6. Official Governing Law</h2>
              <p className="legal-text">
                These terms are lawfully governed by the operating laws of India
                and are specifically subject to the legal exclusive jurisdiction
                of the regional courts established in Coimbatore, Tamil Nadu.
              </p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </main>
  );
});

export default TermsOfService;
