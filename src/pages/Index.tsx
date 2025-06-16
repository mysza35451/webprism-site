
import { Link } from 'react-router-dom';
import { Monitor, Search, TrendingUp, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();

  const services = [
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description: 'Beautiful, fast, and mobile-first websites that convert visitors into customers.',
    },
    {
      icon: Search,
      title: 'SEO & Content',
      description: 'Rank higher on Google and reach more customers with strategic SEO and content.',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Strategy',
      description: 'From Google Ads to social media, we help you grow your online presence.',
    },
  ];

  const testimonials = [
    {
      quote: "The team at WebPrism nailed our vision. We've seen a real uptick in leads since launching our new site.",
      author: "Jane L.",
      role: "Salon Owner",
    },
    {
      quote: "Professional, responsive, and talented. They delivered exactly what we needed on time and on budget.",
      author: "Tom R.",
      role: "Contractor",
    },
    {
      quote: "Our online bookings have tripled since working with WebPrism. Couldn't be happier with the results.",
      author: "Sarah M.",
      role: "Fitness Studio Owner",
    },
  ];

  return (
    <div className="min-h-screen bg-soft-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-soft-white via-prism-blue/5 to-electric-violet/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto animate-fade-in-up ${heroVisible ? 'in-view' : ''}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-prism-blue mb-6 leading-tight">
              Websites That <span className="text-electric-violet">Work for You</span>
            </h1>
            <p className="text-xl md:text-2xl text-cool-grey mb-8 leading-relaxed">
              Web development, SEO & marketing for ambitious small businesses ready to grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-soft-white bg-prism-blue rounded-lg hover:bg-electric-violet transition-all duration-300 hover:shadow-lg hover-lift"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-prism-blue bg-soft-white rounded-lg border-2 border-prism-blue hover:bg-prism-blue hover:text-soft-white transition-all duration-300 hover-lift"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={servicesRef}
            className={`text-center mb-16 animate-fade-in-up ${servicesVisible ? 'in-view' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-prism-blue mb-4">
              What We Do
            </h2>
            <p className="text-xl text-cool-grey max-w-3xl mx-auto">
              We specialise in helping small businesses establish a powerful online presence that drives real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`animate-fade-in-up ${servicesVisible ? 'in-view' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <WhyWorkWithUs />

      {/* About WebPrism Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-prism-blue mb-8">
              About WebPrism Limited
            </h2>
            <p className="text-lg text-cool-grey leading-relaxed mb-8">
              At WebPrism Limited, we combine creative design with technical expertise to build websites that convert and marketing strategies that deliver. We're passionate about helping small businesses stand out online and achieve sustainable growth.
            </p>
            <p className="text-lg text-cool-grey leading-relaxed">
              Based in London and Hertfordshire, we work with ambitious business owners who understand the importance of a strong digital presence in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={testimonialsRef}
            className={`text-center mb-16 animate-fade-in-up ${testimonialsVisible ? 'in-view' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-prism-blue mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-cool-grey">
              Don't just take our word for it - hear from businesses we've helped grow online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`animate-fade-in-up ${testimonialsVisible ? 'in-view' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-prism-blue to-electric-violet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-6">
            Let's Grow Your Business Online
          </h2>
          <p className="text-xl text-soft-white/90 mb-8">
            Book a free consultation today and discover how we can help transform your digital presence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-prism-blue bg-soft-white rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift"
          >
            Schedule a Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
