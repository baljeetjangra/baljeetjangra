"use client";

import React, { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { CustomCursor } from "./CustomCursor";

interface ClientLoadingWrapperProps {
  children: React.ReactNode;
}

export const ClientLoadingWrapper: React.FC<ClientLoadingWrapperProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Simulate realistic loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay to ensure smooth transition
      setTimeout(() => setIsHydrated(true), 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Preload critical resources
  useEffect(() => {
    if (!isLoading) {
      // Preload images
      const imageUrls = [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
      ];

      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className={`transition-opacity duration-300 ${
        isHydrated ? "opacity-100" : "opacity-0"
      }`}
    >
      <CustomCursor />
      {children}
    </div>
  );
};
