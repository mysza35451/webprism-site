
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-soft-white p-8 rounded-xl shadow-sm border border-light-silver hover-lift group transition-all duration-300 hover:border-prism-blue/20">
      <div className="w-12 h-12 bg-gradient-to-br from-prism-blue to-electric-violet rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-soft-white" />
      </div>
      <h3 className="text-xl font-semibold text-prism-blue mb-3">{title}</h3>
      <p className="text-cool-grey leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
