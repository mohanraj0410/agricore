import { memo } from "react";
import PortfolioSection from "../components/sections/PortfolioSection";

const PortfolioPage = memo(function PortfolioPage() {
  return (
    <main className="page-content" style={{ paddingTop: "100px" }}>
      <div
        className="container"
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h1 className="section-heading">Project Showcase</h1>
        <p className="section-sub" style={{ margin: "24px auto 0" }}>
          A collection of our most recent and remarkable landscaping projects
          across residential, commercial, and urban environments.
        </p>
      </div>
      <PortfolioSection />
    </main>
  );
});

export default PortfolioPage;
