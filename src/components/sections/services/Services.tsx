'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Leaf,
  TreePine,
  Scissors,
  Calendar,
  Sprout,
  Flower2,
  Shield,
  Users,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'lawn-care',
      title: 'Professional Lawn Care',
      description: 'Organic lawn maintenance for lush, healthy grass year-round',
      longDescription:
        'Our comprehensive lawn care service uses 100% organic methods to create and maintain beautiful, healthy lawns. From soil analysis to seasonal treatments, we ensure your grass thrives naturally without harmful chemicals.',
      icon: Leaf,
      benefits: [
        '100% organic fertilization programs',
        'Weed control using eco-friendly methods',
        'Soil health assessment and improvement',
        'Seasonal lawn renovation services',
      ],
      pricing: 'Starting at $99/month',
      timeline: 'Year-round service',
      featured: true,
      badge: 'Most Popular',
    },
    {
      id: 'garden-design',
      title: 'Sustainable Garden Design',
      description: 'Custom landscape design focused on native plants and sustainability',
      longDescription:
        'Transform your outdoor space with our expert garden design services. We specialize in creating beautiful, sustainable landscapes using native plants that thrive in your local climate while supporting local wildlife.',
      icon: Flower2,
      benefits: [
        'Native plant selection and placement',
        'Water-efficient irrigation design',
        'Seasonal color planning',
        'Pollinator-friendly garden layouts',
      ],
      pricing: 'Starting at $199/month',
      timeline: '2-4 weeks design phase',
    },
    {
      id: 'tree-care',
      title: 'Expert Tree Care & Trimming',
      description: 'Certified arborist services for healthy, beautiful trees',
      longDescription:
        'Our certified arborists provide comprehensive tree care services to keep your trees healthy, safe, and beautiful. From pruning to disease management, we ensure your trees thrive for generations.',
      icon: TreePine,
      benefits: [
        'Certified arborist consultations',
        'Professional pruning and trimming',
        'Tree health assessments',
        'Emergency tree removal services',
      ],
      pricing: 'Custom quotes available',
      timeline: 'Same-day emergency service',
      badge: 'Certified Arborists',
    },
    {
      id: 'seasonal-maintenance',
      title: 'Year-Round Seasonal Care',
      description: 'Complete seasonal maintenance to keep your landscape pristine',
      longDescription:
        'Our seasonal maintenance program ensures your landscape looks its best throughout the year. From spring cleanup to winter protection, we handle all the seasonal tasks to maintain your outdoor paradise.',
      icon: Calendar,
      benefits: [
        'Spring cleanup and preparation',
        'Summer maintenance and watering',
        'Fall leaf removal and winterization',
        'Year-round plant health monitoring',
      ],
      pricing: 'Starting at $99/month',
      timeline: 'Ongoing seasonal schedule',
      badge: 'Essential',
    },
  ];

  const handleGetStarted = (serviceId: string) => {
    window.location.href = `/contact?service=${serviceId}`;
  };

  const handleScheduleConsultation = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Eco-Friendly Landscaping Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Outdoor Space Into a
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Sustainable Paradise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional landscaping services using 100% organic methods to create beautiful,
            sustainable outdoor spaces that benefit both your property and the environment.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl
                  ${
                    service.featured
                      ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8'
                      : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${
                          service.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                        {service.badge && (
                          <Badge variant={service.featured ? 'default' : 'secondary'}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-primary text-primary" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">{service.description}</p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">{service.longDescription}</p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold text-primary">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Service:</span>
                            <span className="text-sm font-semibold">{service.timeline}</span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={service.featured ? 'default' : 'outline'}
                          className="group/btn"
                          onClick={() => handleGetStarted(service.id)}
                        >
                          Request Free Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
          <div className="flex justify-center mb-4">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="size-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Need a Custom Landscaping Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            With 15+ years of experience maintaining 500+ properties, we create tailored
            eco-friendly landscaping solutions for your unique outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleScheduleConsultation}>
              Schedule Free Consultation
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = '/services')}
            >
              Explore Our Services
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Shield className="size-4" />
              100% Eco-Friendly Methods
            </span>
            <span className="flex items-center gap-1">
              <TreePine className="size-4" />
              Certified Arborists
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="size-4" />
              Year-Round Care
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
