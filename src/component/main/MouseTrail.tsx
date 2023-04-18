import React, { useState, useEffect, useRef } from 'react';
import { MouseTrailCanvas } from '../../style/main/mousetrail';

function MouseTrail(props: { setHandleMouseMoveState: any }) {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState<any>(null);
  const [trail, setTrail] = useState<any>([]);
  const [canvasWidth, setCanvasWidth] = useState<any>(0);
  const [canvasHeight, setCanvasHeight] = useState<any>(0);
  const [isMouseOut, setIsMouseOut] = useState<boolean>(true)

  const MAX_TRAIL_LENGTH = 20;
  const TRAIL_REMOVE_DELAY = 10;

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas.getContext('2d');
    setCtx(context);
    setCanvasWidth(canvas.width);
    setCanvasHeight(canvas.height);
  }, []);

  const handleResize = () => {
    const canvas: any = canvasRef.current;
    setCanvasWidth(canvas.offsetWidth);
    setCanvasHeight(canvas.offsetHeight);
  };

  useEffect(() => {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
      gradient.addColorStop(0, '#00F260');
      gradient.addColorStop(1, '#0575E6');

      ctx.lineWidth = 10;
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
  const handleMouseMove = (event: any) => {
    const mouseX = event.nativeEvent.clientX;
    const mouseY = event.nativeEvent.clientY;
    setTrail([{ x: mouseX, y: mouseY }, ...trail.slice(0, MAX_TRAIL_LENGTH - 1)]);
  };

  useEffect(() => {
    const trailLength = trail.length;
    if (trailLength > 0) {
      const timeoutId = setTimeout(() => {
        if (trail.length !== 1 || isMouseOut) {
          setTrail(trail.slice(0, trailLength - 1));
        }
      }, TRAIL_REMOVE_DELAY);

      return () => {
        clearTimeout(timeoutId);
        props.setHandleMouseMoveState({ handleMouseMove: handleMouseMove })
      };
    }
  }, [trail]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize()
    props.setHandleMouseMoveState({ handleMouseMove: handleMouseMove })
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MouseTrailCanvas
      ref={canvasRef}
      onMouseEnter={() => { setIsMouseOut(false) }}
      width={canvasWidth}
      height={canvasHeight}
    />
  );
}

export default MouseTrail;