import { FaArrowDown } from "react-icons/fa";

export default function ScrollArrow({ to }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => scrollToSection(to)}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-3xl hover:text-blue-400 transition animate-bounce"
      aria-label={`Scroll to ${to}`}
    >
      <FaArrowDown />
    </button>
  );
}