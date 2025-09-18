'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Leaf,
  TreePine,
  Scissors,
  Calendar,
  Droplets,
  Sun,
  Shield,
  Users,
  Award,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: '100% Organic Methods',
      description:
        'Eco-friendly lawn care using only organic fertilizers and natural pest control solutions for a healthier environment.',
      badge: 'Eco-Friendly',
    },
    {
      icon: TreePine,
      title: 'Expert Tree Care',
      description:
        'Certified arborists provide professional tree trimming, pruning, and health assessments to keep your trees thriving.',
      badge: 'Certified',
    },
    {
      icon: Scissors,
      title: 'Precision Lawn Care',
      description:
        'Weekly mowing, edging, and trimming services that keep your lawn looking pristine year-round.',
      badge: 'Maintenance',
    },
    {
      icon: Calendar,
      title: 'Seasonal Maintenance',
      description:
        'Comprehensive seasonal care including spring cleanup, fall leaf removal, and winter preparation services.',
      badge: 'Year-Round',
    },
    {
      icon: Droplets,
      title: 'Smart Irrigation',
      description:
        'Water-efficient irrigation systems and maintenance to keep your landscape healthy while conserving resources.',
      badge: 'Water-Smart',
    },
    {
      icon: Sun,
      title: 'Garden Design',
      description:
        'Custom landscape design services creating beautiful, sustainable outdoor spaces tailored to your property.',
      badge: 'Design',
    },
    {
      icon: Shield,
      title: 'Plant Health Care',
      description:
        'Comprehensive plant disease prevention and treatment using environmentally safe methods and products.',
      badge: 'Health',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description:
        'Experienced landscaping professionals committed to transforming your outdoor space with expert care.',
      badge: 'Professional',
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description:
        'Over 500 properties maintained with proven expertise in sustainable landscaping and eco-friendly practices.',
      badge: 'Trusted',
    },
  ];

  const handleConsultation = () => {
    window.location.href = '/contact';
  };

  const handleServices = () => {
    window.location.href = '/services';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Outdoor Space Into a
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Sustainable Paradise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional landscaping services using 100% eco-friendly methods to create beautiful,
            sustainable outdoor environments for your home or business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 p-8 bg-card rounded-2xl border border-border/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Properties Maintained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Eco-Friendly Methods</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$99</div>
            <div className="text-sm text-muted-foreground">Starting Monthly</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sun className="size-4" />
            Spring Special: 20% Off First Month
          </div>
          <p className="text-muted-foreground mb-6">
            Ready to create your sustainable outdoor paradise?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleConsultation}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Request Free Consultation
            </button>
            <button
              onClick={handleServices}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
