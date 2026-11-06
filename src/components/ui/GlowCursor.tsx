import React, { useEffect, useState, useRef } from 'react';

export const GlowCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Section-Level Absorption & Interaction states
  const [isAbsorbed, setIsAbsorbed] = useState(false);
  const [activeSectionName, setActiveSectionName] = useState<string>('');
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

      // 1. Check if hovering over clickable elements (buttons, links, inputs, cards)
      const isClickable = !!target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');
      setIsHovered(isClickable);

      // 2. Identify Section and trigger section-level animations
      const currentSection = target.closest('section, footer') as HTMLElement | null;

      if (currentSection) {
        const sectionName =
          currentSection.getAttribute('data-section-name') ||
          (currentSection.id ? currentSection.id.toUpperCase() : 'SPATIAL STUDIO');

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
          setActiveSectionName(sectionName);
          setIsAbsorbed(true);
          setIsDeabsorbing(false);

          // Trigger captivating entry pulse
          setIsAbsorbingPulse(true);
          if (pulseTimerRef.current) clearTimeout(pulseTimerRef.current);
          pulseTimerRef.current = setTimeout(() => {
            setIsAbsorbingPulse(false);
          }, 600);
        }
      } else {
        // Cursor moved out of all sections: smoothly reset section state
        if (activeSectionRef.current) {
          resetActiveSection();
          setIsAbsorbed(false);

          // Trigger smooth de-absorption snap recoil
          setIsDeabsorbing(true);
          if (deabsorbTimerRef.current) clearTimeout(deabsorbTimerRef.current);
          deabsorbTimerRef.current = setTimeout(() => {
            setIsDeabsorbing(false);
          }, 450);
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

    // High performance smooth lerp loop for the outer floating circle
    const render = () => {
      const lerpSpeed = isAbsorbed ? 0.16 : 0.20;
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

  // Responsive circular follower size based on interaction state
  let haloDiameter = 38;
  if (isAbsorbed) {
    haloDiameter = isHovered ? 78 : 62;
  } else if (isHovered) {
    haloDiameter = 54;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      
      {/* 1. Absorption Entry Shockwave Ring */}
      {isAbsorbingPulse && (
        <div
          className="fixed rounded-full pointer-events-none animate-absorb-pulse"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: 130,
            height: 130,
            border: '2px solid rgba(217, 139, 58, 0.85)',
            boxShadow: '0 0 35px rgba(217, 139, 58, 0.7), inset 0 0 20px rgba(217, 139, 58, 0.4)',
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
            width: 120,
            height: 120,
            border: '1.5px solid rgba(255, 255, 255, 0.7)',
            boxShadow: '0 0 25px rgba(217, 139, 58, 0.5)',
          }}
        />
      )}

      {/* 3. Trailing Floating Circular Follower */}
      <div
        className="fixed rounded-full pointer-events-none will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: haloDiameter,
          height: haloDiameter,
          transform: `translate3d(${trailingPosition.x - haloDiameter / 2}px, ${trailingPosition.y - haloDiameter / 2}px, 0)`,
          transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), border 0.35s ease, background 0.35s ease, box-shadow 0.35s ease',
          border: isAbsorbed
            ? isHovered
              ? '1.5px solid rgba(255, 255, 255, 0.85)'
              : '1.5px solid rgba(217, 139, 58, 0.65)'
            : isHovered
            ? '1.5px solid rgba(217, 139, 58, 0.9)'
            : '1px solid rgba(217, 139, 58, 0.45)',
          background: isAbsorbed
            ? isHovered
              ? 'radial-gradient(circle, rgba(217, 139, 58, 0.25) 0%, rgba(198, 169, 108, 0.1) 60%, transparent 85%)'
              : 'radial-gradient(circle, rgba(217, 139, 58, 0.14) 0%, rgba(198, 169, 108, 0.04) 55%, transparent 80%)'
            : isHovered
            ? 'rgba(217, 139, 58, 0.14)'
            : 'rgba(217, 139, 58, 0.04)',
          backdropFilter: isAbsorbed ? 'blur(6px) saturate(160%)' : isHovered ? 'blur(4px)' : 'none',
          boxShadow: isAbsorbed
            ? isHovered
              ? '0 0 35px rgba(217, 139, 58, 0.6), inset 0 0 20px rgba(217, 139, 58, 0.3)'
              : '0 0 25px rgba(217, 139, 58, 0.4), inset 0 0 15px rgba(217, 139, 58, 0.2)'
            : isHovered
            ? '0 0 25px rgba(217, 139, 58, 0.6), inset 0 0 15px rgba(217, 139, 58, 0.3)'
            : '0 0 15px rgba(217, 139, 58, 0.25)',
        }}
      />

      {/* 4. Section HUD Status Pill */}
      {isAbsorbed && activeSectionName && (
        <div
          className="fixed pointer-events-none transition-opacity duration-300"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${position.x + 22}px, ${position.y - 28}px, 0)`,
            opacity: isAbsorbed ? 1 : 0,
          }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-[#D98B3A]/30 shadow-[0_4px_25px_rgba(0,0,0,0.85)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A] animate-ping" />
            <span className="text-[9px] font-mono font-medium tracking-widest text-[#C6A96C] uppercase whitespace-nowrap">
              ACTIVE // {activeSectionName}
            </span>
          </div>
        </div>
      )}

      {/* 5. Center Precision Glowing Dot */}
      <div
        className="fixed rounded-full pointer-events-none will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          transform: `translate3d(${position.x - (isHovered ? 4 : 3)}px, ${position.y - (isHovered ? 4 : 3)}px, 0)`,
          transition: 'width 0.2s ease, height 0.2s ease',
          backgroundColor: '#FFFFFF',
          boxShadow: isAbsorbed
            ? '0 0 12px #D98B3A, 0 0 24px #D98B3A, 0 0 35px #C6A96C'
            : '0 0 8px #D98B3A, 0 0 16px #D98B3A',
        }}
      />
    </div>
  );
};