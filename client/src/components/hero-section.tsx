import { Button } from "@/components/ui/button";
import { Calendar, Settings, Shield } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Hero background with lifestyle image */}
      <div className="bg-gradient-to-r from-primary/95 to-primary-light/90 relative">
        {/* Lifestyle image showing comfortable tech use */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1000" 
          alt="people using tech" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-lg">
                Because tech support should feel <span className="text-accent drop-shadow-lg">supportive</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium mb-8 text-white drop-shadow-md">
                Local. Trusted. Tech made easy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button className="bg-contrast hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    <Settings className="mr-2 h-5 w-5" />
                    View Services
                  </Button>
                </Link>
              </div>
              
              <div className="text-white text-lg drop-shadow-md">
                <Shield className="inline mr-2 h-5 w-5 text-accent drop-shadow-lg" />
                Safe, Secure, Local Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
