"use client";
import React, { useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export const DataParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: DataParticle[] = [];
    let connections: Connection[] = [];

    class DataParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 4 + 2;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;

        const colors =
          theme === "dark"
            ? ["#6366f1", "#06b6d4", "#8b5cf6", "#ec4899"]
            : ["#4f46e5", "#0891b2", "#7c3aed", "#db2777"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(canvas: HTMLCanvasElement, time: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Pulse effect
        this.opacity =
          0.3 + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.3;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();

        ctx.restore();
      }
    }

    class Connection {
      p1: DataParticle;
      p2: DataParticle;
      opacity: number;

      constructor(p1: DataParticle, p2: DataParticle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0;
      }

      update() {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance) {
          this.opacity = (1 - distance / maxDistance) * 0.3;
        } else {
          this.opacity = 0;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.strokeStyle = theme === "dark" ? "#6366f1" : "#4f46e5";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      connections = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);

      for (let i = 0; i < particleCount; i++) {
        particles.push(new DataParticle(canvas));
      }

      // Create potential connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connections.push(new Connection(particles[i], particles[j]));
        }
      }
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      connections.forEach((connection) => {
        connection.update();
        connection.draw(ctx);
      });

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(canvas, time * 0.001);
        particle.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      createParticles();
      animate(0);
    };

    init();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
    />
  );
};
