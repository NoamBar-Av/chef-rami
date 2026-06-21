import Navbar from "../components/landing/Navbar.jsx";
import Hero from "../components/landing/Hero.jsx";
import About from "../components/landing/About.jsx";
import Services from "../components/landing/Services.jsx";
import Gallery from "../components/landing/Gallery.jsx";
import Testimonials from "../components/landing/Testimonials.jsx";
import FAQ from "../components/landing/FAQ.jsx";
import Contact from "../components/landing/Contact.jsx";
import Footer from "../components/landing/Footer.jsx";

export default function Home() {
  return (
    <div className="landing-root" id="home">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}