import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { cn } from '../lib/utils';

interface AnimatedCharProps {
  char: string;
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
}

function AnimatedChar({ char, start, end, scrollYProgress }: AnimatedCharProps) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span 
        className="absolute left-0 top-0 text-[#D7E2EA]"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={cn("flex flex-wrap justify-center", className)}>
      {words.map((word, i) => (
        <span key={i} className="relative mr-[0.25em] mb-[0.2em] inline-block">
          {word.split("").map((char, j) => {
            const charIndex = words.slice(0, i).join("").length + i + j;
            const totalChars = text.length;
            const start = charIndex / totalChars;
            const end = start + (1 / totalChars);

            return (
              <AnimatedChar key={`${i}-${j}`} char={char} start={start} end={end} scrollYProgress={scrollYProgress} />
            );
          })}
        </span>
      ))}
    </p>
  );
}
