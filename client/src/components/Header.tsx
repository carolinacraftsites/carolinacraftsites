import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";

export function Header() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // Allow default behavior for Cmd+Click (Mac) or Ctrl+Click (Windows) to open in new tab
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // Otherwise, smooth scroll to section
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Carolina Craft Sites</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, "services")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-services"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleLinkClick(e, "portfolio")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-portfolio"
          >
            Portfolio
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, "pricing")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-pricing"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-contact"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            className="hidden md:flex"
            asChild
            data-testid="button-get-started"
          >
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              Get Started
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-testid="button-menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
