import { motion } from "framer-motion";

export default function CV() {
  return (
    <motion.section
      id="cv"
      className="min-h-screen bg-gray-900 text-white px-6 py-20 scroll-mt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3}}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">CV / Resume</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-justify max-w-3xl mx-auto">
          Here’s a quick summary of my experience and education. You can also download my full CV as a PDF.
        </p>
        <div className="w-full flex justify-center mb-8">
          <img
            src="/images/CV.svg"
            alt="CV illustration"
            className="w-64 md:w-80 h-auto"
          />
        </div>
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
