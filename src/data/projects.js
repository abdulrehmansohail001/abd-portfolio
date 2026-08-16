export const projects = [
  {
    id: "quizmaster",
    title: "QuizMaster",
    subtitle: "Geography Gaming Platform",
    description:
      "A full-stack, JetPunk-inspired geography gaming platform featuring multiple interactive game modes: Flagle-style flag guessing, fill-the-world-map challenges, country quizzes, and hot/cold country guessing using real geographical distance calculations. Built a unified XP progression and leaderboard system shared across all game modes, with OAuth-based authentication and automated email notifications.",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "OAuth 2.0",
      "Nodemailer",
      "Cloudinary",
    ],
    highlights: [
      "Multiple game modes sharing one XP/leaderboard engine",
      "OAuth authentication (Google/GitHub) + transactional email via Resend",
      "Deployed frontend on Vercel, backend on Railway",
      "Integrated FlagsCDN, Cloudinary, and MongoDB Atlas",
    ],
    github: "https://github.com/abdulrehmansohail001/quizmaster",
    live: "https://quizmaster-teal.vercel.app",
    featured: true,
  },
  {
    id: "steganography-app",
    title: "Steganography & Encipherment App",
    subtitle: "Desktop Security Tool",
    description:
      "A desktop application enabling secure communication through image steganography and encryption. Hides encrypted messages inside images, with a graphical interface built using WPF and the .NET framework.",
    techStack: ["C#", "WPF", ".NET"],
    highlights: [
      "Encrypts messages before embedding them in images",
      "Full GUI built with WPF",
    ],
    github: "https://github.com/abdulrehmansohail001/c-sharp-steganogrpahyapp",
    live: null,
    featured: false,
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    subtitle: "Console Application, OOP",
    description:
      "A console-based hotel management system built with Object-Oriented Programming principles, featuring role-based access control for Admin, Manager, Employee, and User roles, with file handling for persistent data storage.",
    techStack: ["C++", "OOP", "File I/O"],
    highlights: [
      "Role-based access across 4 user types",
      "Persistent storage via file handling",
    ],
    github: "https://github.com/abdulrehmansohail001/c-oopproject",
    live: null,
    featured: false,
  },
  {
    id: "clinic-management",
    title: "Clinic Management System",
    subtitle: "Console Application, Data Structures",
    description:
      "A console application designed to manage clinic operations and patient records, applying core data structures concepts for organizing and retrieving data efficiently.",
    techStack: ["C++", "Data Structures"],
    highlights: [
      "Structured record management using core DS concepts",
    ],
    github: "https://github.com/abdulrehmansohail001/c-DSproject-2-",
    live: null,
    featured: false,
  },
  {
    id: "cpu-simulation",
    title: "CPU Simulation Project",
    subtitle: "Low-Level Systems Project",
    description:
      "A simplified CPU simulator demonstrating instruction execution and internal processing, applying core concepts of low-level computing and instruction flow.",
    techStack: ["C++", "Data Structures", "Systems Programming"],
    highlights: [
      "Simulates instruction execution and processing flow",
    ],
    github: "https://github.com/abdulrehmansohail001/c-DSproject",
    live: null,
    featured: false,
  },
  {
    id: "snake-game-asm",
    title: "Bare-Metal Snake Game",
    subtitle: "x86 Assembly (NASM) — COAL Project",
    description:
      "A bootable Snake game written entirely in x86 assembly for the Computer Organization & Assembly Language course. Features VGA Mode 13h rendering, BIOS interrupt-based disk I/O for cross-session high score persistence, and an animated title screen. Tested in QEMU and deployed to real hardware via Rufus in Legacy BIOS mode.",
    techStack: ["x86 Assembly", "NASM", "VGA Mode 13h", "QEMU", "BIOS Interrupts"],
    highlights: [
      "Boots directly on real hardware, no OS",
      "High scores persist across sessions via disk sector writes",
      "Animated title screen built from scratch in assembly",
    ],
    github: "https://github.com/abdulrehmansohail001/Bootable-Snake-Game",
    live: null,
    featured: true,
  },
  {
    id: "shimeji-pipeline",
    title: "Custom Enhanced Shimeji",
    subtitle: "Creative Tooling Project",
    description:
      "A custom desktop pet built on the Shimeji-EE engine, featuring original sprite sheets, refactored XML behavior configuration, and a portable batch launcher that automatically rotates outfits daily using a day-of-year calculation — no scheduled task required.",
    techStack: ["Batch Scripting", "XML", "Shimeji-EE"],
    highlights: [
      "Auto-rotates through 3 outfits using (dayOfYear - 1) % TOTAL_OUTFITS",
      "Portable launcher — no hardcoded paths, works out of the box after cloning",
    ],
    github: "https://github.com/abdulrehmansohail001/custom-enhanced-shimeji",
    live: null,
    featured: false,
  },
];