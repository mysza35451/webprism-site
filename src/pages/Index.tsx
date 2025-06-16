
import { Link } from 'react-router-dom';
import { Monitor, Search, TrendingUp, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Index = () => {
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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Websites That <span className="text-blue-600">Work for You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Web development, SEO & marketing for ambitious small businesses ready to grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialise in helping small businesses establish a powerful online presence that drives real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About WebPrism Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About WebPrism Limited
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At WebPrism Limited, we combine creative design with technical expertise to build websites that convert and marketing strategies that deliver. We're passionate about helping small businesses stand out online and achieve sustainable growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Based in London and Hertfordshire, we work with ambitious business owners who understand the importance of a strong digital presence in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from businesses we've helped grow online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Grow Your Business Online
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free consultation today and discover how we can help transform your digital presence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-colors"
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
