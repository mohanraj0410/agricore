import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // High-performance movement without React state updates
    const updatePosition = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        followerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`custom-cursor ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`}
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 10000, willChange: 'transform' }}
      />
      <div 
        ref={followerRef}
        className={`custom-cursor-follower ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`}
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999, willChange: 'transform' }}
      />
    </>
  );
}
