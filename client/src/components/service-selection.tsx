import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";

interface ServiceOption {
  id: string;
  icon: any;
  title: string;
  description: string;
  price: string;
}

const coreServices: ServiceOption[] = [
  {
    id: "smartphone",
    icon: Smartphone,
    title: "Smartphone Help",
    description: "Setup, apps, messaging, camera use",
    price: "$109"
  },
  {
    id: "wifi-tv",
    icon: Wifi,
    title: "Wi-Fi / TV Setup", 
    description: "Fix buffering, streaming apps, remotes",
    price: "$109"
  },
  {
    id: "cleanup",
    icon: Fan,
    title: "Tech Cleanup",
    description: "Speed up devices, secure passwords",
    price: "$109"
  },
  {
    id: "scam-recovery",
    icon: Shield,
    title: "Scam Recovery",
    description: "Remove malware, secure accounts",
    price: "$149+"
  }
];

const additionalServices: ServiceOption[] = [
  {
    id: "password",
    icon: Key,
    title: "Password Manager",
    description: "Secure password organization",
    price: "$89"
  },
  {
    id: "smart-home",
    icon: Home,
    title: "Smart Home Setup",
    description: "Voice assistants, smart devices",
    price: "$99"
  },
  {
    id: "printer",
    icon: Printer,
    title: "Printer Setup",
    description: "Wireless printing setup",
    price: "$89"
  },
  {
    id: "backup",
    icon: Camera,
    title: "Photo & Data Backup",
    description: "Cloud storage, organization",
    price: "$99"
  },
  {
    id: "coaching",
    icon: GraduationCap,
    title: "1-on-1 Coaching",
    description: "Personal technology learning",
    price: "$99/hr"
  },
  {
    id: "group",
    icon: Users,
    title: "Group Visits",
    description: "Retirement homes, communities",
    price: "$149+"
  }
];

export default function ServiceSelection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl text-primary mb-4">Find Your Support Options</h2>
        <p className="text-xl text-gray-600">Choose the service that best fits your needs</p>
      </div>

      {/* Core Services */}
      <div className="mb-16">
        <h3 className="font-bold text-2xl text-primary mb-8 text-center">Core Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-accent/30">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary-light text-white font-semibold text-sm">
                    Select Service
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-sand rounded-2xl p-8">
        <h3 className="font-bold text-2xl text-primary mb-8 text-center">Additional Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-primary mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <div className="text-lg font-bold text-primary mb-3">{service.price}</div>
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm">
                    Book Service
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-contrast/10 rounded-2xl p-8 border-2 border-contrast/20">
          <h3 className="font-bold text-2xl text-primary mb-4">Not Sure Which Service You Need?</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Contact us for a free consultation. We'll help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-contrast hover:bg-yellow-500 text-white px-8 py-3 text-lg font-semibold">
                Get Free Consultation
              </Button>
            </Link>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold">
              Call (905) 555-EASY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}