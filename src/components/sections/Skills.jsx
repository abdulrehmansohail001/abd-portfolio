import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "C++", "C#", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Vite", "HTML5", "CSS3", "Responsive UI Design"],
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
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB", "MongoDB Atlas", "SSMS", "Cloudinary"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Railway"],
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
  },
];

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
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface rounded-2xl p-6 border border-border shadow-[0_0_15px_rgba(57,255,20,0.08)] hover:shadow-[0_0_25px_rgba(57,255,20,0.15)]"
            >
              <h3 className="font-semibold text-primary mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                      className="text-xs font-medium bg-surface border border-border text-muted px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;