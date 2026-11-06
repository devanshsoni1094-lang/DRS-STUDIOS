import React, { useEffect, useState, useRef } from 'react';

export const GlowCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Absorption states
  const [isAbsorbed, setIsAbsorbed] = useState(false);
  const [absorbedSectionName, setAbsorbedSectionName] = useState<string>('');
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

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      targetRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Check if hovering over interactive/clickable elements
      const isClickable = !!target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');
      setIsHovered(isClickable);

      // 2. Check for section absorption
      const currentSection = target.closest('section, footer') as HTMLElement | null;

      if (currentSection) {
        const sectionName =
          currentSection.getAttribute('data-section-name') ||
          (currentSection.id ? currentSection.id.toUpperCase() : 'SPATIAL ENVIRONMENT');

        // Update CSS coordinates on the active section for surface absorption glow
        const rect = currentSection.getBoundingClientRect();
        currentSection.style.setProperty('--absorbed-x', `${e.clientX - rect.left}px`);
        currentSection.style.setProperty('--absorbed-y', `${e.clientY - rect.top}px`);

        if (!currentSection.classList.contains('cursor-absorbed-surface')) {
          currentSection.classList.add('cursor-absorbed-surface');
        }

        // If newly entered a section or switched sections
        if (activeSectionRef.current !== currentSection) {
          if (activeSectionRef.current) {
            activeSectionRef.current.classList.remove('cursor-absorbed-surface');
          }
          activeSectionRef.current = currentSection;
          setAbsorbedSectionName(sectionName);
          setIsAbsorbed(true);
          setIsDeabsorbing(false);

          // Trigger energetic absorption pulse animation
          setIsAbsorbingPulse(true);
          if (pulseTimerRef.current) clearTimeout(pulseTimerRef.current);
          pulseTimerRef.current = setTimeout(() => {
            setIsAbsorbingPulse(false);
          }, 600);
        }
      } else {
        // Cursor has moved out of all sections (e.g. into nav or page boundary)
        if (activeSectionRef.current) {
          activeSectionRef.current.classList.remove('cursor-absorbed-surface');
          activeSectionRef.current = null;
          setIsAbsorbed(false);

          // Trigger elastic de-absorption recoil animation
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
      if (activeSectionRef.current) {
        activeSectionRef.current.classList.remove('cursor-absorbed-surface');
        activeSectionRef.current = null;
      }
      setIsAbsorbed(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp rendering loop
    const render = () => {
      // Free trailing vs absorbed trailing lerp factor
      const lerpFactor = isAbsorbed ? 0.16 : 0.2;
      trailingRef.current.x += (targetRef.current.x - trailingRef.current.x) * lerpFactor;
      trailingRef.current.y += (targetRef.current.y - trailingRef.current.y) * lerpFactor;
      
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
      if (activeSectionRef.current) {
        activeSectionRef.current.classList.remove('cursor-absorbed-surface');
      }
    };
  }, [isVisible, isAbsorbed]);

  if (!isVisible) return null;

  // Compute dimensions based on state
  let haloSize = 36;
  if (isAbsorbed) {
    haloSize = isHovered ? 180 : 150;
  } else if (isHovered) {
    haloSize = 52;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      
      {/* 1. Absorption Shockwave Wave (Triggers on entering section) */}
      {isAbsorbingPulse && (
        <div
          className="fixed rounded-full pointer-events-none animate-absorb-pulse"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: 120,
            height: 120,
            border: '2px solid rgba(217, 139, 58, 0.8)',
            boxShadow: '0 0 30px rgba(217, 139, 58, 0.6), inset 0 0 20px rgba(217, 139, 58, 0.4)',
          }}
        />
      )}

      {/* 2. De-absorption Snap Recoil Ring (Triggers on leaving section) */}
      {isDeabsorbing && (
        <div
          className="fixed rounded-full pointer-events-none animate-deabsorb-snap"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: 140,
            height: 140,
            border: '1.5px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 0 25px rgba(217, 139, 58, 0.5)',
          }}
        />
      )}

      {/* 3. Trailing Follower Halo (Morphs between free circle and absorbed spatial aura) */}
      <div
        className="fixed rounded-full pointer-events-none will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: haloSize,
          height: haloSize,
          transform: `translate3d(${trailingPosition.x - haloSize / 2}px, ${trailingPosition.y - haloSize / 2}px, 0)`,
          transition: 'width 0.45s cubic-bezier(0.16, 1, 0.3, 1), height 0.45s cubic-bezier(0.16, 1, 0.3, 1), border 0.4s ease, background 0.4s ease, box-shadow 0.4s ease',
          border: isAbsorbed
            ? isHovered
              ? '1.5px solid rgba(255, 255, 255, 0.7)'
              : '1px solid rgba(217, 139, 58, 0.4)'
            : isHovered
            ? '1.5px solid rgba(217, 139, 58, 0.9)'
            : '1px solid rgba(217, 139, 58, 0.45)',
          background: isAbsorbed
            ? 'radial-gradient(circle, rgba(217, 139, 58, 0.22) 0%, rgba(198, 169, 108, 0.08) 45%, rgba(5, 5, 5, 0) 72%)'
            : isHovered
            ? 'rgba(217, 139, 58, 0.12)'
            : 'rgba(217, 139, 58, 0.04)',
          backdropFilter: isAbsorbed ? 'blur(8px) saturate(160%)' : isHovered ? 'blur(4px)' : 'none',
          boxShadow: isAbsorbed
            ? isHovered
              ? '0 0 50px rgba(217, 139, 58, 0.5), inset 0 0 35px rgba(217, 139, 58, 0.3)'
              : '0 0 40px rgba(217, 139, 58, 0.3), inset 0 0 25px rgba(217, 139, 58, 0.18)'
            : isHovered
            ? '0 0 25px rgba(217, 139, 58, 0.6), inset 0 0 15px rgba(217, 139, 58, 0.3)'
            : '0 0 15px rgba(217, 139, 58, 0.25)',
        }}
      />

      {/* 4. Absorbed Section Status Tag (Floats smoothly beside cursor when absorbed) */}
      {isAbsorbed && absorbedSectionName && (
        <div
          className="fixed pointer-events-none transition-opacity duration-300"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${position.x + 20}px, ${position.y - 28}px, 0)`,
            opacity: isAbsorbed ? 1 : 0,
          }}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#D98B3A]/30 shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A] animate-ping" />
            <span className="text-[9px] font-mono font-medium tracking-widest text-[#C6A96C] uppercase whitespace-nowrap">
              ABSORBED // {absorbedSectionName}
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
          width: isHovered ? 8 : isAbsorbed ? 6 : 5,
          height: isHovered ? 8 : isAbsorbed ? 6 : 5,
          transform: `translate3d(${position.x - (isHovered ? 4 : isAbsorbed ? 3 : 2.5)}px, ${position.y - (isHovered ? 4 : isAbsorbed ? 3 : 2.5)}px, 0)`,
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