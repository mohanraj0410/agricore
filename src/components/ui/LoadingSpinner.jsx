import logo from "../../assets/images/favicon.png";

export default function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: 'var(--forest)',
      color: 'white',
      position: 'fixed',
      inset: 0,
      zIndex: 9999
    }}>
      <div className="loader-container">
        <div className="orbit-ring"></div>
        <div className="logo-pulse">
          <img src={logo} alt="Agricore Logo" />
        </div>
      </div>
      <div className="loading-text">
        <span>A</span>
        <span>G</span>
        <span>R</span>
        <span>I</span>
        <span>C</span>
        <span>O</span>
        <span>R</span>
        <span>E</span>
      </div>

      <style>{`
        .loader-container {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
        }

        .orbit-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-top: 2px solid var(--gold);
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }

        .logo-pulse {
          width: 60px;
          height: 60px;
          background: white;
          padding: 10px;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.2);
        }

        .logo-pulse img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .loading-text {
          display: flex;
          gap: 6px;
        }

        .loading-text span {
          font-family: var(--font-display);
          font-size: 14px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.6);
          animation: textFade 1.4s ease-in-out infinite;
        }

        ${[...Array(8)].map((_, i) => `
          .loading-text span:nth-child(${i + 1}) {
            animation-delay: ${i * 0.1}s;
          }
        `).join('')}

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.9); opacity: 0.8; }
        }

        @keyframes textFade {
          0%, 100% { opacity: 0.3; color: rgba(255,255,255,0.4); }
          50% { opacity: 1; color: var(--gold); }
        }
      `}</style>
    </div>
  )
}
