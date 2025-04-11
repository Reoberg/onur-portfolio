import { motion } from "framer-motion";
import projects from "../data/portfolio.json";
import { FaArrowDown } from "react-icons/fa";

export default function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      className="min-h-screen bg-gray-950 text-white px-6 py-20 scroll-mt-12 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 p-6 rounded-xl hover:scale-105 hover:border-white/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
        <a href="#cv" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-3xl hover:text-blue-400 transition animate-bounce">
          <FaArrowDown />    
        </a>
      </div>
    </motion.section>
  );
}
