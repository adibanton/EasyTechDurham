import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Shield, Heart, Star } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import easytechLogo from "@assets/EasyTech Durham_1753297004316.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      newsletterMutation.mutate(email);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={easytechLogo} 
                alt="EasyTech Durham Logo" 
                className="w-10 h-10"
              />
              <h3 className="font-bold text-2xl">EasyTech Durham</h3>
            </div>
            <p className="text-white/90 text-lg mb-6 font-medium">
              Empowering Durham with simple tech solutions.
            </p>
            <p className="text-white/70 leading-relaxed">
              We provide friendly, patient tech support to seniors, families, and anyone who wants technology to work for them, not against them.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/" className="hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-accent transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Tech-Savvy</h4>
            <p className="text-white/80 mb-4">Get our free tips</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-teal-600 text-white font-semibold"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Social Icons and Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-white/70 hover:text-accent transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-white/70 text-center">
              © {currentYear} EasyTech Durham. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
