import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import easytechLogo from "@assets/EasyTech Durham_1753297004316.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src={easytechLogo} 
              alt="EasyTech Durham Logo" 
              className="w-12 h-12"
            />
            <div>
              <h1 className="font-bold text-xl text-primary">EasyTech Durham</h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href) 
                    ? "text-accent" 
                    : "text-charcoal hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-contrast hover:bg-yellow-500 text-white font-semibold transition-all duration-200 transform hover:scale-105">
              Book Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 font-medium ${
                    isActive(link.href) 
                      ? "text-accent" 
                      : "text-charcoal hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-2 bg-contrast hover:bg-yellow-500 text-white font-semibold">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
