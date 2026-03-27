import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function RevealWrapper({ children, delay = '0s', className = '', ...props }) {
  const revealRef = useScrollReveal()
  
  return (
    <div 
        ref={revealRef} 
        className={`reveal ${className}`} 
        style={{ transitionDelay: delay }}
        {...props}
    >
      {children}
    </div>
  )
}
