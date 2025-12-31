import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Optimized Entry",
    description: "Company website with modern design and seamless user experience.",
    url: "https://optimizedentry.com/",
  },
  {
    title: "Ideal Electric Service",
    description: "Professional electrical services site with clean layout and easy navigation.",
    url: "https://ethankruger.github.io/IdealSite/",
  },
  {
    title: "Optimized Portal",
    description: "Software platform with intuitive dashboard and user management features.",
    url: "https://optimizedportal.com/",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold">
            Recent projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;