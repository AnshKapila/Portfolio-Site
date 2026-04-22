import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelayMs?: number;
  charDelayMs?: number;
  transitionDurationMs?: number;
}

export function AnimatedHeading({
  text,
  className,
  initialDelayMs = 200,
  charDelayMs = 30,
  transitionDurationMs = 500,
}: AnimatedHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, initialDelayMs);
    return () => clearTimeout(timer);
  }, [initialDelayMs]);

  const lines = text.split('\n');
  let globalCharIndex = 0;

  return (
    <h1
      className={cn(className)}
      style={{ letterSpacing: '-0.04em' }}
    >
      {lines.map((line, lineIndex) => {
        return (
          <div key={lineIndex} className="whitespace-nowrap overflow-hidden">
            {line.split('').map((char, charIndex) => {
              const currentGlobalIndex = globalCharIndex++;
              return (
                <span
                  key={charIndex}
                  className="inline-block transition-transform transition-opacity"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDuration: `${transitionDurationMs}ms`,
                    transitionDelay: `${currentGlobalIndex * charDelayMs}ms`,
                    transitionTimingFunction: 'ease-out',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
}
