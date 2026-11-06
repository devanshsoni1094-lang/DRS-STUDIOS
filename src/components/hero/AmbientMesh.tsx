import React, { useEffect, useRef } from 'react';

export const AmbientMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Particle nodes for subtle connected luxury mesh
    const particleCount = Math.min(Math.floor(width / 35), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    // Ambient floating lights
    let tick = 0;

    const render = () => {
      tick += 0.005;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep luxury background
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Subtle atmospheric radial glows
      // 1. Center subtle warm gold glow
      const goldGlow = ctx.createRadialGradient(
        mouseX * 0.8 + width * 0.1,
        mouseY * 0.8 + height * 0.1,
        10,
        mouseX * 0.8 + width * 0.1,
        mouseY * 0.8 + height * 0.1,
        width * 0.5
      );
      goldGlow.addColorStop(0, 'rgba(198, 169, 108, 0.07)');
      goldGlow.addColorStop(0.5, 'rgba(198, 169, 108, 0.015)');
      goldGlow.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = goldGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Secondary cool charcoal atmospheric orb
      const secondaryX = width * 0.5 + Math.sin(tick) * 120;
      const secondaryY = height * 0.4 + Math.cos(tick) * 80;
      const charcoalGlow = ctx.createRadialGradient(
        secondaryX,
        secondaryY,
        20,
        secondaryX,
        secondaryY,
        width * 0.45
      );
      charcoalGlow.addColorStop(0, 'rgba(38, 38, 38, 0.35)');
      charcoalGlow.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = charcoalGlow;
      ctx.fillRect(0, 0, width, height);

      // Connect subtle mesh nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(198, 169, 108, ${p.alpha * 0.6})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(198, 169, 108, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
