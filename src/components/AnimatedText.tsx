import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none pointer-events-none"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  // Calculate total characters to assign uniform progress intervals
  const totalChars = text.length;
  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap justify-center leading-relaxed ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mx-[0.18em]">
            {wordChars.map((char, charIndex) => {
              const start = charCounter / totalChars;
              const end = Math.min(1, (charCounter + 1) / totalChars);
              charCounter++;

              return (
                <Character
                  key={charIndex}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {/* Account for trailing space in char count */}
            <span className="hidden">
              {(() => {
                charCounter++;
                return null;
              })()}
            </span>
          </span>
        );
      })}
    </p>
  );
};
