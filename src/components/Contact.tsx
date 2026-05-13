import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl mb-6">Let's <span className="text-gradient">Connect.</span></h2>
          <p className="text-gray-400 mb-10 max-w-md leading-relaxed">
            I'm always open to discussing new projects, creative ideas or original opportunities 
            to be part of your visions.
          </p>

          <div className="space-y-6">
            <a href="mailto:ezakurnia50@gmail.com" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <Mail className="text-brand-primary" size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Email Me</div>
                <div className="text-white font-medium">ezakurnia50@gmail.com</div>
              </div>
            </a>

            <div className="flex space-x-4 pt-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/zakuurr" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/rezakurnia" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="glass p-8 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-white placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-white placeholder:text-gray-600"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold ml-1">Message</label>
              <textarea 
                rows={4} 
                placeholder="Hi, I'd like to talk about..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-white placeholder:text-gray-600 resize-none"
              />
            </div>
            <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2 py-4">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
