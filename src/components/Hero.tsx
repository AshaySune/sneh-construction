import { ArrowDown, Building2, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-building.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury building by Sneh Associates"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-secondary/30">
              Building Dreams Since 1995
            </span>
          </div>
          
          <h1 className="opacity-0 animate-fade-up stagger-1 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Building 
            <span className="text-gradient-gold"> Excellence</span>
            <br />
            In Every Structure
          </h1>
          
          <p className="opacity-0 animate-fade-up stagger-2 text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
            Sneh Associates is Amravati's premier construction company, delivering quality 
            residential and commercial projects with precision, innovation, and trust.
          </p>
          
          <div className="opacity-0 animate-fade-up stagger-3 flex flex-wrap gap-4 mb-12">
            <a href="#projects">
              <Button variant="secondary" size="lg" className="text-base font-semibold shadow-gold hover:scale-105 transition-transform">
                View Our Projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50">
                Get Quote
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="opacity-0 animate-fade-up stagger-4 grid grid-cols-3 gap-6 max-w-lg">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Building2 className="w-6 h-6 text-secondary" />
              </div>
              <div className="font-display text-3xl font-bold text-primary-foreground">50+</div>
              <div className="text-primary-foreground/60 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div className="font-display text-3xl font-bold text-primary-foreground">28+</div>
              <div className="text-primary-foreground/60 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div className="font-display text-3xl font-bold text-primary-foreground">200+</div>
              <div className="text-primary-foreground/60 text-sm">Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce cursor-pointer"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
