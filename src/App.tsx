/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-gradient-to-b from-dark-bg via-dark-card to-dark-bg">
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
