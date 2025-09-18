'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Leaf,
  TreePine,
  Award,
  Scissors,
  ArrowRight,
  Quote,
  Star,
  Calendar,
  Heart,
  Shield,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: '100% Eco-Friendly',
      description:
        "We're committed to sustainable landscaping practices using only organic methods and eco-conscious materials that protect your family and the environment.",
    },
    {
      icon: Shield,
      title: 'Expert Craftsmanship',
      description:
        'Our certified arborists and landscape professionals bring 15+ years of experience to every project, ensuring exceptional results.',
    },
    {
      icon: Heart,
      title: 'Customer Focused',
      description:
        'Your outdoor paradise is our passion. We work closely with each client to create personalized landscaping solutions that exceed expectations.',
    },
    {
      icon: TreePine,
      title: 'Year-Round Care',
      description:
        'From spring plantings to winter preparations, we provide comprehensive seasonal maintenance to keep your landscape thriving all year long.',
    },
  ];

  const stats = [
    { value: '2008', label: 'Established', icon: Award },
    { value: '500+', label: 'Properties Maintained', icon: TreePine },
    { value: '100%', label: 'Organic Methods', icon: Leaf },
    { value: '15+', label: 'Years Experience', icon: Calendar },
  ];

  const team = [
    {
      name: 'Michael Thompson',
      role: 'Founder & Master Arborist',
      image: 'MT',
      bio: 'Certified arborist with 20+ years experience. Passionate about sustainable landscaping practices.',
    },
    {
      name: 'Sarah Martinez',
      role: 'Garden Design Specialist',
      image: 'SM',
      bio: 'Award-winning landscape designer specializing in native plant gardens and eco-friendly designs.',
    },
    {
      name: 'David Chen',
      role: 'Lawn Care Manager',
      image: 'DC',
      bio: 'Expert in organic lawn care methods and seasonal maintenance programs.',
    },
    {
      name: 'Lisa Johnson',
      role: 'Tree Care Specialist',
      image: 'LJ',
      bio: 'Certified arborist focused on tree health, pruning, and disease prevention.',
    },
  ];

  const handleConsultation = () => {
    window.location.href = '/contact?service=consultation';
  };

  const handleServices = () => {
    window.location.href = '/services';
  };

  const handleStory = () => {
    window.location.href = '/about/story';
  };

  const handleTeam = () => {
    window.location.href = '/about/team';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            About GreenThumb Landscapes
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Outdoor Spaces Into
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Sustainable Paradises
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over 15 years, we've been dedicated to creating beautiful, eco-friendly landscapes
            that enhance your property while protecting our environment through 100% organic
            methods.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2008 by master arborist Michael Thompson, GreenThumb Landscapes began
                with a simple mission: prove that beautiful landscaping and environmental
                responsibility can work hand in hand.
              </p>
              <p>
                After witnessing the harmful effects of chemical-heavy landscaping practices, we
                pioneered 100% organic methods that create stunning outdoor spaces while protecting
                families, pets, and local ecosystems.
              </p>
              <p>
                Today, we're proud to maintain over 500 properties across the region, each one a
                testament to our commitment to sustainable, professional landscaping excellence.
              </p>
            </div>
            <Button onClick={handleStory} className="group bg-primary hover:bg-primary/90">
              Read Our Complete Journey
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every landscape should be a sanctuary that nurtures both beauty and
                      biodiversity."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Michael Thompson, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-primary/20 hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The sustainable principles that guide every landscaping project and client
              relationship we nurture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Expert Team</h3>
            <p className="text-muted-foreground">
              Certified professionals passionate about creating sustainable outdoor spaces that
              thrive year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleTeam}
              variant="outline"
              className="group border-primary/30 hover:border-primary"
            >
              Meet All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "GreenThumb transformed our property into a stunning eco-paradise. Their organic
                approach gave us peace of mind while creating the most beautiful landscape in our
                neighborhood."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Williams</div>
                  <div className="text-sm text-muted-foreground">Homeowner, Oakwood Estates</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Transform Your Outdoor Space?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join over 500 satisfied property owners who trust GreenThumb Landscapes for their
                eco-friendly landscaping needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleConsultation}
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  Request Free Consultation
                </Button>
                <Button
                  onClick={handleServices}
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:border-primary"
                >
                  Explore Our Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
