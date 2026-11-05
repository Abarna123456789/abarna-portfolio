'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animationFrameId;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target;

      // Check if hovering over a portfolio card mockup
      const projectCard = target?.closest('[data-cursor="view-project"]');
      setIsProjectHovered(!!projectCard);

      // Check if hovering over any other clickable interactive elements
      const isInteractive = target?.closest(
        'a, button, input, select, textarea, [role="button"], .cursor-pointer'
      );
      setIsHovered(!!isInteractive);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth Lerp loop for fluid trailing motion
    const render = () => {
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  return (
    <div
      className={`hidden md:block pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Follower Element */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform flex items-center justify-center"
      >
        {isProjectHovered ? (
          /* Portfolio Card Hover: Orange Circle with White Arrow + Outer White Ring matching screenshot 036bd27c */
          <div className="relative flex items-center justify-center animate-in zoom-in-75 duration-200 pointer-events-none">
            {/* Outer White Circular Ring */}
            <div className="w-[66px] h-[66px] rounded-full border-2 border-white/85 shadow-[0_0_25px_rgba(255,255,255,0.3)] flex items-center justify-center bg-black/15 backdrop-blur-[2px]">
              {/* Inner Solid Orange Circle with White Arrow */}
              <div className="w-[48px] h-[48px] rounded-full bg-[#FF5E1E] text-white flex items-center justify-center shadow-xl shadow-[#FF5E1E]/50">
                <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>
          </div>
        ) : (
          /* Standard Celestial Outer Trailing Ring */
          <div
            className={`w-8 h-8 rounded-full border border-[#FF5E1E] transition-all duration-200 pointer-events-none ${
              isClicked
                ? 'scale-75'
                : isHovered
                ? 'scale-150 bg-[#FF5E1E]/15 border-[#FF7A45] shadow-[0_0_20px_rgba(255,94,30,0.4)]'
                : 'border-[#FF5E1E]/80 shadow-[0_0_10px_rgba(255,94,30,0.2)]'
            }`}
          />
        )}
      </div>

      {/* Center Precise Dot (hidden when project hover badge is active) */}
      {!isProjectHovered && (
        <div
          ref={dotRef}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF5E1E] shadow-[0_0_8px_rgba(255,94,30,0.9)] pointer-events-none will-change-transform"
        />
      )}
    </div>
  );
}
