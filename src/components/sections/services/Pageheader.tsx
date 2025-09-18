'use client';

import { ChevronRight, Home, Leaf, TreePine, Scissors, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  const handleRequestConsultation = () => {
    window.location.href = '/contact?service=all';
  };

  const handleViewPricing = () => {
    window.location.href = '/services#pricing';
  };

  return (
    <section className="bg-background border-b border-muted">
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
            <span className="text-foreground font-medium">Our Services</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Transform Your Outdoor Space Into a Sustainable Paradise
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover our comprehensive eco-friendly landscaping services. From professional lawn
                care to expert tree trimming, we maintain 500+ properties using 100% organic methods
                with 15+ years of trusted experience.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleViewPricing}>
                <Calendar className="size-4" />
                View Pricing
              </Button>
              <Button
                className="gap-2 bg-primary hover:bg-primary/90"
                onClick={handleRequestConsultation}
              >
                <Leaf className="size-4" />
                Request Free Consultation
              </Button>
            </div>
          </div>

          {/* Service Categories */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-muted">
            <div className="flex items-center gap-2">
              <Leaf className="size-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Professional Lawn Care</span> from
                $99/month
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TreePine className="size-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Expert Tree Care</span> by certified
                arborists
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Scissors className="size-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Garden Design</span> sustainable
                solutions
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Year-Round Care</span> seasonal
                maintenance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
