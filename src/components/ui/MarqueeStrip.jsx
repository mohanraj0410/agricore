import { memo } from 'react'

const MarqueeStrip = memo(function MarqueeStrip() {
    const items = [
      "Landscape Design", "Garden Maintenance", "Irrigation Systems", 
      "Lawn Management", "Tree Surgery", "Hardscaping", 
      "Vertical Gardens", "Rooftop Gardens"
    ]
  
    return (
      <div className="marquee-section" aria-hidden="true">
        <div className="marquee-track">
          {[...items, ...items].map((text, i) => (
            <span key={i} className="marquee-item">
              {text} <span className="marquee-dot"></span>
            </span>
          ))}
        </div>
      </div>
    )
})

export default MarqueeStrip
