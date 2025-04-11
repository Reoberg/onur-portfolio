import { motion } from "framer-motion";

export default function CV() {
  return (
    <motion.section
      id="cv"
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">CV / Resume</h2>
        <p className="text-lg mb-6">
          Here’s a quick summary of my experience and education. You can also download my full CV as a PDF.
        </p>
        <a
          href="/cv/onur-oziskender-cv.pdf"
          download
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Download CV
        </a>

        {/* Optional: add experience/education highlights here later */}
      </div>
    </motion.section>
  );
}
