// src/pages/Portfolio.tsx

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const projects = [
    {
      clientName: "Save the Children",
      industry: "Non-profit",
      description:
        "Managed over 34 Boomi integrations to ensure seamless data flow between systems, including warehouse management, purchase orders, and invoices.",
      results:
        "+30% faster data synchronization and zero failed transactions across integrated systems",
      imageUrl: "/images/portfolio/savethechildren-logo.png",
      link: null,
    },
    {
      clientName: "Ministry of Justice",
      industry: "Government",
      description:
        "Built a Nunjucks-powered site aligned with the GDS framework to modernize workforce management. Reduced query times and enabled real-time data updates.",
      results:
        "Cut page response times by 50% and improved scheduling accuracy for staff management",
      imageUrl: "/images/portfolio/Ministry_of_Justice_logo.svg",
      link: null,
    },
    {
      clientName: "BPAS",
      industry: "Healthcare",
      description:
        "Developed two .NET web forms (appointment requests & medical intake) and are migrating to Node.js. We also manage their Azure services and integration support.",
      results:
        "The forms currently handle over 500+ requests and greatly improved BPAS' workflow.",
      imageUrl: "/images/portfolio/bpas-logo.svg",
      link: null,
    },
    {
      clientName: "4Metal Ltd",
      industry: "Manufacturing",
      description:
        "Professional company site to attract new customers with a high click-through rate and engaging service showcase.",
      results:
        "+65% increase in customer inquiries and improved brand perception",
      imageUrl: "/images/portfolio/4metal-ltd-logo.png", 
      link: "http://mysza35451.github.io/4metal/",
    },
    {
      clientName: "EasyJet",
      industry: "Aviation Tech",
      description:
        "Building and maintaining backend systems with NestJS, TypeScript, and Zod for booking management and real-time availability.",
      results:
        "Accelerated feature deployments by 80% with strict typing and 90%+ test coverage",
      imageUrl: "/images/portfolio/EasyJet_logo.png",
      link: null,
    },
    {
      clientName: "WebPrism Limited",
      industry: "Digital Agency",
      description:
        "Designed and built our corporate website with Tailwind CSS, on-page SEO optimizations, and a “Get a Quote” modal workflow.",
      results:
        "The developed website is managing our leads and creating work opportunities",
      imageUrl: "/images/webprism-logo.png",
      link: "https://webprismlimited.co.uk",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-prism-blue to-electric-violet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-soft-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl leading-relaxed text-soft-white/90 mb-4">
              We've helped businesses across London and beyond launch, grow, and scale online. Here's some of our recent work.
            </p>
            <p className="text-sm italic text-soft-white/80">
              * Some of these projects were completed as part of my role at Reply Ltd, where I contributed directly to each engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard
                key={index}
                clientName={project.clientName}
                industry={project.industry}
                description={project.description}
                results={project.results}
                imageUrl={project.imageUrl ?? undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-light-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-grey mb-4">
              Results That Matter
            </h2>
            <p className="text-xl text-prism-blue">
              Our clients see real, measurable improvements in their online performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-prism-blue mb-2">50+</div>
              <p className="text-cool-grey font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-prism-blue mb-2">98%</div>
              <p className="text-cool-grey font-medium">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-prism-blue mb-2">70%</div>
              <p className="text-cool-grey font-medium">Average Lead Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-prism-blue mb-2">3+</div>
              <p className="text-cool-grey font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-grey mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-cool-grey">
              We have experience working with businesses across various sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Health & Fitness',
              'Beauty & Wellness',
              'Professional Services',
              'Construction',
              'Food & Beverage',
              'Retail & E-commerce',
              'Education',
              'Technology'
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-light-silver/20 p-6 rounded-lg text-center border border-light-silver hover:border-prism-blue/30 transition-colors"
              >
                <p className="font-medium text-charcoal-grey">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-prism-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-6">
            Want to See What We Can Do for You?
          </h2>
          <p className="text-xl text-soft-white/90 mb-8">
            Every successful project starts with a conversation. Let's discuss your goals and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-prism-blue bg-soft-white rounded-lg hover:bg-light-silver transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
