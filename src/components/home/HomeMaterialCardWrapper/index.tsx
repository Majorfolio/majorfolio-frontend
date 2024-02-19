import React, { ReactNode, useRef, useState, MouseEvent } from 'react'
import CardWrapper from './index.styles';

interface HomeMaterialCardWrapperProps {
  children: ReactNode;
}

function HomeMaterialCardWrapper({ children }: HomeMaterialCardWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const MIN_DRAG_DISTANCE = 5;

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (!containerRef.current) return;
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const x = event.pageX - containerRef.current.offsetLeft;
    const distance = Math.abs(x - startX);
    if (distance >= MIN_DRAG_DISTANCE) {
      const walk = (x - startX) * 2; // 조절할 스크롤 속도
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <CardWrapper
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      { children }
    </CardWrapper>
  )
}

export default HomeMaterialCardWrapper