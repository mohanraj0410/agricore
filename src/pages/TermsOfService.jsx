import { memo } from "react";

const TermsOfService = memo(function TermsOfService() {
  return (
    <main
      className="page-content"
      style={{ paddingTop: "160px", paddingBottom: "100px" }}
    >
      <div className="container">
        <h1 className="section-heading">Terms of Service</h1>
        <p
          className="section-sub"
          style={{ textAlign: "left", marginBottom: "40px" }}
        >
          Last Updated: January 1, 2024
        </p>

        <div className="legal-content" style={{ lineHeight: "1.8" }}>
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By using the website of Agricore Ventures Private Limited ("we,"
              "us," or "our") or engaging our services, you agree to comply with
              and be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our website or services.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              2. Services
            </h2>
            <p>
              We provide landscaping and garden design services, including
              consultations, design, installation, and maintenance. We reserve
              the right to modify or discontinue our services at any time
              without notice.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              3. Project Terms
            </h2>
            <p>
              Landscaping projects are subject to specific agreements and
              contracts. Please refer to your project contract for details on
              scope of work, timelines, and payment terms.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              4. Intellectual Property
            </h2>
            <p>
              All content on our website, including text, designs, images, and
              logos, is the property of Agricore Ventures and is protected by
              intellectual property laws. You may not use our content without
              our prior written consent.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall Agricore Ventures be liable for any direct,
              indirect, incidental, or consequential damages arising from your
              use of our website or services.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              6. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India and are subject to
              the exclusive jurisdiction of the courts in Coimbatore, Tamil
              Nadu.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
});

export default TermsOfService;
