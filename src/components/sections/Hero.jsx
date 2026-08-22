import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent font-semibold text-sm mb-4"
      >
        ~$ whoami: Computer Science Student & Full-Stack Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold text-primary leading-tight"
      >
        Abdul Rehman Sohail<span className="cursor-blink">_</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 max-w-2xl text-muted text-lg"
      >
        I build full-stack web applications with the MERN stack, and enjoy
        going deeper — from REST APIs and OAuth systems down to bare-metal
        x86 assembly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="bg-accent text-bg px-6 py-3 rounded-full font-medium shadow-[0_0_15px_rgba(57,255,20,0.08)] hover:shadow-[0_0_25px_rgba(57,255,20,0.15)] transition-all"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-accent text-accent px-6 py-3 rounded-full font-medium hover:bg-accent hover:text-bg transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex gap-5"
      >
        <a
          href="https://github.com/abdulrehmansohail001"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full overflow-hidden border border-border hover:border-accent transition-colors"
        >
          <img src={githubIcon} alt="GitHub" className="w-full h-full object-cover" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdul-rehman-sohail-2060123a9"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full overflow-hidden border border-border hover:border-accent transition-colors"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-cover" />
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 text-muted"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}

export default Hero;