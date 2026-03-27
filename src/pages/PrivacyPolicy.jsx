import { memo } from "react";

const PrivacyPolicy = memo(function PrivacyPolicy() {
  return (
    <main
      className="page-content"
      style={{ paddingTop: "160px", paddingBottom: "100px" }}
    >
      <div className="container">
        <h1 className="section-heading">Privacy Policy</h1>
        <p
          className="section-sub"
          style={{ textAlign: "left", marginBottom: "40px" }}
        >
          Effective Date: January 1, 2024
        </p>

        <div className="legal-content" style={{ lineHeight: "1.8" }}>
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              1. Introduction
            </h2>
            <p>
              Agricore Ventures Private Limited ("we," "us," or "our") is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and share information about you when you
              visit our website or use our landscaping services.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              2. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us, such as
              when you request a consultation, fill out a contact form, or
              communicate with us. This information may include your name, email
              address, phone number, and details about your landscaping project.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide and improve our
              services, communicate with you, and send you promotional materials
              that may be of interest to you. We do not sell your personal
              information to third parties.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              4. Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method
              of transmission over the internet or method of electronic storage
              is 100% secure.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at agricoreventures.pvtld@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
});

export default PrivacyPolicy;
