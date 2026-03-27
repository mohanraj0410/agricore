import { memo } from 'react'
import SectionTag from '../ui/SectionTag'
import RevealWrapper from '../ui/RevealWrapper'

const ProcessSection = memo(function ProcessSection() {
    const steps = [
      { num: '01', icon: '📋', title: 'Discovery Call', desc: 'We listen to your vision, budget and timeline. A free 30-minute consultation sets the foundation for everything.' },
      { num: '02', icon: '🎨', title: 'Design & Planning', desc: 'Our architects create detailed 2D plans and 3D visualizations. You approve every detail before work begins.' },
      { num: '03', icon: '🌱', title: 'Expert Installation', desc: 'Our certified team executes with precision. Regular updates keep you informed at every milestone.' },
      { num: '04', icon: '🏡', title: 'Ongoing Care', desc: "We don't just build and leave. Our maintenance contracts ensure your garden thrives year after year." }
    ]
  
    return (
      <section id="process" aria-label="Our work process">
        <div className="container">
          <RevealWrapper style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
            <SectionTag style={{ color: 'var(--gold)', borderColor: 'rgba(201,168,76,0.4)' }}>How We Work</SectionTag>
            <h2 className="section-heading">A Process Built for<br />Perfect Results</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.55)', margin: '0 auto' }}>From first call to final walkthrough, we follow a rigorous process that ensures every project exceeds expectations.</p>
          </RevealWrapper>
          <RevealWrapper className="process-grid" delay="0.2s">
            {steps.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="process-num">{step.num}</div>
                <div className="process-icon">{step.icon}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
                {idx < steps.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </RevealWrapper>
        </div>
      </section>
    )
})

export default ProcessSection
