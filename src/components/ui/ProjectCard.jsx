import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { useMascot } from "../../context/MascotContext";

function ProjectCard({ project }) {
  const { title, subtitle, description, techStack, github, live, featured, id } = project;
  const cardRef = useRef(null);
  const { flyTo, flyHome } = useMascot();

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    flyTo(id, rect);
  };

  const handleMouseLeave = () => {
    flyHome(id);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl border border-border bg-surface p-6 shadow-[0_0_15px_rgba(57,255,20,0.08)] hover:shadow-[0_0_25px_rgba(57,255,20,0.15)] transition-shadow duration-300 flex flex-col h-full ${
        featured ? "ring-1 ring-accent/30" : ""
      }`}
    >
      {featured && (
        <span className="mb-3 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          Featured
        </span>
      )}

      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-muted mb-3">{subtitle}</p>

      <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium bg-surface border border-border text-muted px-2.5 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-2 border-t border-border">
        
         <a href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
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