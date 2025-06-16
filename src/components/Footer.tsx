
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">WebPrism</span>
              <span className="text-gray-300 ml-1">Limited</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              We combine creative design with technical expertise to build websites that convert and marketing strategies that deliver.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>hello@webprismlimited.co.uk</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2" />
                <span>London & Hertfordshire, UK</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">SEO Optimisation</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Marketing Strategy</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WebPrism Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
