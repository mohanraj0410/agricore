import { memo } from "react";
import ContactSection from "../components/sections/ContactSection";

const ContactPage = memo(function ContactPage() {
  return (
    <main className="page-content" style={{ paddingTop: "100px" }}>
      <div
        className="container"
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h1 className="section-heading">Get In Touch</h1>
        <p className="section-sub" style={{ margin: "24px auto 0" }}>
          Have a question or ready to start your landscaping project? Fill out
          the form below and our team will get back to you shortly.
        </p>
      </div>
      <ContactSection />
    </main>
  );
});

export default ContactPage;
