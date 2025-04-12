
export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50 text-white py-4 shadow-md">
      <ul className="flex justify-center gap-x-6 px-4 text-sm md:text-base font-medium">
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:underline transition"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="hover:underline transition"
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("cv")}
            className="hover:underline transition"
          >
            CV
          </button>
        </li>
      </ul>
    </nav>
  );
}
