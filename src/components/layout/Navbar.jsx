import { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollNavbar } from "../../hooks/useScrollNavbar";
import logo from "../../assets/images/favicon.png";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Navbar = memo(function Navbar() {
  const scrolled = useScrollNavbar(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";
  const isScrolled = scrolled || !isHomePage;

  const toggleMobile = () => setMobileOpen((v) => !v);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        id="navbar"
        className={isScrolled ? "scrolled" : ""}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container nav-inner">
          <Link
            to="/"
            className="logo"
            aria-label="Agricore Ventures Home"
            onClick={closeMobile}
          >
            <div
              className="logo-mark"
              aria-hidden="true"
              style={{ padding: "4px" }}
            >
              <img
                src={logo}
                alt="Agricore Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div>
              <div className="logo-text">AGRICORE</div>
              <div className="logo-sub">Ventures Pvt Ltd</div>
            </div>
          </Link>

          <ul className="nav-links" id="navLinks">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="nav-cta">
            <a
              href="tel:+916369684474"
              className="btn btn-outline"
              style={{
                padding: "10px 24px",
                color: "white",
                borderColor: "rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaPhoneVolume size={14} /> Call Us
            </a>
            <Link
              to="/contact"
              className="btn btn-gold"
              style={{ padding: "10px 24px" }}
            >
              START PROJECT
            </Link>
          </div>

          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={toggleMobile}
          >
            <span style={{ backgroundColor: "white" }}></span>
            <span style={{ backgroundColor: "white" }}></span>
            <span style={{ backgroundColor: "white" }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <button type="button" className="close-menu" onClick={closeMobile}>
          ✕
        </button>

        <div className="mobile-menu-content">
          <small
            style={{
              color: "var(--gold)",
              letterSpacing: "4px",
              fontSize: "10px",
              fontWeight: 700,
              marginBottom: "10px",
              display: "block",
            }}
          >
            NAVIGATION
          </small>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Link to="/about" onClick={closeMobile}>
              About
            </Link>
            <Link to="/services" onClick={closeMobile}>
              Services
            </Link>
            <Link to="/portfolio" onClick={closeMobile}>
              Projects
            </Link>
            <Link to="/contact" onClick={closeMobile}>
              Contact
            </Link>
          </div>

          <Link
            to="/contact"
            className="btn btn-gold"
            style={{
              textAlign: "center",
              marginTop: "32px",
              padding: "18px",
              width: "fit-content",
            }}
            onClick={closeMobile}
          >
            START YOUR PROJECT
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <div
            className="mobile-socials"
            style={{
              marginTop: "auto",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              gap: "20px",
            }}
          >
            <a
              href="https://www.instagram.com/agricore_ventures_pvtltd"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", fontSize: "20px" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1CfM2HePjh/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", fontSize: "20px" }}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com/@agricoreventurespvtltd"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", fontSize: "20px" }}
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

export default Navbar;
