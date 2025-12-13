import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const projects = [
  {
    image: project1,
    title: 'Sunrise Towers',
    category: 'Commercial',
    location: 'Amravati, MH',
    year: '2023',
  },
  {
    image: project2,
    title: 'Green Valley Villa',
    category: 'Residential',
    location: 'Badnera Road',
    year: '2022',
  },
  {
    image: project3,
    title: 'City Mall Complex',
    category: 'Commercial',
    location: 'Rajapeth, Amravati',
    year: '2021',
  },
  {
    image: project4,
    title: 'Healthcare Center',
    category: 'Institutional',
    location: 'Camp Area',
    year: '2023',
  },
  {
    image: project5,
    title: 'Skyline Residency',
    category: 'Residential',
    location: 'VMV Road',
    year: '2022',
  },
  {
    image: project6,
    title: 'Industrial Warehouse',
    category: 'Industrial',
    location: 'MIDC Amravati',
    year: '2021',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Institutional'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our diverse portfolio of successfully completed construction projects across Amravati.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-elegant'
                  : 'bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between text-primary-foreground/70 text-sm">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Static info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-display text-lg font-bold text-primary-foreground">
                  {project.title}
                </h3>
                <span className="text-primary-foreground/70 text-sm">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
