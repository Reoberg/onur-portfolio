import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";



const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const text = "Hello, I am Onur... ";
  const text2 = "Software Developer";
  return (
    <div className="text-center text-white px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
       {/* Role Title: Software Developer */}
       <h2 className="text-2xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Software Developer
      </h2>
        <motion.p
            className="text-lg md:text-2xl mb-6"
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
            Reach out to me for any inquiries or collaborations!
        </motion.p>
      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a
          href="https://github.com/Reoberg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/onuroziskender"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:onuroziskender@outlook.com"
          className="hover:text-blue-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      <a
      href="#about"
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-3xl hover:text-blue-400 transition animate-bounce"
      >
         <FaArrowDown />    
      </a>
    </div>
  );
}
