import { Helmet } from "react-helmet";
import HeroSection from "@/components/hero-section";
import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Smartphone, 
  Wifi, 
  Fan, 
  Shield, 
  Check, 
  Quote,
  Calendar,
  Star 
} from "lucide-react";

export default function Home() {
  const coreServices = [
    {
      icon: Smartphone,
      title: "Smartphone Help",
      description: "Setup, learning apps, messaging, and camera use to stay connected with family and friends."
    },
    {
      icon: Wifi,
      title: "Wi-Fi / TV Setup", 
      description: "Fixing buffering issues, installing streaming apps, and simplifying remotes."
    },
    {
      icon: Fan,
      title: "Tech Cleanup Visit",
      description: "Optimizing slow devices, securing passwords, and organizing systems."
    },
    {
      icon: Shield,
      title: "Scam Recovery",
      description: "Removing malware, securing accounts, and contacting banks if needed."
    }
  ];

  const whyChooseUs = [
    {
      title: "Personalized, no-rush visits",
      description: "We take the time you need to feel comfortable and confident."
    },
    {
      title: "Trusted by seniors and families", 
      description: "Local reputation built on patience, kindness, and expertise."
    },
    {
      title: "Flat-rate, local pricing",
      description: "No surprises, no hourly meters running. Just fair, transparent rates."
    },
    {
      title: "Serving Pickering, Ajax, Whitby + beyond",
      description: "Convenient local service across Durham Region and surrounding areas."
    }
  ];

  return (
    <>
      <Helmet>
        <title>EasyTech Durham - Tech Support That Feels Supportive</title>
        <meta name="description" content="Friendly, in-person tech help across Durham Region for seniors, families, and anyone overwhelmed by modern devices." />
      </Helmet>

      {/* Hero Section - Clean and Minimal */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-primary mb-8 leading-tight">
            Support made easy.
          </h1>
          
          {/* Hero Image - Large and Clean */}
          <div className="bg-gray-100 rounded-2xl p-12 mb-16 h-96 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Diverse group of middle-aged adults collaborating stress-free with technology" 
              className="rounded-xl max-h-full max-w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Three Main Service Cards */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smartphone Help */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-4">In-Person Setup</h3>
              <p className="text-gray-600 mb-6">We come to you for patient, hands-on smartphone and device setup.</p>
              <Link href="/services">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Tech Cleanup */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Fan className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-4">Device Cleanup</h3>
              <p className="text-gray-600 mb-6">Speed up slow devices and organize your digital life securely.</p>
              <Link href="/services">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Scam Recovery */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-4">Virus and Scam Recovery</h3>
              <p className="text-gray-600 mb-6">Remove malware and secure your accounts after scam attempts.</p>
              <Link href="/services">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-4xl text-primary mb-4">Pricing</h2>
          <p className="text-xl text-gray-600 mb-16">Simple, transparent rates.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Regular Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-2xl text-primary mb-2">$109</h3>
              <p className="text-gray-600 mb-6">Most services</p>
              <ul className="text-left text-gray-600 space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  Smartphone setup & training
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  Wi-Fi & TV troubleshooting
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  Device cleanup & optimization
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white">
                  Book Service
                </Button>
              </Link>
            </div>

            {/* Scam Recovery */}
            <div className="bg-primary text-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-2xl mb-2">20% off</h3>
              <p className="text-white/90 mb-6">First visit special</p>
              <ul className="text-left text-white/90 space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  Just $99 for your first service
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  All regular services included
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  Limited time offer
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-contrast hover:bg-yellow-500 text-white font-semibold">
                  Claim Offer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-4xl text-primary mb-4">
            Need patient, local help? Let's chat.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We're here to make technology work for you, not against you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary-light text-white px-8 py-4 text-lg font-semibold rounded-xl">
                Get Started
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Call (905) 555-EASY
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
