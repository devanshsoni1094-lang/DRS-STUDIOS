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

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Floating subtle glass particles in 3D spatial depths
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.4 + 0.15,
    }));

    let tick = 0;

    const render = () => {
      tick += 0.007;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep obsidian & black spatial foundation
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // 1. Primary warm amber cinematic bloom
      const bloomX = width * 0.5 + (mouseX - width * 0.5) * 0.12;
      const bloomY = height * 0.42 + (mouseY - height * 0.5) * 0.12;
      const amberGlow = ctx.createRadialGradient(
        bloomX,
        bloomY,
        30,
        bloomX,
        bloomY,
        width * 0.55
      );
      amberGlow.addColorStop(0, 'rgba(217, 139, 58, 0.22)');
      amberGlow.addColorStop(0.35, 'rgba(198, 169, 108, 0.08)');
      amberGlow.addColorStop(0.7, 'rgba(217, 139, 58, 0.02)');
      amberGlow.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = amberGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Secondary soft champagne floating light orb
      const champX = width * 0.3 + Math.sin(tick * 0.8) * 140;
      const champY = height * 0.65 + Math.cos(tick * 0.8) * 90;
      const champGlow = ctx.createRadialGradient(
        champX,
        champY,
        20,
        champX,
        champY,
        width * 0.4
      );
      champGlow.addColorStop(0, 'rgba(198, 169, 108, 0.1)');
      champGlow.addColorStop(0.5, 'rgba(217, 139, 58, 0.025)');
      champGlow.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = champGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Floating glass orbs / spatial particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw glass particle with specular highlight
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 230, 190, ${p.alpha * 0.8})`;
        ctx.shadowColor = 'rgba(217, 139, 58, 0.6)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Delicate interconnecting light filaments
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(217, 139, 58, ${lineAlpha})`;
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
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90"
      aria-hidden="true"
    />
  );
};
