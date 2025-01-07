'use client';
import { AnimatedNumber } from '@/components/ui/animated-number';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

export function AnimatedNumberInView({num} : {num: number}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(num);
  }

  return (
    <div ref={ref}>
        +
      <AnimatedNumber
        springOptions={{
            type: 'spring',
          bounce: 0,
          duration: (num > 100) ? 2000 : 3000,
        }}
        value={value}
      />
    </div>
  );
}