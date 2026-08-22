import { useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { useMascot } from "../../context/MascotContext";
import TypewriterText from "../ui/TypewriterText";

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "C++", "C#", "SQL"],
    description:
      "Comfortable moving between dynamic scripting and strongly-typed systems languages, from web logic to lower-level, performance-minded code.",
  },
  {
    category: "Frontend",
    skills: ["React.js", "Vite", "HTML5", "CSS3", "Responsive UI Design"],
    description:
      "Building fast, component-driven interfaces with React and Vite, with a strong focus on clean, responsive layouts across devices.",
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication & Authorization",
      "OAuth 2.0",
      "Nodemailer",
    ],
    description:
      "Designing secure, well-structured REST APIs with Node.js and Express, including auth flows, OAuth, and transactional email.",
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB", "MongoDB Atlas", "SSMS", "Cloudinary"],
    description:
      "Modeling and querying data across MongoDB and SQL Server, with cloud-hosted storage and media handled through Atlas and Cloudinary.",
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Railway"],
    description:
      "Version control, deployment, and day-to-day workflow tooling I rely on to ship and iterate on projects quickly.",
  },
  {
    category: "Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Full Stack Web Development",
      "API Integration",
      "State Management",
    ],
    description:
      "The foundational thinking behind the code: solid DS&A, OOP principles, and end-to-end full-stack problem solving.",
  },
];

function SkillCard({ group, index }) {
  const cardRef = useRef(null);
  const { phase, activeCardId, flyTo, flyHome } = useMascot();
  const isPointing = phase === "pointing" && activeCardId === group.category;

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    flyTo(group.category, rect, ["One of my specialties"]);
  };

  const handleMouseLeave = () => {
    flyHome(group.category);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-surface rounded-2xl p-6 border border-border shadow-[0_0_15px_rgba(57,255,20,0.08)] hover:shadow-[0_0_25px_rgba(57,255,20,0.15)]"
    >
      <h3 className="font-semibold text-primary mb-4">{group.category}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium bg-surface border border-border text-muted px-2.5 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="text-muted text-sm leading-relaxed">
        <TypewriterText text={group.description} active={isPointing} />
      </p>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills"
          subtitle="A broad stack spanning frontend polish, backend architecture, and low-level systems programming."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;