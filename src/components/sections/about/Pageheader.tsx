'use client';

import { ChevronRight, Home, Leaf, TreePine, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  const handleConsultation = () => {
    window.location.href = '/contact?service=consultation&source=about-header';
  };

  const handleExploreServices = () => {
    window.location.href = '/services';
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
            <span className="text-foreground font-medium">About Us</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Transforming Outdoor Spaces Into Sustainable Paradises
              </h1>
              <p className="text-lg text-muted-foreground">
                Since 2008, GreenThumb Landscapes has been Miami's premier eco-friendly landscaping
                company. Founded by master arborist Michael Thompson, we've maintained 500+
                properties using 100% organic methods.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleExploreServices}>
                <TreePine className="size-4" />
                Explore Our Services
              </Button>
              <Button className="gap-2" onClick={handleConsultation}>
                <Leaf className="size-4" />
                Request Free Consultation
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-muted">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">15+</span> Years Experience
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">500+</span> Properties Maintained
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">100%</span> Eco-Friendly Methods
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <Award className="size-3" />
              <span className="font-semibold text-foreground">Certified</span> Arborists
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
