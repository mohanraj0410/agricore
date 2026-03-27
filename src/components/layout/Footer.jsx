import { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/favicon.png";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = memo(function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo">
              <div className="logo-mark" style={{ padding: "4px" }}>
                <img
                  src={logo}
                  alt="Agricore Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div>
                <div className="logo-text">AGRICORE</div>
                <div className="logo-sub">Ventures Pvt Ltd</div>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Coimbatore's most trusted landscaping and garden design company.
              Transforming outdoor spaces since 2021.
            </p>
            <div className="footer-social" aria-label="Social media links">
              <a
                href="https://www.facebook.com/share/1CfM2HePjh/"
                className="social-btn"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/agricore_ventures_pvtltd?igsh=MXNld2l3bGw4dGpycw=="
                className="social-btn"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@agricoreventurespvtltd?si=h_Ai8btg2-PPtp_v"
                className="social-btn"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4 style={{ color: "white" }}>Services</h4>
            <ul>
              <li>
                <Link to="/services">Landscape Design</Link>
              </li>
              <li>
                <Link to="/services">Artificial Landscape</Link>
              </li>
              <li>
                <Link to="/services">Vertical Garden</Link>
              </li>
              <li>
                <Link to="/services">Garden Lights</Link>
              </li>
              <li>
                <Link to="/services">Fabric Design</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ color: "white" }}>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio">Our Projects</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Info</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{ color: "white" }}>Legal</h4>
            <ul>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Agricore Ventures PVT LTD. All rights
            reserved.
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <span>Made with 🌿 in Coimbatore</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
