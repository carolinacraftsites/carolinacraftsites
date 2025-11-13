import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import plumberImg from "@assets/generated_images/Plumber_website_mockup_laptop_3d55b33f.png";
import electricianImg from "@assets/generated_images/Electrician_website_mockup_tablet_cef3f2a9.png";
import carpenterImg from "@assets/generated_images/Carpenter_website_mockup_phone_b834b1b6.png";
import hvacImg from "@assets/generated_images/HVAC_website_mockup_desktop_f9ff2725.png";
import landscapingImg from "@assets/generated_images/Landscaping_website_mockup_laptop_8bef05d9.png";
import roofingImg from "@assets/generated_images/Roofing_website_mockup_desktop_b6069c44.png";

export function Portfolio() {
  const portfolioItems = [
    {
      image: plumberImg,
      category: "Service Business",
      title: "Emergency Service Provider",
      description: "Modern website with online booking and service area map"
    },
    {
      image: electricianImg,
      category: "Professional Services",
      title: "Licensed Contractor",
      description: "Professional site highlighting certifications and expertise"
    },
    {
      image: carpenterImg,
      category: "Creative Business",
      title: "Custom Design & Remodeling",
      description: "Portfolio-focused design showcasing craftsmanship"
    },
    {
      image: hvacImg,
      category: "Service Business",
      title: "Technical Service Experts",
      description: "Service-focused site with seasonal promotions"
    },
    {
      image: landscapingImg,
      category: "Design Services",
      title: "Premium Design & Installation",
      description: "Visual gallery with before/after transformations"
    },
    {
      image: roofingImg,
      category: "Commercial Services",
      title: "Residential & Commercial Solutions",
      description: "Trust-building site with warranty information"
    }
  ];

  return (
    <section id="portfolio" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we help businesses establish a professional online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
              data-testid={`card-portfolio-${index}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3" data-testid={`badge-category-${index}`}>
                  {item.category}
                </Badge>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
