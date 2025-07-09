"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useTheme } from "./ThemeProvider";
import { ThreeBackground } from "./ThreeBackground";
import {
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  Download,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  Play,
  ChevronDown,
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const roles = [
    "Azure Data Engineer",
    "Cloud Solutions Architect",
    "Data Pipeline Specialist",
    "Full-Stack Developer",
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    if (typedText.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText("");
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentIndex, roles]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("azure");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-950 dark:via-gray-900 dark:to-cyan-950"
    >
      <ThreeBackground />

      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-cyan-400/8 to-blue-400/8 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-8 right-8 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 border border-white/30 shadow-xl transition-all duration-300 hover:scale-110"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <div
            className={`space-y-12 transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Status Bar */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Available
                </span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Haryana, India</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Open to Remote / Hybrid / Office</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight tracking-tight pb-1">
                  Baljeet Jangra
                </h1>
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-cyan-600/10 blur-3xl -z-10 animate-pulse"></div>
              </div>

              <div className="h-16 flex items-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 leading-tight">
                  {typedText}
                  <span className="animate-pulse text-indigo-600 ml-1">|</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Transforming raw data into powerful insights through
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent font-medium">
                  {" "}
                  Azure cloud solutions
                </span>
              </p>

              <p className="text-lg text-gray-500 dark:text-gray-500 leading-relaxed max-w-2xl">
                Specialized in building scalable data pipelines, implementing
                modern ETL processes, and architecting cloud-native solutions.
                Evolved from full-stack development to focus on the intersection
                of data engineering and cloud innovation.
              </p>
            </div>

            {/* Core Expertise Tags */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-indigo-600" />
                <span className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">
                  Core Expertise
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Azure Data Factory",
                  "Synapse Analytics",
                  "Databricks",
                  "Real-time Processing",
                  "Delta Lake",
                  "Cloud Architecture",
                ].map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 text-indigo-700 dark:text-indigo-300 border-0 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="h-5 w-5 mr-2 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 border-2 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-black/20 shadow-lg hover:shadow-xl"
              >
                <Play className="h-5 w-5 mr-2" />
                View Portfolio
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect:
              </span>
              <div className="flex space-x-3">
                {[
                  {
                    icon: Linkedin,
                    href: "#",
                    label: "LinkedIn",
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: Github,
                    href: "#",
                    label: "GitHub",
                    color: "hover:text-gray-800 dark:hover:text-gray-200",
                  },
                  {
                    icon: Twitter,
                    href: "#",
                    label: "Twitter",
                    color: "hover:text-cyan-500",
                  },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 hover:scale-110 transition-all duration-300 shadow-lg ${social.color} group`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                    >
                      <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Refined Profile */}
          <div
            className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Ambient Glow */}
              <div className="absolute -inset-16 bg-gradient-to-r from-indigo-400/5 via-purple-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>

              {/* Profile Container */}
              <div className="relative z-10 group">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Elegant Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-60 animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50 animate-float delay-1000"></div>
                  <div className="absolute top-1/4 -left-8 w-1 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-40 animate-float delay-2000"></div>
                  <div className="absolute bottom-1/3 -right-8 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg rotate-45 opacity-50 animate-float delay-1500"></div>

                  {/* Main Profile Image */}
                  <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                    {/* Gradient Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                    {/* Inner Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full"></div>

                    {/* Image */}
                    <div className="relative inset-1 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-cyan-600/10 z-10 group-hover:from-indigo-600/20 group-hover:to-cyan-600/20 transition-all duration-500"></div>
                      <ImageWithFallback
                        src="/images/baljeet.jpg"
                        alt="Baljeet Jangra - Azure Data Engineer"
                        className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-xl backdrop-blur-sm flex items-center space-x-2 border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="animate-bounce rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 group"
          >
            <ChevronDown className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
