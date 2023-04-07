import React, { useState, useEffect, useRef } from 'react';
import { MouseTrailCanvas } from '../../style/main/mousetrail';

function MouseTrail() {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState<any>(null);
  const [trail, setTrail] = useState<any>([]);
  const [canvasWidth, setCanvasWidth] = useState<number>(0);
  const [canvasHeight, setCanvasHeight] = useState<number>(0);

  const MAX_TRAIL_LENGTH = 100;

  useEffect(() => {
    const canvas:any = canvasRef.current;
    const context = canvas.getContext('2d');
    setCtx(context);
    setCanvasWidth(canvas.width);
    setCanvasHeight(canvas.height);
  }, []);

  const handleResize = () => {
    const canvas:any = canvasRef.current;
    setCanvasWidth(canvas.offsetWidth);
    setCanvasHeight(canvas.offsetHeight);
  };

  useEffect(() => {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
      gradient.addColorStop(0, '#00F260');
      gradient.addColorStop(1, '#0575E6');
      ctx.lineWidth = 30;
      ctx.strokeStyle = gradient;

      ctx.beginPath();

      trail.forEach((point:any, index:any) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });

      ctx.stroke();
    }
  }, [ctx, trail]);

  const handleMouseMove = (event:any) => {
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;
    const canvas:any = canvasRef.current;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#00F260');
    gradient.addColorStop(1, '#0575E6');

    ctx.lineWidth = 50;
    ctx.strokeStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(mouseX + 1, mouseY + 1);
    ctx.stroke();

    setTrail([{ x: mouseX, y: mouseY }, ...trail.slice(0, MAX_TRAIL_LENGTH - 1)]);
  };

  const handleMouseLeave = () => {
    const canvas:any = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    setTrail([]);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MouseTrailCanvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      width={canvasWidth}
      height={canvasHeight}
    />
  );
}

export default MouseTrail;