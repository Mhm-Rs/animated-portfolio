import "./app.scss"
import Career from "./components/career/Career";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services"

const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section><Services /></section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <Portfolio />
    <section id="Career"><Parallax type="career" /></section>
    <section>
      <Career />
    </section>
    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;
