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

      {/* Hero Section */}
      <HeroSection />

      {/* Quick Blurb */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl sm:text-4xl text-primary mb-6">
            Friendly, In-Person Tech Help Across Durham Region
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We provide friendly, in-person tech help across Durham Region — tailored for anyone navigating smartphones, wi-fi issues or online scams and viruses.
          </p>
        </div>
      </section>

      {/* Core Services Snapshot */}
      <section className="bg-sand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-primary mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Expert help delivered with patience and care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-bold text-4xl text-primary mb-8">Why Choose EasyTech Durham?</h2>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Happy family using technology together */}
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Multi-generational family enjoying technology together" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="mb-8">
              <Quote className="w-16 h-16 text-accent mb-6 mx-auto" />
              <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "John from EasyTech Durham was so patient with me. He helped set up my new tablet and showed me how to video call my grandchildren. Now I feel confident using it on my own!"
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="Margaret Thompson" 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-xl text-primary">Margaret Thompson</h4>
                <p className="text-gray-600">Ajax Resident</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-contrast py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-4xl text-white mb-4">
            Ready to Make Tech Simple?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your friendly, in-person tech visit today
          </p>
          <Link href="/contact">
            <Button className="bg-white text-contrast hover:bg-gray-100 px-10 py-4 text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Calendar className="mr-3 h-6 w-6" />
              Book Your Visit Now
            </Button>
          </Link>
          <div className="mt-6">
            <span className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-lg">
              <Shield className="mr-2 h-5 w-5" />
              Safe, Secure, Local Service
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
