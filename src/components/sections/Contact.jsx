import { motion } from "framer-motion";
import { Mail, Code2, Link2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: "ab.notjudged@gmail.com",
    href: "mailto:ab.notjudged@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "abdulrehmansohail001",
    href: "https://github.com/abdulrehmansohail001",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "abdul-rehman-sohail",
    href: "https://www.linkedin.com/in/abdul-rehman-sohail-2060123a9",
    icon: Link2,
  },
];

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow="Let's connect"
          title="Get In Touch"
          subtitle="Open to internships, collaborations, and interesting projects — feel free to reach out."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-3 gap-5"
        >
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            
              <a 
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="group bg-surface border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <Icon
                  size={20}
                  className="text-gray-500 group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">{label}</p>
                <p className="text-xs text-gray-400">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;