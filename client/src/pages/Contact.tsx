import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to take your business online? Reach out to us and we'll get started.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <a
                        href="tel:+18283358117"
                        className="text-xl text-primary hover:underline"
                      >
                        (828) 335-8117
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Friday, 9am - 5pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <a
                        href="mailto:wncnathan@gmail.com"
                        className="text-xl text-primary hover:underline"
                      >
                        wncnathan@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ 10+ years of experience</li>
                    <li>✓ Average 3-day turnaround</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
