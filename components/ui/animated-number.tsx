'use client';
import { cn } from '@/lib/utils';
import { motion, Spring, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

type AnimatedNumber = {
  value: number;
  className?: string;
  springOptions?: Spring;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
}: AnimatedNumber) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={cn('tabular-nums', className)}>
      {display}
    </motion.span>
  );
}
