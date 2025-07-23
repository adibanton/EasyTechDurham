import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features,
  className = ""
}: ServiceCardProps) {
  return (
    <Card className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group ${className}`}>
      <CardContent className="p-8 text-center">
        <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="font-bold text-xl text-primary mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        {features && (
          <ul className="text-gray-600 space-y-2 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
