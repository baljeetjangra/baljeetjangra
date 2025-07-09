"use client";
import React, { useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export const CodeMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let drops: CodeDrop[] = [];

    class CodeDrop {
      x: number;
      y: number;
      speed: number;
      characters: string[];
      opacity: number;
      fontSize: number;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 2 + 1;
        this.fontSize = Math.random() * 12 + 10;
        this.opacity = Math.random() * 0.5 + 0.1;

        // Data engineering and coding related characters
        const codeChars = [
          "1",
          "0",
          "{",
          "}",
          "<",
          ">",
          "/",
          "\\",
          "|",
          "-",
          "+",
          "=",
          "[",
          "]",
          "(",
          ")",
          ";",
          ":",
          ".",
          ",",
        ];
        this.characters = [];
        for (let i = 0; i < 20; i++) {
          this.characters.push(
            codeChars[Math.floor(Math.random() * codeChars.length)]
          );
        }
      }

      update(canvas: HTMLCanvasElement) {
        this.y += this.speed;
        if (this.y > canvas.height + 100) {
          this.y = -100;
          this.x = Math.random() * canvas.width;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.font = `${this.fontSize}px monospace`;
        ctx.fillStyle =
          theme === "dark"
            ? `rgba(99, 102, 241, ${this.opacity})`
            : `rgba(79, 70, 229, ${this.opacity * 0.3})`;

        for (let i = 0; i < this.characters.length; i++) {
          const charY = this.y - i * this.fontSize;
          const charOpacity = this.opacity * (1 - i / this.characters.length);

          if (
            charY > -this.fontSize &&
            charY < ctx.canvas.height + this.fontSize
          ) {
            ctx.fillStyle =
              theme === "dark"
                ? `rgba(99, 102, 241, ${charOpacity})`
                : `rgba(79, 70, 229, ${charOpacity * 0.3})`;
            ctx.fillText(this.characters[i], this.x, charY);
          }
        }

        ctx.restore();
      }
    }

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createDrops = () => {
      drops = [];
      const dropCount = Math.floor(canvas.width / 50);
      for (let i = 0; i < dropCount; i++) {
        drops.push(new CodeDrop(canvas));
      }
    };

    const animate = () => {
      ctx.fillStyle =
        theme === "dark"
          ? "rgba(17, 24, 39, 0.05)"
          : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop) => {
        drop.update(canvas);
        drop.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      createDrops();
      animate();
    };

    init();

    const handleResize = () => {
      resizeCanvas();
      createDrops();
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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
};
