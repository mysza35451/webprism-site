import { useState } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const QuoteModal = () => {
  // Modal open/close state
  const [isOpen, setIsOpen] = useState(false);
  // Submission confirmation state
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Form field values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    brief: '',
  });

  /**
   * Handle form submission.
   * Prevents default, triggers Netlify form processing,
   * and shows a thank-you message before closing.
   */
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // (optional) your checks here …

  setIsSubmitted(true);

  // IMPORTANT: perform the real POST
  (e.currentTarget as HTMLFormElement).submit();

  // (This reset will only run if you stay on the page. If you redirect, it won’t run—and that’s fine.)
  setTimeout(() => {
    setIsOpen(false);
    setIsSubmitted(false);
    setFormData({ fullName: '', email: '', company: '', service: '', brief: '' });
  }, 2000);
};

  /**
   * Update a single form field value.
   * @param field - The name of the field to update
   * @param value - The new value for the field
   */
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Trigger button for opening the quote modal */}
      <DialogTrigger asChild>
        <Button className="bg-electric-violet hover:bg-prism-blue text-soft-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
          Get Quote
        </Button>
      </DialogTrigger>

      {/* Modal content */}
      <DialogContent className="sm:max-w-md bg-soft-white border-light-silver">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-prism-blue text-center">
            Get Your Free Quote
          </DialogTitle>
        </DialogHeader>

        {!isSubmitted ? (
          // Quote request form, integrated with Netlify Forms
          <form
            name="quote-request"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Hidden input required by Netlify to identify this form */}
            <input type="hidden" name="form-name" value="quote-request" />

            {/* Full Name field */}
            <div>
              <Label htmlFor="fullName" className="text-cool-grey font-medium">
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="border-light-silver focus:border-prism-blue"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email field */}
            <div>
              <Label htmlFor="email" className="text-cool-grey font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-light-silver focus:border-prism-blue"
                placeholder="your@email.com"
              />
            </div>

            {/* Company Name field */}
            <div>
              <Label htmlFor="company" className="text-cool-grey font-medium">
                Company Name
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="border-light-silver focus:border-prism-blue"
                placeholder="Your company name (optional)"
              />
            </div>

            {/* Service selection */}
            <div>
              <Label htmlFor="service" className="text-cool-grey font-medium">
                Service Interested In
              </Label>
              <select
                id="service"
                name="service"
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

            {/* Project brief textarea */}
            <div>
              <Label htmlFor="brief" className="text-cool-grey font-medium">
                Short Project Brief
              </Label>
              <Textarea
                id="brief"
                name="brief"
                value={formData.brief}
                onChange={(e) => handleInputChange('brief', e.target.value)}
                className="border-light-silver focus:border-prism-blue min-h-[80px]"
                placeholder="Tell us about your project in a few sentences..."
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full bg-prism-blue hover:bg-electric-violet text-soft-white font-medium py-3 rounded-lg transition-colors duration-300"
            >
              Send My Quote Request
            </Button>
          </form>
        ) : (
          // Confirmation screen shown after successful submission
          <div className="text-center py-8">
            <button
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 text-cool-grey hover:text-charcoal-grey"
            >
              <X />
            </button>
            <div className="w-16 h-16 bg-mint-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-soft-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-prism-blue mb-2">
              Thanks!
            </h3>
            <p className="text-cool-grey">
              We'll get back to you within 1 business day.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
