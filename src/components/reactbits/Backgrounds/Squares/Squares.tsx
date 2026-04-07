import { useEffect, useRef, useState } from 'react';

interface SquaresProps {
  direction?: 'diagonal' | 'up' | 'down' | 'left' | 'right';
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
}

const Squares: React.FC<SquaresProps> = ({
  direction = 'diagonal',
  speed = 1,
  borderColor = '#333',
  squareSize = 40,
  hoverFillColor = '#222',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const [hoveredSquare, setHoveredSquare] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x % squareSize);
      const startY = Math.floor(gridOffset.current.y % squareSize);

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 0.5;

      for (let x = -squareSize; x < canvas.width + squareSize; x += squareSize) {
        for (let y = -squareSize; y < canvas.height + squareSize; y += squareSize) {
          const posX = x + startX;
          const posY = y + startY;

          if (
            hoveredSquare &&
            posX <= hoveredSquare.x &&
            hoveredSquare.x < posX + squareSize &&
            posY <= hoveredSquare.y &&
            hoveredSquare.y < posY + squareSize
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(posX, posY, squareSize, squareSize);
          }

          ctx.strokeRect(posX, posY, squareSize, squareSize);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(1, 'rgba(0,0,0,0.4)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateOffset = () => {
      switch (direction) {
        case 'right':
          gridOffset.current.x -= speed;
          break;
        case 'left':
          gridOffset.current.x += speed;
          break;
        case 'down':
          gridOffset.current.y -= speed;
          break;
        case 'up':
          gridOffset.current.y += speed;
          break;
        case 'diagonal':
          gridOffset.current.x -= speed;
          gridOffset.current.y -= speed;
          break;
        default:
          break;
      }
    };

    const loop = () => {
      updateOffset();
      drawGrid();
      requestRef.current = requestAnimationFrame(loop);
    };

    requestRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, borderColor, squareSize, hoverFillColor, hoveredSquare]);

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setHoveredSquare({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredSquare(null);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`squares-canvas ${className}`}
      style={{
        width: '100%',
        height: '100%',
        display: 'block'
      }}
    />
  );
};

export default Squares;
