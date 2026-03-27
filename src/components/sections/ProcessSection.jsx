import { memo } from "react";
import SectionTag from "../ui/SectionTag";
import RevealWrapper from "../ui/RevealWrapper";
import { 
  FaPhoneVolume, 
  FaComments, 
  FaMapLocationDot, 
  FaPenNib, 
  FaCircleCheck, 
  FaFileInvoiceDollar, 
  FaSignature, 
  FaMoneyBillTransfer, 
  FaClipboardList, 
  FaHelmetSafety, 
  FaSpinner, 
  FaTrophy, 
  FaCreditCard 
} from "react-icons/fa6";

const ProcessSection = memo(function ProcessSection() {
  const steps = [
    {
      num: "01",
      Icon: FaPhoneVolume,
      category: "Enquiry",
      title: "Customer Enquiry",
      desc: "Reach out to us via phone, email, or through our web portal to start your transformation journey.",
    },
    {
      num: "123", /* placeholder, original was 02 */
      Icon: FaComments,
      category: "Consultation",
      title: "Initial Communication",
      desc: "Understanding your high-level requirements, vision, and establishing the initial scope of work.",
    },
    {
      num: "03",
      Icon: FaMapLocationDot,
      category: "Site Assessment",
      title: "Site Visit & Discussion",
      desc: "Our experts visit your location to assess soil conditions, climate, and space potential for perfect planning.",
    },
    {
      num: "04",
      Icon: FaPenNib,
      category: "Design",
      title: "Pre Design Works",
      desc: "Optional detailed 2D & 3D visualization of your project. Professional charges applicable for this phase.",
      note: "Design Phase",
    },
    {
      num: "05",
      Icon: FaCircleCheck,
      category: "Design",
      title: "Design Approval",
      desc: "Reviewing the visual mockups and plans. We move forward only once you are 100% satisfied with the vision.",
    },
    {
      num: "06",
      Icon: FaFileInvoiceDollar,
      category: "Financial",
      title: "Project Estimate",
      desc: "Detailed breakdown of materials, manpower, and timeline. Transparent pricing with no hidden costs.",
    },
    {
      num: "07",
      Icon: FaSignature,
      category: "Approval",
      title: "Estimate Approval",
      desc: "Finalizing the numbers and getting your green light to initiate the procurement and planning phase.",
    },
    {
      num: "08",
      Icon: FaMoneyBillTransfer,
      category: "Contract",
      title: "Advance Payment",
      desc: "70% initial payment to secure resources, order materials, and finalize the execution schedule.",
    },
    {
      num: "09",
      Icon: FaClipboardList,
      category: "Logistics",
      title: "Planning & Logicstics",
      desc: "Arrangement of high-quality materials, expert manpower, and necessary transport for a smooth setup.",
    },
    {
      num: "10",
      Icon: FaHelmetSafety,
      category: "Execution",
      title: "Execution of Work",
      desc: "On-site implementation by our skilled team. Transforming plans into physical landscape structures.",
    },
    {
      num: "11",
      Icon: FaSpinner,
      category: "Progress",
      title: "Work in Progress",
      desc: "Milestone evaluation. 20% payment milestone during the main implementation phase.",
    },
    {
      num: "12",
      Icon: FaTrophy,
      category: "Completion",
      title: "Work Completion",
      desc: "Final touches, quality checks, and site cleaning. The vision is now your reality.",
    },
    {
      num: "13",
      Icon: FaCreditCard,
      category: "Settlement",
      title: "Balance Payment",
      desc: "Final 10% payment upon complete satisfaction and project handover. Your masterpiece is ready.",
    },
  ];

  /* fix num 02 */
  steps[1].num = "02";

  return (
    <section id="process" aria-label="Our work process" className="section-forest">
      <div className="container">
        <RevealWrapper
          style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
        >
          <SectionTag
            style={{
              color: "var(--gold)",
              borderColor: "rgba(212, 175, 55, 0.4)",
            }}
          >
            The Agricore Journey
          </SectionTag>
          <h2 className="section-heading" style={{ color: "white" }}>
            A Meticulous Process for<br />Premium Landscapes
          </h2>
          <p
            className="section-sub"
            style={{ color: "rgba(255,255,255,0.6)", margin: "0 auto" }}
          >
            From the first enquiry to the final handover, we follow a transparent and 
            structured workflow to ensure excellence at every single step.
          </p>
        </RevealWrapper>

        <RevealWrapper className="complex-process-grid" delay="0.2s">
          <div className="process-timeline-bar"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="complex-process-item">
              <div className="process-side-info">
                <span className="process-step-num">{step.num}</span>
                <span className="process-category">{step.category}</span>
              </div>
              <div className="process-card">
                <div className="process-main">
                  <div className="process-icon-box">
                    <step.Icon color="var(--gold)" size={22} />
                  </div>
                  <div className="process-content">
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-desc">{step.desc}</p>
                  </div>
                </div>
                {step.note && <div className="process-note">{step.note}</div>}
              </div>
              <div className="process-node">
                <div className="node-outer">
                  <div className="node-inner"></div>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>

        <RevealWrapper style={{ textAlign: "center", marginTop: "60px" }}>
            <div className="process-info-box">
                <p>💡 Note: 2D & 3D design works are optional and provided on customer request (Charges Applicable).</p>
            </div>
        </RevealWrapper>
      </div>
    </section>
  );
});

export default ProcessSection;
