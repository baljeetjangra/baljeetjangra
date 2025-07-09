"use client";
import React, { useRef, useEffect, memo } from "react";
import { useTheme } from "./ThemeProvider";

interface ThreeBackgroundProps {
  type?: "hero" | "skills" | "projects" | "azure";
  intensity?: "low" | "medium" | "high";
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = memo(
  ({ type = "hero", intensity = "medium" }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(null);
    const { theme } = useTheme();

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size
      const resizeCanvas = () => {
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // Particle system
      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        opacity: number;
        color: string;
      }> = [];

      const particleCount =
        intensity === "low" ? 30 : intensity === "medium" ? 50 : 80;
      const colors =
        theme === "dark"
          ? ["#6366f1", "#8b5cf6", "#06b6d4", "#ec4899"]
          : ["#6366f1", "#8b5cf6", "#06b6d4", "#ec4899"];

      // Initialize particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach((particle, index) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off edges
          if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
          if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`;
          ctx.fill();

          // Draw connections
          particles.slice(index + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `${particle.color}${Math.floor(
                (1 - distance / 100) * 0.3 * 255
              )
                .toString(16)
                .padStart(2, "0")}`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [theme, type, intensity]);

    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
        style={{ willChange: "auto" }}
      />
    );
  }
);

ThreeBackground.displayName = "ThreeBackground";
