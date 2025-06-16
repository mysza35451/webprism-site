
import { Shield, Clock, Users, Award } from 'lucide-react';

const WhyWorkWithUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Proven Track Record',
      description: 'Over 50+ successful projects delivered for small businesses across the UK.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most projects completed within 2-4 weeks without compromising quality.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Direct access to your project team with regular updates and communication.'
    },
    {
      icon: Award,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that impact your bottom line.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Why Work With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the challenges small businesses face. That's why we've built our approach around delivering real value, not just pretty websites.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center group transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium text-blue-600 mb-2">
              Ready to see the difference?
            </p>
            <p className="text-gray-600">
              Join the growing number of UK small businesses who trust WebPrism Limited to drive their digital success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
