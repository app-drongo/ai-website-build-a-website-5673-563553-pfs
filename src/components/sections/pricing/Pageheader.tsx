'use client';

import { ChevronRight, Home, Leaf, Calculator, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  const handleGetQuote = () => {
    window.location.href = '/contact?service=pricing-quote';
  };

  const handleRequestConsultation = () => {
    window.location.href = '/contact?type=consultation';
  };

  return (
    <section className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href="/"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Home className="size-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-4" />
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Pricing Plans</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Sustainable Landscaping Pricing Plans
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose from our eco-friendly landscaping packages designed to transform your outdoor
                space. All plans include 100% organic methods and expert care from certified
                arborists.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleGetQuote}>
                <Calculator className="size-4" />
                Get Custom Quote
              </Button>
              <Button className="gap-2" onClick={handleRequestConsultation}>
                <Phone className="size-4" />
                Request Free Consultation
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">3</span> Service Plans Available
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">$99-$199</span> monthly plans
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">100%</span> Eco-friendly methods
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">15+</span> Years experience
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Leaf className="size-3 text-primary" />
              <span className="font-semibold text-foreground">500+</span> Properties maintained
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
