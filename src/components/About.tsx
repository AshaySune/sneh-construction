import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    'Licensed Civil Engineering Firm',
    'RERA Registered Projects',
    'Quality Materials & Workmanship',
    'On-Time Project Delivery',
    'Transparent Pricing',
    'After-Sales Support',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted Builders of 
              <span className="text-gradient-gold"> Amravati</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded by <strong className="text-foreground">Mr. Sanjay Sune</strong>, a qualified Civil Engineer 
              with over 28 years of experience, Sneh Associates has been at the forefront of 
              construction excellence in Amravati, Maharashtra.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to quality, innovation, and customer satisfaction has made us a 
              trusted name in residential, commercial, and industrial construction. From concept 
              to completion, we ensure every project reflects our dedication to excellence.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Stats Card */}
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 lg:p-10 shadow-elegant">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-secondary">SS</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  Mr. Sanjay Sune
                </h3>
                <p className="text-primary-foreground/70">Proprietor & Civil Engineer</p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <div className="font-display text-3xl font-bold text-secondary mb-1">50+</div>
                  <div className="text-primary-foreground/70 text-sm">Completed Projects</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <div className="font-display text-3xl font-bold text-secondary mb-1">28+</div>
                  <div className="text-primary-foreground/70 text-sm">Years Experience</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <div className="font-display text-3xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-primary-foreground/70 text-sm">Client Satisfaction</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <div className="font-display text-3xl font-bold text-secondary mb-1">15+</div>
                  <div className="text-primary-foreground/70 text-sm">Team Members</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
