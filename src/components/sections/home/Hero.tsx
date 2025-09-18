// components/hero/SplitHero.tsx
'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Leaf, TreePine, Scissors, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/contact');
  };

  const handleSecondaryAction = () => {
    router.push('/services');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Natural gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Spring Special Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <Leaf className="h-3 w-3" />
              Spring Special: 20% Off First Month
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transform Your Outdoor Space Into a
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Sustainable Paradise
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Professional landscaping services with 100% eco-friendly methods. From organic lawn
              care to expert tree services, we create beautiful outdoor spaces that respect nature.
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                { icon: Leaf, text: '100% Organic Methods' },
                { icon: TreePine, text: 'Certified Arborists' },
                { icon: Scissors, text: 'Professional Lawn Care' },
                { icon: Calendar, text: 'Year-Round Maintenance' },
              ].map(item => (
                <li key={item.text} className="flex items-center gap-2">
                  <item.icon className="size-4 text-primary" />
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Key Statistics */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
              <div className="rounded-lg bg-card/50 p-3">
                <div className="text-lg font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">Properties Maintained</div>
              </div>
              <div className="rounded-lg bg-card/50 p-3">
                <div className="text-lg font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="rounded-lg bg-card/50 p-3">
                <div className="text-lg font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Eco-Friendly</div>
              </div>
              <div className="rounded-lg bg-card/50 p-3">
                <div className="text-lg font-bold text-primary">$99</div>
                <div className="text-xs text-muted-foreground">Starting Price</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group px-7 text-base"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Request Free Consultation
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <TreePine className="mr-2 size-5" /> Explore Our Services
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Landscape showcase container */}
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop"
                  alt="Beautiful sustainable landscape design by GreenThumb Landscapes"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Eco-friendly badge overlay */}
              <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium shadow flex items-center gap-1">
                <Leaf className="h-3 w-3 text-primary" />
                100% Organic
              </div>
            </div>

            {/* Floating service highlights */}
            <div className="absolute -right-6 -top-6 hidden w-40 rounded-xl border bg-background/95 p-3 shadow-xl sm:block">
              <div className="flex items-center gap-2 mb-1">
                <TreePine className="h-4 w-4 text-primary" />
                <p className="text-xs text-muted-foreground">Expert Tree Care</p>
              </div>
              <p className="text-sm font-semibold">Certified Arborists</p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-40 rounded-xl border bg-background/95 p-3 shadow-xl sm:block">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-4 w-4 text-primary" />
                <p className="text-xs text-muted-foreground">Maintenance Plans</p>
              </div>
              <p className="text-sm font-semibold">Starting at $99/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
