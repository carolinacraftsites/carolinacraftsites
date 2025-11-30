import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import angellandscapingImg from "@assets/generated_images/angellandscaping.png";
import extremeapImg from "@assets/generated_images/extremeap.png";
import fatcatsImg from "@assets/generated_images/fatcats.png";

export function Portfolio() {
  const portfolioItems = [
    {
      image: angellandscapingImg,
      category: "Service Business",
      title: "Lawn & Property Care",
      description: "Modern website with extensive service offerings display",
      link: "https://carolinacraftsites.com/AngelLandscaping",
    },
    {
      image: extremeapImg,
      category: "Professional Services",
      title: "Professional Engraving Services",
      description: "Professional site highlighting reliability and expertise",
      link: "https://carolinacraftsites.com/extremeap",
    },
    {
      image: fatcatsImg,
      category: "Hospitality Business",
      title: "Local Pool Hall",
      description: "Vibrant online presence for games, drinks, and good times",
      link: "https://fats-cat-billiards.vercel.app/",
    },
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
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full"
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
                  <Badge
                    className="mb-3"
                    data-testid={`badge-category-${index}`}
                  >
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
