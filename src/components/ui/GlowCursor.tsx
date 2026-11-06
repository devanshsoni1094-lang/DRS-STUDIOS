import React, { useEffect, useState, useRef } from 'react';

export const GlowCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef({ x: -100, y: -100 });
  const trailingRef = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check if pointer is fine (mouse/trackpad, not touch)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      targetRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for the outer trailing halo
    const render = () => {
      trailingRef.current.x += (targetRef.current.x - trailingRef.current.x) * 0.18;
      trailingRef.current.y += (targetRef.current.y - trailingRef.current.y) * 0.18;
      setTrailingPosition({ x: trailingRef.current.x, y: trailingRef.current.y });

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer Glowing Trailing Ring */}
      <div
        className="fixed rounded-full transition-transform duration-200 ease-out will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          transform: `translate3d(${trailingPosition.x - (isHovered ? 26 : 18)}px, ${trailingPosition.y - (isHovered ? 26 : 18)}px, 0)`,
          border: isHovered ? '1.5px solid rgba(217, 139, 58, 0.85)' : '1px solid rgba(217, 139, 58, 0.45)',
          background: isHovered ? 'rgba(217, 139, 58, 0.12)' : 'rgba(217, 139, 58, 0.04)',
          backdropFilter: isHovered ? 'blur(4px)' : 'none',
          boxShadow: isHovered
            ? '0 0 25px rgba(217, 139, 58, 0.6), inset 0 0 15px rgba(217, 139, 58, 0.3)'
            : '0 0 15px rgba(217, 139, 58, 0.25)',
        }}
      />

      {/* Inner Glowing Center Dot */}
      <div
        className="fixed rounded-full will-change-transform"
        style={{
          left: 0,
          top: 0,
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          transform: `translate3d(${position.x - (isHovered ? 4 : 3)}px, ${position.y - (isHovered ? 4 : 3)}px, 0)`,
          backgroundColor: '#FFFFFF',
          boxShadow: '0 0 10px #D98B3A, 0 0 20px #D98B3A, 0 0 30px #C6A96C',
        }}
      />
    </div>
  );
};
