import { Link, useLocation } from "wouter";
import { Menu, X, Shield, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/stress-cards", label: "Stress Cards" },
    { href: "/stress-management", label: "Methodology" },
    { href: "/stress-test", label: "Stress Test" },
    { href: "/blog", label: "Blog" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-primary">
              <Shield className="h-6 w-6 fill-primary/20" />
              Menhausen
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="default" size="sm" className="rounded-full px-6 shadow-lg shadow-primary/20" asChild>
              <a href="tg://resolve?domain=ImFineBot&start=miniapp" target="_blank" rel="noopener noreferrer">
                Open in Telegram
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className="text-lg font-medium py-2 border-b border-border/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-4 w-full" asChild>
                    <a href="tg://resolve?domain=ImFineBot&start=miniapp" target="_blank" rel="noopener noreferrer">
                      Open App in Telegram
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12 text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-white mb-4">
                <Shield className="h-8 w-8 fill-white/20" />
                Menhausen
              </Link>
              <p className="text-secondary-foreground/70 max-w-md leading-relaxed">
                Anonymous stress management for men. Practical tools, scientific methods (CBT, ACT), and privacy-first design. No registration required.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><Link href="/stress-cards" className="hover:text-white transition-colors">Stress Cards</Link></li>
                <li><Link href="/stress-management" className="hover:text-white transition-colors">Methodology</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="tg://resolve?domain=ImFineBot&start=miniapp" className="hover:text-white transition-colors">Telegram Bot</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-sm text-secondary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Menhausen. All rights reserved. Not a medical service.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
