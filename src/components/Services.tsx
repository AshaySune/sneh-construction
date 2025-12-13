import { Home, Building2, Factory, PenTool, HardHat, Ruler } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom homes, apartments, and residential complexes designed for modern living with premium finishes.',
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    description: 'Office buildings, shopping complexes, and retail spaces built to meet business requirements.',
  },
  {
    icon: Factory,
    title: 'Industrial Buildings',
    description: 'Warehouses, factories, and industrial facilities constructed with structural excellence.',
  },
  {
    icon: PenTool,
    title: 'Architectural Design',
    description: 'Innovative architectural plans and 3D visualizations to bring your vision to life.',
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'End-to-end project coordination ensuring timely delivery and quality control.',
  },
  {
    icon: Ruler,
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with modern upgrades and structural improvements.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive construction solutions tailored to your needs, delivered with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
