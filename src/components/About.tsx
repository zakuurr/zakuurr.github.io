import { motion } from "motion/react";
import { Code2, Cpu, Globe, Rocket } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "4+", icon: <Rocket className="text-brand-primary" /> },
  { label: "Projects Completed", value: "5", icon: <Globe className="text-brand-secondary" /> },
  { label: "Technologies & Skills", value: "15+", icon: <Cpu className="text-blue-400" /> },
];

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-8">About <span className="text-gradient">Me</span></h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              Software Engineer with <strong className="text-white">4+ years of experience</strong> building scalable and high-performance systems for enterprise applications. 
              Proven expertise in backend engineering, observability, system optimization, and API-driven services for modern web platforms.
            </p>
            <p>
              Experienced in improving system reliability through <strong className="text-white">distributed tracing</strong>, centralized monitoring, and performance tuning. 
              Strong focus on clean architecture, maintainable code, and secure multi-tenant systems that support real business operations.
            </p>
            <p>
              Passionate about delivering <strong className="text-white">reliable, efficient, and scalable solutions</strong> in fast-paced development environments.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/[0.05] transition-colors">
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
