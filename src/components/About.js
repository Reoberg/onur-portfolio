import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiMongodb,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si";

const skills = [
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiAmazonwebservices />, name: "AWS" },
];

export default function About() {
  const text = "Passionate Software Developer with a double major in Mechanical and Computer Engineering and 2+ years of hands-on development experience. Recently completed a Master’s in Advanced Computing, with a dissertation on multi-cloud Kubernetes deployment. Skilled in full-stack development (Vue.js, Node.js), cloud computing (Azure, GCP, Kubernetes), and game development (Unity, C#). Proven ability to optimize performance, develop scalable applications, and collaborate with cross-functional teams to deliver high-quality software."

  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300 text-justify max-w-3xl mx-auto">
          {text}
        </p>
      </div>

      <div className="overflow-hidden whitespace-nowrap w-full border-t border-white/20 py-4">
        <div className="animate-marquee flex gap-10 text-xl font-semibold">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-2 px-3 py-1 transition-transform duration-300 hover:scale-110 hover:text-blue-400">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

