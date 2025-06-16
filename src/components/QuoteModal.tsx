
import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const QuoteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    brief: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        service: '',
        brief: ''
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-electric-violet hover:bg-prism-blue text-soft-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
          Get Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-soft-white border-light-silver">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-prism-blue text-center">
            Get Your Free Quote
          </DialogTitle>
        </DialogHeader>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-cool-grey font-medium">
                Full Name *
              </Label>
              <Input
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="border-light-silver focus:border-prism-blue"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-cool-grey font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-light-silver focus:border-prism-blue"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <Label htmlFor="company" className="text-cool-grey font-medium">
                Company Name
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="border-light-silver focus:border-prism-blue"
                placeholder="Your company name (optional)"
              />
            </div>
            
            <div>
              <Label htmlFor="service" className="text-cool-grey font-medium">
                Service Interested In
              </Label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => handleInputChange('service', e.target.value)}
                className="w-full px-3 py-2 border border-light-silver rounded-md focus:border-prism-blue focus:ring-2 focus:ring-prism-blue/20 bg-soft-white text-charcoal-grey"
              >
                <option value="">Select a service</option>
                <option value="web-design">Web Design</option>
                <option value="seo">SEO</option>
                <option value="marketing">Marketing</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="brief" className="text-cool-grey font-medium">
                Short Project Brief
              </Label>
              <Textarea
                id="brief"
                value={formData.brief}
                onChange={(e) => handleInputChange('brief', e.target.value)}
                className="border-light-silver focus:border-prism-blue min-h-[80px]"
                placeholder="Tell us about your project in a few sentences..."
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-prism-blue hover:bg-electric-violet text-soft-white font-medium py-3 rounded-lg transition-colors duration-300"
            >
              Send My Quote Request
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-mint-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-soft-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-prism-blue mb-2">Thanks!</h3>
            <p className="text-cool-grey">We'll get back to you within 1 business day.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
