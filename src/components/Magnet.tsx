import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distLeft = rect.left - padding;
      const distRight = rect.right + padding;
      const distTop = rect.top - padding;
      const distBottom = rect.bottom + padding;

      // Check if mouse is within element + padding
      if (
        e.clientX >= distLeft &&
        e.clientX <= distRight &&
        e.clientY >= distTop &&
        e.clientY <= distBottom
      ) {
        const dx = (e.clientX - centerX) / strength;
        const dy = (e.clientY - centerY) / strength;
        setTransform({ x: dx, y: dy });
        setIsHovered(true);
      } else {
        if (isHovered) {
          setTransform({ x: 0, y: 0 });
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setTransform({ x: 0, y: 0 });
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength, isHovered]);

  return (
    <div
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
