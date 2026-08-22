import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Code2, Link2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useMascot } from "../../context/MascotContext";

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

function ContactLink({ label, value, href, icon: Icon }) {
  const linkRef = useRef(null);
  const { flyTo, flyHome } = useMascot();

  const handleMouseEnter = () => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    flyTo(label, rect);
  };

  const handleMouseLeave = () => {
    flyHome(label);
  };

  return (
    <a
      ref={linkRef}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target={label !== "Email" ? "_blank" : undefined}
      rel={label !== "Email" ? "noopener noreferrer" : undefined}
      className="group bg-surface border border-border rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-accent hover:shadow-[0_0_25px_rgba(57,255,20,0.15)] transition-all"
    >
      <div className="w-12 h-12 rounded-full bg-bg border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
        <Icon
          size={20}
          className="text-muted group-hover:text-bg transition-colors"
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-primary">{label}</p>
        <p className="text-xs text-muted">{value}</p>
      </div>
    </a>
  );
}

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
          {contactLinks.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;