import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import CustomCursor from "./components/Customcursor";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased selection:bg-amber/30 selection:text-ink">
      <div className="grain-overlay" aria-hidden />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Education />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      {/* <Footer /> */}
      <Toaster position="bottom-right" />
    </div>
  );
};

function App() {
  console.log("BASE_URL:", import.meta.env.BASE_URL);
  return (
    <div className="App">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
