import { useState } from "react";
import { Helmet } from "react-helmet";
import PricingCard from "@/components/pricing-card";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Shield, 
  Wrench, 
  GraduationCap, 
  Users, 
  Star,
  ChevronDown,
  MapPin,
  Check
} from "lucide-react";

export default function Pricing() {
  const [showTravelFees, setShowTravelFees] = useState(false);

  const servicePricing = [
    {
      icon: Settings,
      title: "Core Services",
      price: "$109",
      period: "Per visit", 
      features: [
        "Smartphone Help",
        "Wi-Fi / TV Setup",
        "Tech Cleanup Visit"
      ],
      buttonText: "Book Core Service"
    },
    {
      icon: Shield,
      title: "Scam Recovery",
      price: "$149",
      period: "Starting price",
      features: [
        "Malware removal",
        "Account security",
        "Banking assistance"
      ],
      buttonText: "Get Scam Help",
      buttonVariant: "secondary" as const,
      featured: true
    },
    {
      icon: Wrench,
      title: "Other Services", 
      price: "$89-109",
      period: "Per visit",
      features: [
        "Password setup",
        "Smart home devices",
        "Printer setup"
      ],
      buttonText: "Book Other Service"
    }
  ];

  const specializedServices = [
    {
      icon: GraduationCap,
      title: "1-on-1 Coaching",
      price: "$99",
      period: "/hour",
      description: "Personalized technology learning",
      buttonText: "Book Coaching"
    },
    {
      icon: Users,
      title: "Group Visits",
      price: "$149",
      period: "+",
      description: "Retirement homes & communities", 
      buttonText: "Book Group Visit"
    }
  ];

  const travelFees = [
    {
      title: "FREE",
      subtitle: "No travel fees",
      locations: ["Pickering", "Ajax", "Whitby"],
      color: "green"
    },
    {
      title: "+$20",
      subtitle: "Extended Durham",
      locations: ["Oshawa", "Courtice", "Bowmanville", "Brooklin"],
      color: "yellow"
    },
    {
      title: "+$40", 
      subtitle: "Outside Durham",
      locations: ["Lindsay", "Port Perry", "Newcastle", "Other areas"],
      color: "blue"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Transparent Pricing - EasyTech Durham</title>
        <meta name="description" content="Clear, fair rates for tech support services across Durham Region. No hidden fees, transparent pricing for all services." />
      </Helmet>

      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-bold text-5xl text-primary mb-6">Transparent Pricing</h1>
            <p className="text-2xl text-gray-600">Clear, fair rates with no hidden fees</p>
          </div>

          {/* Promo Banner */}
          <div className="bg-contrast rounded-2xl p-8 text-center mb-16 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-10 h-10 text-white mr-3" />
              <h2 className="font-bold text-3xl text-white">💡 First Visit Special</h2>
              <Star className="w-10 h-10 text-white ml-3" />
            </div>
            <p className="text-2xl text-white font-semibold mb-4">
              Just $99 for your first visit - Limited Time!
            </p>
            <p className="text-white/90 text-lg mb-4">
              Save $10+ on any core service with this introductory offer
            </p>
            <Button className="bg-white text-contrast hover:bg-gray-100 px-8 py-3 text-lg font-bold transition-all duration-300 transform hover:scale-105">
              Claim Your Special
            </Button>
          </div>

          {/* Service Rates */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicePricing.map((service, index) => (
              <PricingCard
                key={index}
                icon={service.icon}
                title={service.title}
                price={service.price}
                period={service.period}
                features={service.features}
                buttonText={service.buttonText}
                buttonVariant={service.buttonVariant}
                featured={service.featured}
              />
            ))}
          </div>

          {/* Specialized Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <service.icon className="w-16 h-16 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-2xl text-primary mb-4">{service.title}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {service.price}
                    <span className="text-xl font-normal text-gray-600">{service.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button className="bg-primary hover:bg-primary-light text-white px-8 py-3 font-semibold">
                    {service.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Travel Fees Section */}
          <div className="bg-sand rounded-2xl p-8 shadow-lg">
            <div 
              className="flex items-center justify-between mb-6 cursor-pointer"
              onClick={() => setShowTravelFees(!showTravelFees)}
            >
              <h3 className="font-bold text-2xl text-primary">Travel Fees</h3>
              <ChevronDown 
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  showTravelFees ? "rotate-180" : ""
                }`} 
              />
            </div>
            
            {showTravelFees && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {travelFees.map((fee, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        fee.color === "green" ? "bg-green-100" :
                        fee.color === "yellow" ? "bg-yellow-100" : "bg-blue-100"
                      }`}>
                        {fee.color === "green" ? (
                          <Check className={`w-8 h-8 text-green-600`} />
                        ) : (
                          <span className={`text-2xl font-bold ${
                            fee.color === "yellow" ? "text-yellow-600" : "text-blue-600"
                          }`}>
                            {fee.title}
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-xl text-primary mb-2">{fee.title}</h4>
                      <p className="text-gray-600 font-medium mb-2">{fee.subtitle}</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {fee.locations.map((location, locationIndex) => (
                          <li key={locationIndex}>{location}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                {/* Simple visual map representation */}
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <h4 className="font-bold text-lg text-primary mb-4">Service Area Map</h4>
                  <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-lg mb-2 inline-block">
                        <MapPin className="inline mr-2 h-5 w-5" />
                        Durham Region Core (FREE)
                      </div>
                      <p className="text-gray-600">Pickering • Ajax • Whitby</p>
                      <div className="mt-4 text-sm text-gray-500">
                        Extended areas +$20 • Outside Durham +$40
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
