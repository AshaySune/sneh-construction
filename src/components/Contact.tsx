import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '9823299434',
      href: 'tel:9823299434',
      action: 'Click to call',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'svsune2014@gmail.com',
      href: 'mailto:svsune2014@gmail.com',
      action: 'Click to email',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Amravati, Maharashtra',
      href: 'https://maps.google.com/?q=Amravati,Maharashtra',
      action: 'View on map',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon - Sat: 9 AM - 7 PM',
      href: null,
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Start Your <span className="text-gradient-gold">Project</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to build your dream? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 shadow-card border border-border/50 transition-all duration-300 ${
                  item.href ? 'hover:shadow-elegant hover:-translate-y-1 cursor-pointer' : ''
                }`}
                onClick={() => item.href && window.open(item.href, item.href.startsWith('tel') || item.href.startsWith('mailto') ? '_self' : '_blank')}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                    <p className="font-display text-lg font-semibold text-foreground">{item.value}</p>
                    {item.action && (
                      <p className="text-secondary text-sm font-medium mt-1">{item.action}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Call CTA */}
            <a href="tel:9823299434" className="block">
              <div className="bg-primary rounded-xl p-6 text-center">
                <Phone className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-primary-foreground/70 text-sm mb-2">Need immediate assistance?</p>
                <p className="font-display text-2xl font-bold text-primary-foreground">9823299434</p>
                <p className="text-secondary text-sm font-medium mt-2">Tap to call now</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background border-border focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-secondary focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-secondary focus:ring-secondary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full font-semibold shadow-gold hover:scale-[1.02] transition-transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
