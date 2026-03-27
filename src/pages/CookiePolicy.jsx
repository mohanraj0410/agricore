import { memo, useEffect } from "react";
import RevealWrapper from "../components/ui/RevealWrapper";
import { FaCookieBite, FaCheck } from "react-icons/fa6";

const CookiePolicy = memo(function CookiePolicy() {
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
            <FaCookieBite size={28} color="var(--gold)" />
          </div>
          <h1 className="legal-title">Cookie Policy</h1>
        </RevealWrapper>

        <RevealWrapper delay="0.1s">
          <div className="legal-document">
            <div className="legal-section">
              <h2 className="legal-h2">1. Use of Cookies</h2>
              <p className="legal-text">
                Agricore Ventures Private Limited ("we," "us," or "our") uses
                cookies on our website to enhance your browsing experience,
                provide personalized content, and analyze our overall website
                traffic.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">2. What are Cookies?</h2>
              <p className="legal-text">
                Cookies are small text files that are stored on your device when
                you visit a website. They help the website remember your
                preferences, maintain your session safely, and provide a
                substantially better user experience on return visits.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">3. Types of Cookies We Use</h2>
              <ul className="legal-list">
                <li>
                  <strong>
                    <FaCheck color="var(--gold)" size={12} /> Necessary Cookies:
                  </strong>{" "}
                  These cookies are essential for the website to function
                  properly and cannot be switched off in our systems.
                </li>
                <li>
                  <strong>
                    <FaCheck color="var(--gold)" size={12} /> Analytical
                    Cookies:
                  </strong>{" "}
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously, helping us improve our platform.
                </li>
                <li>
                  <strong>
                    <FaCheck color="var(--gold)" size={12} /> Marketing Cookies:
                  </strong>{" "}
                  These cookies are used to track visitors across websites to
                  display relevant, engaging advertisements for our landscaping
                  services.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">4. Managing Cookies</h2>
              <p className="legal-text">
                You can easily manage your cookie preferences through your web
                browser settings. Please note that disabling essential cookies
                may temporarily affect the functionality and performance of our
                website.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-h2">5. Policy Updates</h2>
              <p className="legal-text">
                We may update this Cookie Policy periodically to reflect changes
                in legal or operational requirements. We encourage you to review
                this policy occasionally to stay informed.
              </p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </main>
  );
});

export default CookiePolicy;
