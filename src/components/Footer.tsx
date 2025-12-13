import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center">
                <span className="font-display font-bold text-secondary-foreground text-lg">S</span>
              </div>
              <span className="font-display text-xl font-semibold">Sneh Associates</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              Building dreams into reality since 1995. Sneh Associates is committed to delivering 
              exceptional construction services with quality, integrity, and innovation.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:9823299434" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                  9823299434
                </a>
              </li>
              <li>
                <a href="mailto:svsune2014@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                  svsune2014@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                Amravati, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Sneh Associates. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Proprietor: Mr. Sanjay Sune (Civil Engineer)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
