import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
