import { useEffect, useRef } from "react";

const MouseGlow = () => {
  const glowRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const isMobileRef = useRef(false);

  // Check if device is mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current =
        window.innerWidth <= 768 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth animation loop with lerp interpolation
  useEffect(() => {
    if (isMobileRef.current) return;

    const smoothness = 0.15; // Lower = smoother, more lag; Higher = snappier, less smooth

    const animate = () => {
      // Linear interpolation (lerp) for smooth following
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * smoothness;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * smoothness;

      // Apply GPU-accelerated transform instead of left/top
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x - 300}px, ${glowPos.current.y - 300}px, 0)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mousePos.current.x = event.clientX;
      mousePos.current.y = event.clientY;
    };

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate);

    // Mouse listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none"
      style={{
        width: 600,
        height: 600,
        zIndex: 1,
        background: "radial-gradient(circle, rgba(0, 140, 255, 0.20) 0%, rgba(0, 180, 255, 0.15) 30%, transparent 70%)",
        filter: "blur(100px)",
        willChange: "transform",
      }}
    />
  );
};

export default MouseGlow;
