import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, LucideIcon } from "lucide-react";

interface PricingCardProps {
  icon: LucideIcon;
  title: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "secondary" | "outline";
  className?: string;
  featured?: boolean;
}

export default function PricingCard({
  icon: Icon,
  title,
  price,
  period,
  features,
  buttonText,
  buttonVariant = "default",
  className = "",
  featured = false
}: PricingCardProps) {
  return (
    <Card className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
      featured ? "border-2 border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5" : ""
    } ${className}`}>
      <CardContent className="p-8 text-center">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
          featured ? "bg-accent/10" : "bg-primary/10"
        }`}>
          <Icon className={`w-8 h-8 ${featured ? "text-accent" : "text-primary"}`} />
        </div>
        <h3 className="font-bold text-2xl text-primary mb-4">{title}</h3>
        <div className="text-5xl font-bold text-primary mb-4">{price}</div>
        <p className="text-gray-600 mb-6">{period}</p>
        <ul className="text-left text-gray-600 space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full font-semibold transition-colors duration-300 ${
            buttonVariant === "default" 
              ? "bg-primary hover:bg-primary-light text-white"
              : buttonVariant === "secondary"
              ? "bg-accent hover:bg-teal-600 text-white"
              : "bg-primary hover:bg-primary-light text-white"
          }`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
