'use client';

import { ChevronRight, Home, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  const handleRequestConsultation = () => {
    // Scroll to contact form or open contact modal
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+1-555-GREEN-THUMB';
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
            <span className="text-foreground font-medium">Contact Us</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Get Your Free Landscaping Consultation
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your outdoor space into a sustainable paradise? Our certified
                arborists and landscaping experts are here to help. Contact GreenThumb Landscapes
                today for your personalized consultation.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleCallNow}>
                <Phone className="size-4" />
                Call Now
              </Button>
              <Button className="gap-2" onClick={handleRequestConsultation}>
                <Mail className="size-4" />
                Request Free Consultation
              </Button>
            </div>
          </div>

          {/* Contact Info & Stats */}
          <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Service Areas:</span> 25+ Mile
                Radius
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Response Time:</span> Within 24
                Hours
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">500+</span> Properties Maintained
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">15+</span> Years Experience
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">100%</span> Eco-Friendly Methods
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
