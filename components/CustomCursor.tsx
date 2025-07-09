"use client";

import React, { useEffect, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const updateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      requestAnimationFrame(updateFollower);
    };

    const handleMouseEnter = () => {
      cursor.classList.add("cursor-hover");
      follower.style.transform = "translate(-50%, -50%) scale(1.5)";
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-hover");
      follower.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const handleMouseDown = () => {
      cursor.classList.add("cursor-click");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("cursor-click");
    };

    // Event listeners
    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-hover'
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Start follower animation
    updateFollower();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
};
