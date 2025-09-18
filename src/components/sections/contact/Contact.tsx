'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Leaf,
  TreePine,
  Scissors,
  Calendar,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    service: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/pricing');
  };
  const handleSecondaryAction = () => {
    router.push('/services');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Landscaping consultation request:', formData);
    router.push('/pricing');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Schedule Consultation',
      description: 'Free property assessment',
      contact: '(555) GREEN-01',
      action: 'Call Today',
    },
    {
      icon: Mail,
      title: 'Email Estimates',
      description: 'Detailed project quotes',
      contact: 'quotes@greenthumblandscapes.com',
      action: 'Request Quote',
    },
    {
      icon: MessageSquare,
      title: 'Emergency Services',
      description: 'Storm damage & urgent care',
      contact: 'Available 24/7',
      action: 'Emergency Line',
    },
  ];

  const serviceAreas = [
    {
      city: 'Downtown Metro',
      address: 'Serving all residential & commercial properties',
      coverage: '15-mile radius',
    },
    {
      city: 'Suburban Districts',
      address: 'HOA communities & private estates',
      coverage: '20-mile radius',
    },
    {
      city: 'Rural Properties',
      address: 'Farms, acreage & large landscapes',
      coverage: '30-mile radius',
    },
  ];

  const services = [
    { value: 'lawn-care', label: 'Weekly Lawn Care', icon: Leaf },
    { value: 'garden-design', label: 'Garden Design & Installation', icon: TreePine },
    { value: 'tree-trimming', label: 'Tree Trimming & Pruning', icon: Scissors },
    { value: 'seasonal', label: 'Seasonal Maintenance', icon: Calendar },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            <Leaf className="size-3 mr-1" />
            Contact GreenThumb
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Outdoor Paradise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to create your dream landscape? Our eco-friendly experts are here to help. Get
            your free consultation and discover sustainable solutions for your property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="bg-primary/5 rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Request Your Free Consultation
              </CardTitle>
              <CardDescription>
                Tell us about your landscaping vision and we'll create a custom plan within 48
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Property Owner Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-medium mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="123 Maple Street, Your City"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Primary Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {services.map(service => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your landscaping goals, property size, current challenges, and any eco-friendly preferences..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base py-6 group bg-primary hover:bg-primary/90"
                >
                  Schedule Free Consultation
                  <Calendar className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Leaf className="size-5 text-primary" />
                Connect With Our Team
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Service Coverage Areas
              </h3>
              <div className="space-y-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg bg-card/50">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{area.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{area.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {area.coverage}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Operating Schedule
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Emergency Services Only</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <TreePine className="size-4" />
                    Seasonal hours may vary - Spring rush starts March 1st
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <Button onClick={handlePrimaryAction} size="sm" className="flex-1">
                    View Pricing Plans
                  </Button>
                  <Button
                    onClick={handleSecondaryAction}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    Browse Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
