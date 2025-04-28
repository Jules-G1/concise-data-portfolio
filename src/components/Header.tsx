
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-medium">
          Alex Morgan
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <Link to="/#about" className="header-link">
              About
            </Link>
            <Link to="/#skills" className="header-link">
              Skills
            </Link>
            <Link to="/#projects" className="header-link">
              Projects
            </Link>
            <Link to="/#contact" className="header-link">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <Button asChild size="sm">
              <a href="mailto:alex@example.com">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
