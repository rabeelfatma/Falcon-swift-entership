'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function TypedOnView({ text, className = '', speed = 45, as = 'span' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block' }}>
      {inView ? (
        <TypeAnimation sequence={[text]} wrapper={as} speed={speed} cursor={false} repeat={0} />
      ) : (
        <span style={{ visibility: 'hidden' }}>{text}</span>
      )}
    </span>
  );
}