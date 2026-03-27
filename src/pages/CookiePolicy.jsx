import { memo } from "react";

const CookiePolicy = memo(function CookiePolicy() {
  return (
    <main
      className="page-content"
      style={{ paddingTop: "160px", paddingBottom: "100px" }}
    >
      <div className="container">
        <h1 className="section-heading">Cookie Policy</h1>
        <p
          className="section-sub"
          style={{ textAlign: "left", marginBottom: "40px" }}
        >
          Date: January 1, 2024
        </p>

        <div className="legal-content" style={{ lineHeight: "1.8" }}>
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              1. Use of Cookies
            </h2>
            <p>
              Agricore Ventures Private Limited ("we," "us," or "our") uses
              cookies on our website to enhance your browsing experience and
              analyze our website traffic.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              2. What are Cookies?
            </h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They help the website remember your
              preferences and provide a better user experience.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              3. Types of Cookies We Use
            </h2>
            <ul style={{ paddingLeft: "20px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Necessary Cookies:</strong> These cookies are essential
                for the website to function properly and cannot be switched off.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Analytical Cookies:</strong> These cookies help us
                understand how visitors interact with our website by collecting
                and reporting information anonymously.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Marketing Cookies:</strong> These cookies are used to
                track visitors across websites and show them relevant
                advertisements.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              4. Managing Cookies
            </h2>
            <p>
              You can manage your cookie preferences through your web browser
              settings. Please note that disabling cookies may affect the
              functionality of our website.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              5. Updates
            </h2>
            <p>
              We may update this Cookie Policy from time to time. We encourage
              you to review this policy periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
});

export default CookiePolicy;
