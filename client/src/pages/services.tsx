import { Helmet } from "react-helmet";
import ServiceSelection from "@/components/service-selection";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Wifi, 
  Fan, 
  Shield, 
  Key,
  Home,
  Printer,
  Camera,
  GraduationCap,
  Users,
  CheckCircle
} from "lucide-react";

export default function Services() {
  const coreServices = [
    {
      icon: Smartphone,
      title: "Smartphone Help",
      description: "Assisting with setup, learning apps, messaging, and camera use to stay connected with family and friends.",
      features: [
        "Initial phone setup and contacts",
        "Messaging and calling features", 
        "Camera and photo sharing",
        "Essential apps installation"
      ]
    },
    {
      icon: Wifi,
      title: "Wi-Fi / TV Setup",
      description: "Fixing buffering issues, installing streaming apps, and simplifying remotes to enhance entertainment and communication.",
      features: [
        "Wi-Fi troubleshooting and optimization",
        "Streaming service setup",
        "Smart TV configuration",
        "Remote control simplification"
      ]
    },
    {
      icon: Fan,
      title: "Tech Cleanup Visit", 
      description: "Optimizing slow devices, securing passwords, and organizing systems to reduce overwhelm and improve usability.",
      features: [
        "Device speed optimization",
        "Password organization and security",
        "File organization and cleanup",
        "System updates and maintenance"
      ]
    },
    {
      icon: Shield,
      title: "Scam Recovery",
      description: "Removing malware, securing accounts, and contacting banks if needed, addressing a key concern for safety-conscious seniors.",
      features: [
        "Malware detection and removal",
        "Account security restoration", 
        "Banking contact assistance",
        "Future scam prevention setup"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Key,
      title: "Password Manager Setup",
      description: "Secure password organization and management"
    },
    {
      icon: Home,
      title: "Smart Home Device Setup", 
      description: "Voice assistants, smart lights, and thermostats"
    },
    {
      icon: Printer,
      title: "Printer Setup",
      description: "Wireless printing and troubleshooting"
    },
    {
      icon: Camera,
      title: "Photo & Data Backup",
      description: "Secure cloud storage and organization"
    },
    {
      icon: GraduationCap,
      title: "1-on-1 Coaching",
      description: "Personalized technology learning sessions"
    },
    {
      icon: Users,
      title: "Group Visits",
      description: "Retirement home and community sessions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tech Support Services - EasyTech Durham</title>
        <meta name="description" content="Comprehensive tech support services including smartphone help, Wi-Fi setup, device cleanup, and scam recovery for Durham Region residents." />
      </Helmet>

      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-bold text-5xl text-primary mb-6">Our Services</h1>
            <p className="text-2xl text-gray-600 mb-8">Perfect for beginners, seniors, or anyone needing a tech refresh</p>
          </div>

          {/* Service Selection */}
          <ServiceSelection />

          {/* What's Included Section */}
          <div className="mt-20 bg-sand rounded-2xl p-12">
            <h2 className="font-bold text-3xl text-primary mb-12 text-center">What's Included in Every Visit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">Patient Explanation</h3>
                <p className="text-gray-600">We take time to explain everything clearly</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">Hands-On Learning</h3>
                <p className="text-gray-600">Practice together until you're comfortable</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">Written Notes</h3>
                <p className="text-gray-600">Simple instructions you can reference later</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">Follow-Up Support</h3>
                <p className="text-gray-600">Email or call if you have questions later</p>
              </div>
            </div>
          </div>

          {/* Detailed Service Descriptions */}
          <div className="mt-20">
            <h2 className="font-bold text-3xl text-primary mb-12 text-center">Detailed Service Information</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {coreServices.map((service, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl text-primary mb-4">{service.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <ul className="text-gray-600 space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
