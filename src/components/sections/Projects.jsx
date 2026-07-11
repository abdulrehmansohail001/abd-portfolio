import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects"
          subtitle="A mix of full-stack platforms, systems-level programming, and creative tooling — spanning MERN, C++, C#, and x86 assembly."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;