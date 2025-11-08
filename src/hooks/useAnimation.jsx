import { useRef, useState, useEffect } from 'react';

export function useFadeIn() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return [ref, isVisible];
}

export const MotionDiv = ({ children, className, ...props }) => {
  const [ref, isVisible] = useFadeIn();
  return (
    <div 
      ref={ref} 
      className={`fade-in ${isVisible ? 'visible' : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const MotionSection = ({ children, className, ...props }) => {
  const [ref, isVisible] = useFadeIn();
  return (
    <section 
      ref={ref} 
      className={`fade-in ${isVisible ? 'visible' : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </section>
  );
};
