import { Button } from '@/components/ui/button';
import {
  Printer,
  FileText,
  Wrench,
  Film,
  Coffee,
  Stamp,
  Package,
  Zap,
  Cpu,
  Users,
  Smartphone,
  Receipt,
} from 'lucide-react';
import heroEmbers from '@/assets/hero-embers.jpg';
import { lazy, Suspense } from 'react';

const ServiceCard = lazy(() => import('@/components/ServiceCard'));

const serviceSkeletons = Array.from({ length: 6 });

const services = [
  {
    icon: Printer,
    title: 'Photocopy & Printout',
    description: 'High-quality B&W and Color printing for all your documents.',
    pricing: [
      { item: 'Black and White (Single & Double side)', price: 'Rs. 10' },
      { item: 'Colour (Single & Double side)', price: 'Rs. 10' },
    ],
  },
  {
    icon: FileText,
    title: 'Laminating',
    description:
      'Protect your important documents with our durable lamination service.',
    pricing: [
      { item: 'A4 Size', price: 'Rs. XXX' },
      { item: 'A3 Size', price: 'Rs. XXX' },
    ],
  },
  {
    icon: Wrench,
    title: 'Typesetting',
    description:
      'Professional document formatting and design for resumes, reports, and more.',
    pricing: [
      { item: 'Resume/CV Design', price: 'Rs. XXX' },
      { item: 'Report Formatting', price: 'Rs. XXX' },
    ],
  },
  {
    icon: Package,
    title: 'Computer Accessories & Stationeries',
    description: 'Pens, notebooks, USBs, and everything you need to work.',
    pricing: [
      { item: 'Stationery Items', price: 'Rs. XXX' },
      { item: 'Computer Accessories', price: 'Rs. XXX' },
    ],
  },
  {
    icon: Smartphone,
    title: 'Reloads',
    description:
      'Instant mobile reloads for Dialog, Mobitel, Hutch, and Airtel networks.',
    pricing: [
      { item: 'Dialog' },
      { item: 'Mobitel' },
      { item: 'Hutch' },
      { item: 'Airtel' },
    ],
  },
  {
    icon: Receipt,
    title: 'Bill Payments',
    description:
      'All kinds of utility bills handled here—water, electricity, phone, and more.',
    pricing: [
      { item: 'Water Bills' },
      { item: 'Electricity Bills' },
      { item: 'Telephone & Internet' },
      { item: 'Other Utilities' },
    ],
  },
  {
    icon: Film,
    title: 'Film | Games | TV Series',
    description:
      'A curated collection of entertainment media for your leisure.',
    pricing: [
      { item: 'Movies/Series', price: 'Rs. XXX' },
      { item: 'Games Collection', price: 'Rs. XXX' },
    ],
  },
  {
    icon: Coffee,
    title: 'Mug Printing',
    description:
      'Personalize mugs with your favorite photos and designs. Perfect for gifts!',
    pricing: [
      { item: 'Single Color Print', price: 'Rs. XXX' },
      { item: 'Full Color Print', price: 'Rs. XXX' },
    ],
  },
  {
    icon: Stamp,
    title: 'Seal Cutting',
    description:
      'Custom rubber stamps and seals for official and personal use.',
    pricing: [
      { item: 'Standard Rubber Stamp', price: 'Rs. XXX' },
      { item: 'Custom Seal Design', price: 'Rs. XXX' },
    ],
  },
];

const advantages = [
  {
    icon: Zap,
    title: 'Fast & Reliable',
    description: 'Quick turnaround without compromising on quality.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description: 'We use the latest equipment for the best results.',
  },
  {
    icon: Users,
    title: 'Expert Assistance',
    description:
      'Friendly and knowledgeable staff to help you with your projects.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.35), rgba(0, 0, 0, 0.7)), url(${heroEmbers})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-flicker">
            <span className="bg-gradient-fire bg-clip-text text-transparent">
              Agni
            </span>{' '}
            Bookshop
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl">
              & Communication
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Your One-Stop Hub for Digital & Physical Solutions. <br />
            <span className="text-primary font-semibold">
              Igniting Your Ideas.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="fire"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() =>
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Our Services
            </Button>
            <Button
              variant="fireOutline"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-center mb-4">
            Our <span className="text-primary">Fiery</span> Array of Services
          </h2>
          <p className="text-white/75 text-center mb-12 text-lg">
            Everything you need, all in one place
          </p>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceSkeletons.map((_, index) => (
                  <div
                    key={index}
                    className="h-48 rounded-2xl border border-white/10 bg-white/5 animate-pulse"
                  />
                ))}
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  pricing={service.pricing}
                />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-y border-primary/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-center mb-4">
            The <span className="text-primary">Agni</span> Advantage
          </h2>
          <p className="text-white/75 text-center mb-12 text-lg">
            Why customers trust us with their projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-fire rounded-full mb-4 shadow-lg animate-glow">
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-2xl mb-2 text-white">
                  {advantage.title}
                </h3>
                <p className="text-white/80 text-lg">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-6">
            Ready to Bring Your Project to Life?
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Get in touch with us today and let's ignite your ideas together
          </p>
          <Button
            variant="fireOutline"
            size="lg"
            className="text-lg px-8 py-6 h-auto font-semibold border border-primary/70 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 hover:from-primary/30 hover:to-primary/30"
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-center mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-white/75 text-center mb-12 text-lg">
            We're here to help with all your printing and design needs
          </p>

          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h3 className="font-poppins font-semibold text-2xl mb-4 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:00725451111"
                  className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold">072 545 1111</span>
                </a>

                <a
                  href="mailto:agnibookshop1@gmail.com"
                  className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>agnibookshop1@gmail.com</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1877F2]/10 group-hover:bg-[#1877F2]/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-[#1877F2]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
                    </svg>
                  </div>
                  <span>Agni Bookshop & Communication</span>
                </a>

                <a
                  href="https://wa.me/94725451111"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-[#25D366]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.78 11.78 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.79 6.24L0 24l5.92-1.55A11.76 11.76 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 21.78a9.75 9.75 0 01-4.98-1.36l-.36-.21-3.52.92.94-3.43-.23-.35a9.78 9.78 0 01-1.51-5.21C2.34 6.52 6.52 2.34 12 2.34c5.48 0 9.66 4.18 9.66 9.66S17.48 21.78 12 21.78zm5.34-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.37-1.48-.88-.78-1.47-1.74-1.64-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.14-.23-.55-.47-.48-.65-.49h-.56c-.19 0-.51.07-.78.36-.27.29-1.02.99-1.02 2.41 0 1.42 1.04 2.79 1.19 2.98.15.19 2.07 3.17 5.01 4.45 0 0 1.93.83 2.78 1.11.39.13.78.12 1.08.07.33-.05 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.54-.34z" />
                    </svg>
                  </div>
                  <span>0725451111</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-white/75 text-lg leading-relaxed">
                Visit us today or reach out through phone, email, or your
                favorite social channel. We're committed to providing you with
                fast, reliable, and professional services for all your printing,
                design, and entertainment needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-primary/20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl">
            <span className="text-primary">Agni</span> Bookshop & Communication
          </h3>
          <p className="text-lg sm:text-xl text-white/80">
            Igniting Ideas, Delivering Solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-neutral-200">
            <a
              href="tel:00725451111"
              className="transition-colors duration-200 hover:text-primary"
            >
              072 545 1111
            </a>
            <span className="hidden sm:inline-flex text-neutral-500">|</span>
            <a
              href="mailto:agnibookshop1@gmail.com"
              className="transition-colors duration-200 hover:text-primary"
            >
              agnibookshop1@gmail.com
            </a>
          </div>

          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Agni Bookshop & Communication. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
