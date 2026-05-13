import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Download, FileText } from "lucide-react";

const roles = ["Software Engineer", "Full Stack Developer", "Backend Specialist", "System Architect"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="section-padding pt-40 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-secondary/10 rounded-full blur-[100px]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 glass px-3 py-1 rounded-full mb-6 text-sm font-medium text-brand-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-4 leading-[1.1]">
            Building Digital <br />
            <span className="text-gradient">Masterpieces.</span>
          </h1>
          
          <div className="h-12 flex items-center mb-6">
            <span className="text-2xl md:text-3xl text-gray-400 font-mono">
              I am a <span className="text-white border-r-2 border-brand-primary pr-1">{displayText}</span>
            </span>
          </div>

          <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
            Highly skilled Software Engineer specialized in building high-performance, 
            scalable, and maintainable full-stack applications with clean architecture.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <span>Contact Me</span>
              <ArrowRight size={18} />
            </motion.button>
            <motion.a
              href="/cv.pdf"
              download="Reza_Kurnia_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass rounded-2xl aspect-square flex items-center justify-center p-8">
            {/* Minimalist Tech Illustration / Code Box */}
            <div className="w-full h-full bg-dark-bg/50 rounded-xl overflow-hidden shadow-2xl border border-white/5 font-mono text-xs md:text-sm p-4 text-gray-500">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <p className="text-blue-400">class</p> <p className="text-purple-400 inline">SoftwareEngineer</p> {"{"}
              <div className="pl-4 mt-2">
                <p><span className="text-blue-400">constructor</span>() {"{"}</p>
                <div className="pl-4">
                  <p><span className="text-gray-400">this</span>.name = <span className="text-green-400">"Reza Kurnia"</span>;</p>
                  <p><span className="text-gray-400">this</span>.focus = [<span className="text-green-400">"Scalability"</span>, <span className="text-green-400">"Clean Code"</span>];</p>
                </div>
                <p>{"}"}</p>
                <p className="mt-2"><span className="text-blue-400">solveProblem</span>(issue) {"{"}</p>
                <div className="pl-4">
                  <p><span className="text-blue-400">return</span> applyCleanArchitecture(issue);</p>
                </div>
                <p>{"}"}</p>
              </div>
              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
