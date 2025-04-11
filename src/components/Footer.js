export default function Footer() {
    return (
      <footer className="bg-black text-gray-400 text-sm py-6 mt-20 text-center border-t border-gray-800">
        <p>
          © {new Date().getFullYear()} Onur Oziskender. All rights reserved.
        </p>
      </footer>
    );
  }