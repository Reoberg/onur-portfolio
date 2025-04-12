import { motion } from "framer-motion";
import {FaArrowDown} from "react-icons/fa";
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
  SiPython,
  SiGooglecloud,
  SiKubernetes,
  SiVuedotjs,
  SiUnity
} from "react-icons/si";
import ScrollArrow from "./ScrollArrow";

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
  { icon: <SiGooglecloud />, name: "GCP" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiVuedotjs />, name: "Vue.js" },
  { icon: <SiUnity />, name: "Unity" },

];

export default function About() {
  const text = "Passionate Software Developer with a double major in Mechanical and Computer Engineering and 2+ years of hands-on development experience. Recently completed a Master’s in Advanced Computing, with a dissertation on multi-cloud Kubernetes deployment. Skilled in full-stack development (Vue.js, Node.js), cloud computing (Azure, GCP, Kubernetes), and game development (Unity, C#). Proven ability to optimize performance, develop scalable applications, and collaborate with cross-functional teams to deliver high-quality software."

  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 scroll-mt-12 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
        <div className="w-full flex justify-center mb-8">
          <img
            src="/images/about.svg"
            alt="About illustration"
            className="w-64 md:w-80 h-auto"
          />
        </div>
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-justify max-w-3xl mx-auto">
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
       <ScrollArrow to="portfolio" />
      </div>
    </motion.section>
  );
}

