import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Palette, Rocket } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We start by understanding your business, your customers, and your goals. Quick 30-minute call to gather what we need."
    },
    {
      icon: Palette,
      title: "Design & Build",
      description: "Our team creates a custom website tailored to your business. Professional design that showcases your services and builds trust."
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We handle everything from domain setup to going live. Plus, we provide ongoing support to keep your site running smoothly."
    }
  ];

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Simple Process, Professional Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your website is easy. We handle all the technical details so you can focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} data-testid={`card-service-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
