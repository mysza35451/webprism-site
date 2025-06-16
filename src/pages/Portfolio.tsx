
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const projects = [
    {
      clientName: 'GlowSkin Studio',
      industry: 'Beauty & Wellness',
      description: 'Custom booking site with SEO-led blog content strategy and integrated appointment system.',
      results: '+65% increase in online bookings within 3 months',
    },
    {
      clientName: 'Urban Contractors',
      industry: 'Construction',
      description: 'Professional portfolio website showcasing completed projects with client testimonials and quote request system.',
      results: '+40% more qualified leads and improved brand credibility',
    },
    {
      clientName: 'FreshBite Catering',
      industry: 'Food & Beverage',
      description: 'E-commerce enabled website with online ordering system and social media integration for local catering business.',
      results: '+80% increase in online orders and expanded service area',
    },
    {
      clientName: 'Elite Fitness Studio',
      industry: 'Health & Fitness',
      description: 'Membership management website with class booking system, trainer profiles, and nutrition blog.',
      results: '+120% growth in class bookings and member retention',
    },
    {
      clientName: 'Digital Marketing Pro',
      industry: 'Professional Services',
      description: 'Lead generation focused website with case studies, service pages, and integrated CRM system.',
      results: '+90% improvement in lead quality and conversion rates',
    },
    {
      clientName: 'Artisan Coffee House',
      industry: 'Retail & Hospitality',
      description: 'Local coffee shop website with online ordering, loyalty program integration, and event promotion system.',
      results: '+55% increase in online orders and customer engagement',
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
            <p className="text-xl text-soft-white/90 leading-relaxed">
              We've helped businesses across London and beyond launch, grow, and scale online. Here's some of our recent work.
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
            <p className="text-xl text-cool-grey">
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
            ].map((industry, index) => (
              <div key={index} className="bg-light-silver/20 p-6 rounded-lg text-center border border-light-silver hover:border-prism-blue/30 transition-colors">
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
