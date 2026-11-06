import React, { useEffect, useState, useRef } from 'react';

export const GlowCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Section interaction states
  const [isAbsorbed, setIsAbsorbed] = useState(false);
  const [isAbsorbingPulse, setIsAbsorbingPulse] = useState(false);
  const [isDeabsorbing, setIsDeabsorbing] = useState(false);

  const targetRef = useRef({ x: -100, y: -100 });
  const trailingRef = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);
  const activeSectionRef = useRef<HTMLElement | null>(null);
  const pulseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const deabsorbTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only enable custom cursor on devices with fine pointer (mouse / trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const resetActiveSection = () => {
      if (activeSectionRef.current) {
        activeSectionRef.current.classList.remove('section-active-interactive', 'cursor-absorbed-surface');
        activeSectionRef.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      targetRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Check if hovering over clickable elements
      const isClickable = !!target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');
      setIsHovered(isClickable);

      // 2. Identify Section and trigger section-level lighting animations
      const currentSection = target.closest('section, footer') as HTMLElement | null;

      if (currentSection) {
        // Dynamic coordinate updates for the section's ambient spotlight
        const rect = currentSection.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        currentSection.style.setProperty('--absorbed-x', `${mouseX}px`);
        currentSection.style.setProperty('--absorbed-y', `${mouseY}px`);
        currentSection.style.setProperty('--mouse-x', `${mouseX}px`);
        currentSection.style.setProperty('--mouse-y', `${mouseY}px`);

        if (!currentSection.classList.contains('section-active-interactive')) {
          currentSection.classList.add('section-active-interactive', 'cursor-absorbed-surface');
        }

        // When switching sections or entering for the first time
        if (activeSectionRef.current !== currentSection) {
          if (activeSectionRef.current) {
            activeSectionRef.current.classList.remove('section-active-interactive', 'cursor-absorbed-surface');
          }
          activeSectionRef.current = currentSection;
          setIsAbsorbed(true);
          setIsDeabsorbing(false);

          // Subtle entry pulse
          setIsAbsorbingPulse(true);
          if (pulseTimerRef.current) clearTimeout(pulseTimerRef.current);
          pulseTimerRef.current = setTimeout(() => {
            setIsAbsorbingPulse(false);
          }, 500);
        }
      } else {
        // Cursor moved out of all sections: smoothly reset section state
        if (activeSectionRef.current) {
          resetActiveSection();
          setIsAbsorbed(false);

          setIsDeabsorbing(true);
          if (deabsorbTimerRef.current) clearTimeout(deabsorbTimerRef.current);
          deabsorbTimerRef.current = setTimeout(() => {
            setIsDeabsorbing(false);
          }, 350);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      resetActiveSection();
      setIsAbsorbed(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // High performance smooth lerp loop
    const render = () => {
      const lerpSpeed = 0.18;
      trailingRef.current.x += (targetRef.current.x - trailingRef.current.x) * lerpSpeed;
      trailingRef.current.y += (targetRef.current.y - trailingRef.current.y) * lerpSpeed;

      setTrailingPosition({
        x: trailingRef.current.x,
        y: trailingRef.current.y,
      });

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      if (pulseTimerRef.current) clearTimeout(pulseTimerRef.current);
      if (deabsorbTimerRef.current) clearTimeout(deabsorbTimerRef.current);
      resetActiveSection();
    };
  }, [isVisible, isAbsorbed]);

  if (!isVisible) return null;

  // Refined, sleek, small circular follower size
  let haloDiameter = 22;
  if (isHovered) {
    haloDiameter = 34;
  } else if (isAbsorbed) {
    haloDiameter = 28;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      
      {/* 1. Subtle Absorption Entry Pulse */}
      {isAbsorbingPulse && (
        <div
          className="fixed rounded-full pointer-events-none animate-absorb-pulse"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: 50,
            height: 50,
            border: '1.5px solid rgba(217, 139, 58, 0.7)',
            boxShadow: '0 0 15px rgba(217, 139, 58, 0.4)',
          }}
        />
      )}

      {/* 2. De-absorption Snap Recoil Ring */}
      {isDeabsorbing && (
        <div
          className="fixed rounded-full pointer-events-none animate-deabsorb-snap"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: 45,
            height: 45,
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 0 12px rgba(217, 139, 58, 0.3)',
          }}
        />
      )}

      {/* 3. Small, Sleek Trailing Circular Follower */}
      <div
        className="fixed rounded-full pointer-events-none will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: haloDiameter,
          height: haloDiameter,
          transform: `translate3d(${trailingPosition.x - haloDiameter / 2}px, ${trailingPosition.y - haloDiameter / 2}px, 0)`,
          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), border 0.25s ease, background 0.25s ease, box-shadow 0.25s ease',
          border: isHovered
            ? '1.5px solid rgba(255, 255, 255, 0.9)'
            : isAbsorbed
            ? '1.2px solid rgba(217, 139, 58, 0.75)'
            : '1px solid rgba(217, 139, 58, 0.5)',
          background: isHovered
            ? 'rgba(217, 139, 58, 0.2)'
            : isAbsorbed
            ? 'rgba(217, 139, 58, 0.08)'
            : 'rgba(217, 139, 58, 0.03)',
          backdropFilter: isHovered ? 'blur(4px)' : 'none',
          boxShadow: isHovered
            ? '0 0 20px rgba(217, 139, 58, 0.6), inset 0 0 10px rgba(217, 139, 58, 0.3)'
            : '0 0 12px rgba(217, 139, 58, 0.35)',
        }}
      />

      {/* 4. Center Precision Glowing Dot */}
      <div
        className="fixed rounded-full pointer-events-none will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
          transform: `translate3d(${position.x - (isHovered ? 3 : 2)}px, ${position.y - (isHovered ? 3 : 2)}px, 0)`,
          transition: 'width 0.2s ease, height 0.2s ease',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 0 8px #D98B3A, 0 0 16px #D98B3A',
        }}
      />
    </div>
  );
};