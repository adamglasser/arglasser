'use client'

import { useEffect, useRef } from 'react'

export function TechScroller({ technologies }) {
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    
    // Create duplicate items for seamless looping
    const cloneItems = () => {
      const items = scrollElement.querySelectorAll('.tech-item');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        scrollElement.appendChild(clone);
      });
    };
    
    cloneItems();
    
    // Start the animation
    let animationFrame;
    let scrollPosition = 0;
    const speed = 0.5; // pixels per frame
    
    const scroll = () => {
      scrollPosition += speed;
      
      // Reset position when first set of items has scrolled past
      const firstItemWidth = scrollElement.querySelector('.tech-item').offsetWidth + 48; // width + margin
      if (scrollPosition >= firstItemWidth * (technologies.length)) {
        scrollPosition = 0;
      }
      
      scrollElement.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrame = requestAnimationFrame(scroll);
    };
    
    scroll();
    
    // Pause on hover
    const pauseAnimation = () => cancelAnimationFrame(animationFrame);
    const resumeAnimation = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(scroll);
    };
    
    scrollElement.addEventListener('mouseenter', pauseAnimation);
    scrollElement.addEventListener('mouseleave', resumeAnimation);
    
    return () => {
      cancelAnimationFrame(animationFrame);
      scrollElement?.removeEventListener('mouseenter', pauseAnimation);
      scrollElement?.removeEventListener('mouseleave', resumeAnimation);
    };
  }, [technologies.length]);
  
  return (
    <div className="relative overflow-hidden">
      <div 
        ref={scrollRef} 
        className="flex items-center space-x-12 py-4"
        style={{ width: 'max-content' }}
      >
        {technologies.map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="tech-item flex flex-col items-center w-36">
            <div className={`relative flex h-18 w-18 items-center justify-center ${tech.darkIcon ? 'rounded-full bg-white/90 p-3' : ''}`}>
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="h-14 w-14 object-contain brightness-[1.15]" 
              />
            </div>
            <div className="mt-5 text-sm text-center font-medium tracking-wide text-white/90">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 