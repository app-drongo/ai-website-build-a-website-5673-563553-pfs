'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Leaf, TreePine, Scissors, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/contact');
  };
  const handleSecondaryAction = () => {
    router.push('/services');
  };
  const handleScheduleDemo = () => {
    router.push('/contact');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Basic Care',
      description: 'Essential maintenance for residential properties',
      price: '$99',
      period: '/month',
      badge: null,
      icon: <Leaf className="size-6 text-primary" />,
      features: [
        'Bi-weekly lawn mowing',
        'Basic weed control',
        'Seasonal cleanup (2x/year)',
        'Organic fertilizer application',
        'Email maintenance reports',
      ],
      cta: 'Request Free Consultation',
      popular: false,
    },
    {
      name: 'Premium Landscape',
      description: 'Complete care for beautiful, sustainable gardens',
      price: '$199',
      period: '/month',
      badge: 'Most Popular',
      icon: <TreePine className="size-6 text-primary" />,
      features: [
        'Weekly lawn maintenance',
        'Professional tree trimming',
        'Garden design consultation',
        '100% eco-friendly methods',
        'Seasonal plant installation',
        'Irrigation system check',
        'Priority customer support',
        'Monthly progress photos',
      ],
      cta: 'Request Free Consultation',
      popular: true,
    },
    {
      name: 'Enterprise Estate',
      description: 'Custom solutions for large properties and businesses',
      price: 'Custom',
      period: '',
      badge: 'Contact Us',
      icon: <Scissors className="size-6 text-primary" />,
      features: [
        'Everything in Premium Landscape',
        'Certified arborist consultations',
        'Custom landscape architecture',
        'Commercial property maintenance',
        '24/7 emergency tree service',
        'Dedicated account manager',
        'Quarterly sustainability reports',
        'Multi-property management',
      ],
      cta: 'Request Free Consultation',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            <Calendar className="size-3 mr-2" />
            Year-Round Care Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Sustainable Landscaping
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Made Affordable
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Transform your outdoor space with our eco-friendly maintenance plans. 15+ years of
            experience, 100% organic methods, serving 500+ properties.
          </p>

          {/* Spring Special Banner */}
          <div className="inline-flex items-center p-1 bg-primary/10 rounded-lg border border-primary/20">
            <div className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md shadow-sm">
              <Leaf className="size-3 mr-2 inline" />
              Spring Special: 20% Off First Month
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit bg-primary/10 text-primary border-primary/20"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <div className="mb-4 flex justify-center">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {plan.icon}
                  </div>
                </div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={handlePrimaryAction}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Leaf className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Premium Landscape' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Free property assessment • No long-term contracts
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
              <TreePine className="size-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Need a Custom Landscape Solution?</h3>
          <p className="text-muted-foreground mb-6">
            Our certified arborists and landscape designers create tailored maintenance plans for
            commercial properties, HOAs, and large estates. 100% eco-friendly methods guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleScheduleDemo}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Calendar className="size-4 mr-2" />
              Schedule Property Assessment
            </Button>
            <Button onClick={handleSecondaryAction} variant="outline" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Properties Maintained</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Eco-Friendly Methods</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Months Seasonal Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
