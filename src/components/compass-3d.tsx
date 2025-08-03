"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Compass3DProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Compass3D({ className = "", size = 'lg' }: Compass3DProps) {
  const compassRef = useRef<HTMLDivElement>(null);
  
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-80 h-80 lg:w-96 lg:h-96'
  };

  useEffect(() => {
    // Simple rotation animation using CSS transforms
    const compass = compassRef.current;
    if (!compass) return;

    let rotation = 0;
    const animate = () => {
      rotation += 0.5;
      const innerCompass = compass.querySelector('.compass-inner');
      if (innerCompass) {
        (innerCompass as HTMLElement).style.transform = `rotate(${rotation}deg)`;
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`} ref={compassRef}>
      {/* Outer glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-accent/20 to-professional-blue/20 rounded-full"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Glass effect background */}
      <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/10">
        <div className="flex items-center justify-center h-full relative overflow-hidden">
          {/* Main compass */}
          <div className="compass-inner relative">
            <svg 
              className="w-32 h-32 text-blue-accent drop-shadow-lg" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2L13.09 5.26L16 4L14.74 7.09L18 8L14.74 8.91L16 12L13.09 10.74L12 14L10.91 10.74L8 12L9.26 8.91L6 8L9.26 7.09L8 4L10.91 5.26L12 2Z"/>
            </svg>
            
            {/* Cardinal directions */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm">N</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm">S</div>
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm">W</div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm">E</div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-accent rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-professional-blue rounded-full"
          animate={{ 
            y: [0, -8, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-accent rounded-full"
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>
    </div>
  );
}
