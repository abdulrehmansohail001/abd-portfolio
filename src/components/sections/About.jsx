import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-10 items-start"
        >
          <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm a Computer Science student at Air University, Multan
              (CGPA 3.81/4.00), with hands-on experience building full-stack
              web applications using the MERN stack. My most substantial
              project, QuizMaster, is a production-deployed geography gaming
              platform with multiple interactive game modes, OAuth
              authentication, and a shared XP/leaderboard system across the
              whole app.
            </p>
            <p>
              Beyond web development, I like going deeper into how things
              actually work — I built a bootable Snake game entirely in x86
              assembly for my Computer Organization course, complete with
              VGA rendering and disk-based high score persistence, and
              deployed it to real hardware.
            </p>
            <p>
              Outside of coursework, I run a creative side project building
              custom Shimeji desktop pets, combining AI-generated sprite
              art with scripted automation — a mix of creative and
              technical problem-solving I enjoy just as much as backend
              architecture.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-gray-100">
            <h3 className="font-semibold text-primary mb-3">Education</h3>
            <p className="text-sm text-gray-600">
              BS Computer Science
              <br />
              Air University, Multan Campus
              <br />
              2024 – 2028
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-accent">3.81</span>
              <span className="text-sm text-gray-400">/ 4.00 CGPA</span>
            </div>

            <h3 className="font-semibold text-primary mt-6 mb-3">
              Certifications
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Database Systems – Beginner (Coursera)</li>
              <li>Database Systems – Intermediate (Coursera)</li>
              <li>AI Prompting – Beginner (Coursera)</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;