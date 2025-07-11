import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl mb-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-gray-400">
              Always open to discussing new opportunities and interesting
              projects
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/baljeetjangra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-600 hover:text-white transition-colors"
              asChild
            >
              <a
                href="https://github.com/baljeetjangra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            {/* <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-cyan-600 hover:text-white transition-colors"
              asChild
            >
              <a
                href="https://twitter.com/baljeet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
              asChild
            >
              <a href="mailto:baljeetjangraa@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Baljeet. Built with React, Tailwind CSS, and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
