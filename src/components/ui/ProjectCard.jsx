import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  const { title, subtitle, description, techStack, github, live, featured } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full ${
        featured ? "ring-1 ring-accent/30" : ""
      }`}
    >
      {featured && (
        <span className="mb-3 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          Featured
        </span>
      )}

      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-gray-400 mb-3">{subtitle}</p>

      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium bg-surface border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-2 border-t border-gray-100">
        
         <a href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
        >
          <Code2 size={16} />
          Code
        </a>
        {live && (
          
          <a  href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-primary transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;