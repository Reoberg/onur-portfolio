export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50 text-white py-4">
        <ul className="flex justify-center gap-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="#cv" className="hover:underline">CV</a></li>
        </ul>
      </nav>
    );
  }