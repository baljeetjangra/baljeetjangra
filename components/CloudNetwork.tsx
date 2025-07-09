"use client";
import React, { useRef, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export const CloudNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let cloudNodes: CloudNode[] = [];
    let dataStreams: DataStream[] = [];

    class CloudNode {
      x: number;
      y: number;
      size: number;
      opacity: number;
      pulseSpeed: number;
      pulseOffset: number;
      color: string;
      type: "storage" | "processing" | "analytics";

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 4;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;

        const types: Array<"storage" | "processing" | "analytics"> = [
          "storage",
          "processing",
          "analytics",
        ];
        this.type = types[Math.floor(Math.random() * types.length)];

        const colors = {
          storage: theme === "dark" ? "#06b6d4" : "#0891b2",
          processing: theme === "dark" ? "#6366f1" : "#4f46e5",
          analytics: theme === "dark" ? "#8b5cf6" : "#7c3aed",
        };
        this.color = colors[this.type];
      }

      update(time: number) {
        this.opacity =
          0.2 + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.3;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Draw cloud-like shape
        ctx.fillStyle = this.color;
        ctx.beginPath();

        switch (this.type) {
          case "storage":
            // Cylinder shape for storage
            ctx.ellipse(
              this.x,
              this.y - this.size / 2,
              this.size,
              this.size / 3,
              0,
              0,
              Math.PI * 2
            );
            ctx.fill();
            ctx.fillRect(
              this.x - this.size,
              this.y - this.size / 2,
              this.size * 2,
              this.size
            );
            ctx.ellipse(
              this.x,
              this.y + this.size / 2,
              this.size,
              this.size / 3,
              0,
              0,
              Math.PI * 2
            );
            break;
          case "processing":
            // Hexagon for processing
            const hexRadius = this.size;
            ctx.moveTo(this.x + hexRadius, this.y);
            for (let i = 1; i <= 6; i++) {
              const angle = (i * Math.PI) / 3;
              ctx.lineTo(
                this.x + hexRadius * Math.cos(angle),
                this.y + hexRadius * Math.sin(angle)
              );
            }
            ctx.closePath();
            break;
          case "analytics":
            // Diamond for analytics
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x, this.y + this.size);
            ctx.lineTo(this.x - this.size, this.y);
            ctx.closePath();
            break;
        }

        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();

        ctx.restore();
      }
    }

    class DataStream {
      startNode: CloudNode;
      endNode: CloudNode;
      progress: number;
      speed: number;
      particles: DataParticle[];

      constructor(start: CloudNode, end: CloudNode) {
        this.startNode = start;
        this.endNode = end;
        this.progress = 0;
        this.speed = Math.random() * 0.005 + 0.002;
        this.particles = [];

        // Create particles for the stream
        for (let i = 0; i < 5; i++) {
          this.particles.push(new DataParticle(start, end, i / 5));
        }
      }

      update() {
        this.particles.forEach((particle) => {
          particle.update(this.speed);
        });
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw connection line
        ctx.save();
        ctx.globalAlpha = 0.2;
        ctx.strokeStyle = theme === "dark" ? "#6366f1" : "#4f46e5";
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(this.startNode.x, this.startNode.y);
        ctx.lineTo(this.endNode.x, this.endNode.y);
        ctx.stroke();
        ctx.restore();

        // Draw particles
        this.particles.forEach((particle) => {
          particle.draw(ctx);
        });
      }
    }

    class DataParticle {
      progress: number;
      speed: number;
      x: number;
      y: number;
      startNode: CloudNode;
      endNode: CloudNode;

      constructor(start: CloudNode, end: CloudNode, initialProgress: number) {
        this.startNode = start;
        this.endNode = end;
        this.progress = initialProgress;
        this.speed = 0;
        this.x = start.x;
        this.y = start.y;
      }

      update(streamSpeed: number) {
        this.progress += streamSpeed;
        if (this.progress > 1) {
          this.progress = 0;
        }

        // Interpolate position
        this.x =
          this.startNode.x +
          (this.endNode.x - this.startNode.x) * this.progress;
        this.y =
          this.startNode.y +
          (this.endNode.y - this.startNode.y) * this.progress;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = theme === "dark" ? "#06b6d4" : "#0891b2";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Trail effect
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createCloudNetwork = () => {
      cloudNodes = [];
      dataStreams = [];

      const nodeCount = Math.floor((canvas.width * canvas.height) / 50000);

      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        cloudNodes.push(new CloudNode(canvas));
      }

      // Create data streams between nearby nodes
      cloudNodes.forEach((node, index) => {
        const nearbyNodes = cloudNodes.filter((otherNode, otherIndex) => {
          if (otherIndex === index) return false;
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < 200;
        });

        // Connect to 1-2 nearby nodes
        const connectionsCount = Math.min(2, nearbyNodes.length);
        for (let i = 0; i < connectionsCount; i++) {
          if (Math.random() > 0.7) {
            // 30% chance of connection
            dataStreams.push(new DataStream(node, nearbyNodes[i]));
          }
        }
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw data streams
      dataStreams.forEach((stream) => {
        stream.update();
        stream.draw(ctx);
      });

      // Update and draw cloud nodes
      cloudNodes.forEach((node) => {
        node.update(time * 0.001);
        node.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      createCloudNetwork();
      animate(0);
    };

    init();

    const handleResize = () => {
      resizeCanvas();
      createCloudNetwork();
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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      style={{ zIndex: 1 }}
    />
  );
};
