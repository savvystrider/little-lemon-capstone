import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

export default function Home() {
  return (
    <div className="container">
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
    </div>
  );
}
