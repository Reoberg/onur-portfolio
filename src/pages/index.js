import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import CV from "../components/CV";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <section className="min-h-screen flex items-center justify-center relative">
        <Hero />
      </section>
      <About />
      <Portfolio />
      <CV />  
      <Footer />
    </div>
  );  
}
