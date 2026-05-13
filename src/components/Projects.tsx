import { motion } from "motion/react";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "E-PROCUREMENT BIOFARMA",
    category: "Web API & Microservices",
    date: "October 2023",
    description: "A secure and performant e-procurement system built with a microservices architecture. Features include gRPC communication for high modularity and a dynamic React.js frontend.",
    role: "Full Stack Developer",
    tech: ["gRPC", "React.js", "Laravel", "PostgreSQL", "Bootstrap"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "ASTRA GREEN ENERGY",
    category: "Web API & Infrastructure",
    date: "December 2022",
    description: "Energy monitoring platform featuring a real-time live chat system and a sophisticated user scoring mechanism. Deployed on robust AWS infrastructure.",
    role: "Backend & DevOps Engineer",
    tech: ["Golang", "ReactJS", "AWS EC2", "S3", "Cloudfront", "PostgreSQL"],
    links: { demo: "https://virtue.astra.co.id/LoginPage", github: "#" }
  },
  {
    title: "ERNA SARI CATERING",
    category: "E-Commerce & Android App",
    date: "August 2022",
    description: "Feature-rich e-commerce platform for catering services. Includes a comprehensive CMS for menu management and integrated payment gateway for seamless transactions.",
    role: "Project Manager & Backend",
    tech: ["Laravel", "React.js", "Payment Gateway", "MySQL"],
    links: { demo: "#", github: "#" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mb-16">
        <h2 className="text-4xl mb-4">Featured <span className="text-gradient">Projects</span></h2>
        <p className="text-gray-400">A selection of enterprise-grade applications and systems I've developed.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-3xl overflow-hidden flex flex-col group hover:border-brand-primary/30 transition-all duration-500"
          >
            <div className="relative aspect-video bg-white/5 flex items-center justify-center overflow-hidden">
               <Layers className="text-white/10 w-20 h-20 group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] font-bold text-brand-primary uppercase tracking-tighter">
                 {project.date}
               </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <div className="text-[10px] text-brand-secondary font-mono uppercase tracking-widest mb-2">
                {project.category}
              </div>
              <h3 className="text-xl text-white mb-3 font-display group-hover:text-brand-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] uppercase tracking-widest text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="text-[10px] text-gray-500">
                    <span className="block uppercase tracking-tighter">Role</span>
                    <span className="text-gray-300 font-medium">{project.role}</span>
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
