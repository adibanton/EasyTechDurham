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
  Star,
  Clock,
  Users,
  Award,
  Heart
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
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide friendly, in-person tech help across Durham Region — especially for seniors, families, and anyone overwhelmed by modern devices.
          </p>

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
              <h3 className="font-bold text-xl text-primary mb-4">Smartphone Help</h3>
              <p className="text-gray-600 mb-6">Assisting with setup, learning apps, messaging, and camera use to stay connected with family and friends.</p>
              <Link href="/services">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Wi-Fi/TV Setup */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Wifi className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-4">Wi-Fi / TV Setup</h3>
              <p className="text-gray-600 mb-6">Fixing buffering issues, installing streaming apps, and simplifying remotes to enhance entertainment.</p>
              <Link href="/services">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Tech Cleanup */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-4">Tech Cleanup Visit</h3>
              <p className="text-gray-600 mb-6">Optimizing slow devices, securing passwords, and organizing systems to reduce overwhelm.</p>
              <Link href="/services">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-primary mb-4">Why Choose EasyTech Durham?</h2>
            <p className="text-xl text-gray-600">Perfect for beginners, seniors, or anyone needing a tech refresh.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Personalized, no-rush visits</h3>
              <p className="text-gray-600">We take our time to ensure you're comfortable with every step.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Trusted by seniors and families</h3>
              <p className="text-gray-600">Specialized support for those who find technology overwhelming.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Flat-rate, local pricing</h3>
              <p className="text-gray-600">No hidden fees or hourly charges. You know exactly what you'll pay.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Serving Pickering, Ajax, Whitby + beyond</h3>
              <p className="text-gray-600">Local Durham Region service with flexible travel options.</p>
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
              <p className="text-gray-600 mb-6">Core services (Cleanup, Smartphone, Wi-Fi/TV)</p>
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
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  Password & security help
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white">
                  Book Service
                </Button>
              </Link>
            </div>

            {/* First Visit Special */}
            <div className="bg-primary text-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-4">
                <span className="bg-contrast text-primary px-3 py-1 rounded-full text-sm font-bold">💡 First Visit Special</span>
              </div>
              <h3 className="font-bold text-2xl mb-2">$99</h3>
              <p className="text-white/90 mb-6">Limited time offer</p>
              <ul className="text-left text-white/90 space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  Save $10 on your first visit
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  All regular services included
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  Perfect way to try our service
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-contrast hover:bg-yellow-500 text-white font-semibold">
                  Claim Offer
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Additional Services Quick List */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-bold text-xl text-primary mb-6 text-center">Other Services Available</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-accent mr-2" />
                Scam Recovery ($149+)
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-accent mr-2" />
                Password Manager Setup
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-accent mr-2" />
                Smart Home Setup
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-accent mr-2" />
                Printer Setup
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-accent mr-2" />
                Photo & Data Backup
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-accent mr-2" />
                1-on-1 Coaching ($99/hr)
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Travel fees: Free in Pickering, Ajax, Whitby • +$20 nearby areas • +$40 outside Durham
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-16 text-accent mb-8 mx-auto" />
          <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium italic">
            "John from EasyTech Durham was so patient with me. He helped set up my new tablet and showed me how to video call my grandchildren. Now I feel confident using it on my own!"
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1594824672903-2b3d2be3d4fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
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
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-4xl text-white mb-4">
            Ready to Make Tech Simple?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Book your friendly, in-person tech visit today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button className="bg-contrast hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Visit Now
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Call (905) 555-EASY
            </Button>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-white/20 text-white px-6 py-3 rounded-lg flex items-center">
              <Shield className="mr-3 h-5 w-5" />
              Safe, Secure, Local Service
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
