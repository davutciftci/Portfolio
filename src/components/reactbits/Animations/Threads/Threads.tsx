import { useEffect, useRef } from 'react';

interface ThreadsProps {
  color?: string;
  count?: number;
  speed?: number;
  maxDistance?: number;
  className?: string;
}

const Threads: React.FC<ThreadsProps> = ({
  color = '#ff6a00',
  count = 25,
  speed = 1,
  maxDistance = 150,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initPoints();
    };

    const initPoints = () => {
      points.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed
      }));
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      points.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        for (let j = i + 1; j < points.current.length; j++) {
          const p2 = points.current[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = 1 - dist / maxDistance;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [color, count, speed, maxDistance]);

  return <canvas ref={canvasRef} className={`threads-canvas ${className}`} style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default Threads;
