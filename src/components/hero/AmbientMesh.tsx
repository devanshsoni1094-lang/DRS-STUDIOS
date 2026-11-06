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

    // Subtle atmospheric sci-fi dust particles
    const particleCount = Math.min(Math.floor(width / 40), 40);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let tick = 0;

    const render = () => {
      tick += 0.006;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep void black background
      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, width, height);

      // 1. Center Sci-Fi warm amber/orange rim glow (Echoframe style)
      const amberGlow = ctx.createRadialGradient(
        width * 0.5 + (mouseX - width * 0.5) * 0.15,
        height * 0.48 + (mouseY - height * 0.5) * 0.15,
        15,
        width * 0.5,
        height * 0.48,
        width * 0.42
      );
      amberGlow.addColorStop(0, 'rgba(255, 158, 44, 0.12)');
      amberGlow.addColorStop(0.35, 'rgba(255, 158, 44, 0.035)');
      amberGlow.addColorStop(0.7, 'rgba(200, 120, 20, 0.01)');
      amberGlow.addColorStop(1, 'rgba(3, 3, 3, 0)');
      ctx.fillStyle = amberGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Secondary metallic cool specular reflection
      const steelGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.2,
        10,
        width * 0.5,
        height * 0.2,
        width * 0.6
      );
      steelGlow.addColorStop(0, 'rgba(203, 213, 225, 0.04)');
      steelGlow.addColorStop(1, 'rgba(3, 3, 3, 0)');
      ctx.fillStyle = steelGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 175, 55, ${p.alpha * 0.6})`;
        ctx.fill();

        // Connect near particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.06;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 158, 44, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-85"
      aria-hidden="true"
    />
  );
};
