export function Footer() {
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
    <footer className="w-full border-t bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Carolina Craft Sites</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professional websites built specifically for tradespeople who want to grow their business online.
            </p>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <div>10+ years in business</div>
              <div>500+ websites delivered</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-website-design"
                >
                  Website Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-seo"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-hosting"
                >
                  Hosting Setup
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-support"
                >
                  Ongoing Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleLinkClick(e, "portfolio")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleLinkClick(e, "pricing")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Carolina Craft Sites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
