import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Hero_devices_showcase_background_559f321a.png";

export function Hero() {

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional Websites for Your Business
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Get your business online in days, not weeks. Custom websites built for small businesses and professionals who want to grow their online presence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="default"
                data-testid="button-hero-cta"
              >
                Get Your Website Today
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-white/20 text-white hover:bg-background/20"
              onClick={() => {
                const element = document.getElementById("portfolio");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-hero-portfolio"
            >
              View Our Work
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Starting at $499 • No monthly fees • Quick turnaround
          </p>
        </div>
      </div>
    </section>
  );
}
