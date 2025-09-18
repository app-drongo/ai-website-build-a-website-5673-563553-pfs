'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Leaf,
  TreePine,
  Clock,
  Award,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Professional Lawn Care', href: '/services' },
        { name: 'Sustainable Garden Design', href: '/services' },
        { name: 'Expert Tree Care', href: '/services' },
        { name: 'Seasonal Maintenance', href: '/services' },
        { name: 'Organic Fertilization', href: '/services' },
        { name: 'Landscape Installation', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about' },
        { name: 'Service Areas', href: '/contact' },
        { name: 'Certifications', href: '/about' },
        { name: 'Testimonials', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Landscaping Tips', href: '/services' },
        { name: 'Seasonal Care Guide', href: '/services' },
        { name: 'Plant Selection', href: '/services' },
        { name: 'Maintenance Calendar', href: '/services' },
        { name: 'Eco-Friendly Practices', href: '/about' },
        { name: 'Free Consultation', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Service Areas', href: '/contact' },
        { name: 'Emergency Tree Care', href: '/contact' },
        { name: 'Pricing Information', href: '/pricing' },
        { name: 'Maintenance Plans', href: '/pricing' },
        { name: 'Seasonal Specials', href: '/services' },
        { name: 'Customer Portal', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/greenthumblandscapes' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/greenthumblandscapes' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/greenthumblandscapes' },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/greenthumb-landscapes',
    },
  ];

  // ACTION_PLACEHOLDER_START
  const handleNewsletter = () => {
    router.push('/contact');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Leaf className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">GreenThumb Landscapes</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming outdoor spaces into sustainable paradises since 2008. Trusted by 500+
                property owners with 100% eco-friendly methods and certified arborists.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@greenthumblandscapes.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(555) 123-LAWN</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Serving 25+ mile radius</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">24-hour response time</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Seasonal Care Tips</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletter}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get monthly landscaping tips and seasonal care reminders. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats Section */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TreePine className="size-5 text-primary mr-2" />
                <span className="font-bold text-lg">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Properties Maintained</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Award className="size-5 text-primary mr-2" />
                <span className="font-bold text-lg">15+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Leaf className="size-5 text-primary mr-2" />
                <span className="font-bold text-lg">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Eco-Friendly Methods</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Clock className="size-5 text-primary mr-2" />
                <span className="font-bold text-lg">24hr</span>
              </div>
              <p className="text-sm text-muted-foreground">Response Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 GreenThumb Landscapes. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> for nature
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/services"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/about"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Certifications
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Emergency Services
            </Link>
            <Link
              href="/pricing"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Maintenance Plans
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
