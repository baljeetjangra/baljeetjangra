"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "./ui/button";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  Award,
  Mail,
} from "lucide-react";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = useMemo(
    () => [
      { id: "hero", label: "Home", icon: Home },
      { id: "azure", label: "Azure", icon: User },
      { id: "skills", label: "Skills", icon: Code },
      { id: "projects", label: "Projects", icon: Briefcase },
      { id: "experience", label: "Experience", icon: Award },
      { id: "contact", label: "Contact", icon: Mail },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate scroll progress
    const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    setScrollProgress(Math.min(progress, 100));

    // Find active section with improved logic
    const sections = navItems
      .map((item) => {
        const element = document.getElementById(item.id);
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        const elementTop = scrollPosition + rect.top;
        const elementBottom = elementTop + element.offsetHeight;

        return {
          id: item.id,
          top: elementTop,
          bottom: elementBottom,
          height: element.offsetHeight,
        };
      })
      .filter(Boolean);

    // Special handling for contact section (footer)
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const contactRect = contactSection.getBoundingClientRect();
      const contactTop = scrollPosition + contactRect.top;

      // If we're within 200px of the contact section or at the bottom of the page
      if (
        contactRect.top <= windowHeight * 0.8 ||
        scrollPosition + windowHeight >= documentHeight - 100
      ) {
        setActiveSection("contact");
        return;
      }
    }

    // Find the section that's most visible
    let currentSection = "hero";
    const threshold = windowHeight * 0.3; // 30% of viewport height

    for (const section of sections) {
      if (
        section &&
        scrollPosition + threshold >= section.top &&
        scrollPosition < section.bottom
      ) {
        currentSection = section.id;
      }
    }

    setActiveSection(currentSection);
  }, [navItems]);

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <div className="bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-full px-8 py-4 shadow-2xl border border-white/20 dark:border-gray-800/20 transition-all duration-300">
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 group ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-lg shadow-indigo-500/25"
                    : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                }`}
              >
                <item.icon className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                <span className="font-medium">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-20 animate-pulse"></div>
                )}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-8 left-8 z-50 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-gray-800/20 hover:scale-110 transition-all duration-300"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
              onClick={closeMenu}
            />
            <div className="fixed top-24 left-8 right-8 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-800/20 p-6 transition-all duration-300">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full justify-start px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-white bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Enhanced Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 transition-all duration-300 ease-out relative"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </>
  );
};
