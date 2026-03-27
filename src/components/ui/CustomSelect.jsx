import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({ options, value, onChange, placeholder = "Select an option..." }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedLabel = options.find(opt => opt === value) || placeholder;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange({ target: { name: 'service', value: option } }); // Mocking event structure for useContactForm
    setIsOpen(false);
  };

  return (
    <div className="custom-select-wrapper" ref={dropdownRef}>
      <div 
        className={`custom-select-header ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedLabel}</span>
        <svg 
          width="12" height="12" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      <div className={`custom-select-options ${isOpen ? 'show' : ''}`}>
        {options.map((option, idx) => (
          <div 
            key={idx} 
            className={`custom-select-option ${value === option ? 'selected' : ''}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <style>{`
        .custom-select-wrapper {
          position: relative;
          width: 100%;
          margin-bottom: 20px;
          user-select: none;
        }

        .custom-select-header {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius);
          color: white;
          font-family: var(--font-body);
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .custom-select-header:hover {
          border-color: rgba(212, 175, 55, 0.5);
        }

        .custom-select-header.active {
          border-color: var(--gold);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        }

        .custom-select-options {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          background: var(--forest);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--radius-lg);
          z-index: 50;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          max-height: 300px;
          overflow-y: auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .custom-select-options.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .custom-select-option {
          padding: 12px 18px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .custom-select-option:hover {
          background: rgba(212, 175, 55, 0.1);
          color: var(--gold);
        }

        .custom-select-option.selected {
          background: var(--gold);
          color: var(--forest);
          font-weight: 600;
        }

        /* Custom Scrollbar for dropdown */
        .custom-select-options::-webkit-scrollbar {
          width: 6px;
        }
        .custom-select-options::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-select-options::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
