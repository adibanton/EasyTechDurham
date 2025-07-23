import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, 
  Check, 
  Phone, 
  Mail, 
  Shield, 
  Heart, 
  Star,
  Calendar,
  ExternalLink
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      contactMutation.mutate(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - EasyTech Durham</title>
        <meta name="description" content="Get in touch with EasyTech Durham for friendly tech support. Call, email, or book online for personalized tech help across Durham Region." />
      </Helmet>

      <section className="py-20 bg-sand min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-bold text-5xl text-primary mb-6">Get In Touch</h1>
            <p className="text-2xl text-gray-600">Ready to make tech simple? Let's chat!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-bold text-3xl text-primary mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="text-lg py-4 border-2 focus:border-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="text-lg py-4 border-2 focus:border-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(416) 555-0123"
                      value={formData.phone}
                      onChange={handleChange}
                      className="text-lg py-4 border-2 focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      How Can We Help?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your tech challenge or what you'd like help with..."
                      value={formData.message}
                      onChange={handleChange}
                      className="text-lg py-4 border-2 focus:border-accent resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-contrast hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    {contactMutation.isPending ? (
                      <>Processing...</>
                    ) : contactMutation.isSuccess ? (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Trust Signals */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl text-primary mb-6">Prefer to Call or Email?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary">Call Us</h4>
                        <p className="text-xl text-gray-600 font-medium">(905) 555-EASY</p>
                        <p className="text-sm text-gray-500">Mon-Sat 9am-6pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary">Email Us</h4>
                        <p className="text-xl text-gray-600 font-medium">hello@easytechdurham.ca</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Signal */}
              <Card className="bg-primary text-white shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                      alt="Friendly tech support professional" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Secure Booking</h3>
                  <p className="text-white/90 mb-6">
                    Your information is safe with us. We're a trusted local business serving Durham families.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-white/80">
                    <div className="flex items-center">
                      <Shield className="mr-2 h-5 w-5" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="mr-2 h-5 w-5" />
                      <span>Local</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-2 h-5 w-5" />
                      <span>Trusted</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Optional Booking Tool */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl text-primary mb-6">Book Online</h3>
                  <p className="text-gray-600 mb-6">
                    Schedule your visit directly using our online booking system.
                  </p>
                  
                  {/* Placeholder for Calendly/TidyCal embed */}
                  <div className="bg-gray-100 rounded-xl p-8 text-center border-2 border-dashed border-gray-300">
                    <Calendar className="w-16 h-16 text-gray-400 mb-4 mx-auto" />
                    <p className="text-gray-500 mb-4">Online booking calendar would appear here</p>
                    <Button className="bg-accent hover:bg-teal-600 text-white px-6 py-3 font-semibold">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Open Booking Calendar
                    </Button>
                    {/* TODO: Integrate Calendly or TidyCal booking widget */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
