import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "PT Infokes Indonesia",
    role: "Software Engineer",
    period: "02/2024 - Present",
    location: "Bandung, Indonesia",
    description: "Designed scalable API-driven services and complex ETL pipelines. Reduced application latency from ~1.2s to 500ms (~58% improvement) through query optimization. Improved reliability by reducing error rates from 3.5% to 1.2%.",
    tech: ["Go", "PHP", "PostgreSQL", "Airflow", "Docker"]
  },
  {
    company: "PT Teknologi bangsa Cerdas",
    role: "Software Engineer",
    period: "11/2023 - 09/2025",
    location: "Remote",
    description: "Accelerated transaction processing by integrating BCA and Nobu QRIS. Enhanced logistics through J&T and JNE API integrations. Applied TDD architecture for robust code quality.",
    tech: ["Node.js", "TDD", "REST API", "Payment Gateways"]
  },
  {
    company: "ASIA PACIFIC URBAN DESIGNER",
    role: "Software Engineer (Freelance)",
    period: "03/2020 - 10/2023",
    location: "Remote",
    description: "Redesigned company website and built a comprehensive CMS, reducing content update time by 70%. Integrated event-driven architectures for system scalability.",
    tech: ["React", "Node.js", "CMS", "Event-Driven"]
  },
  {
    company: "PT PADEPOKAN TUJUH SEMBILAN",
    role: "Software Engineer (Internship)",
    period: "07/2022 - 12/2022",
    location: "Bandung, Indonesia",
    description: "Maintained leave management system, reducing bug reports by 60%. Executed UAT protocols achieving 95%+ pass rate.",
    tech: ["PHP", "QA", "System Analysis"]
  }
];

const education = [
  {
    school: "INDONESIA COMPUTER UNIVERSITY (UNIKOM)",
    degree: "Bachelor of Science in Computer Science",
    period: "09/2019 - 09/2023",
  }
];

const certificates = [
  {
    title: "LKS IT Network System Administrator",
    org: "ITNSA",
    award: "1st Place (National Competition Level)",
    period: "2019",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mb-20">
        <h2 className="text-4xl mb-4">Professional <span className="text-gradient">Journey</span></h2>
        <p className="text-gray-400">Deep expertise in backend optimization, scalability, and clean architecture.</p>
      </div>

      <div className="relative space-y-12 mb-24">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="absolute left-0 md:left-1/2 top-10 w-4 h-4 bg-brand-primary rounded-full border-4 border-dark-bg -translate-x-1/2 z-10 hidden md:block" />

            <div className="w-full md:w-[45%]">
              <div className="glass p-8 rounded-3xl hover:border-brand-primary/30 transition-colors group">
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-xl text-white group-hover:text-brand-primary transition-colors">{exp.role}</h3>
                    <p className="text-brand-secondary font-medium tracking-tight text-sm">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end text-[10px] text-gray-500 space-y-1">
                    <span className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] uppercase tracking-widest text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-3xl">
          <h3 className="text-xl mb-6 text-white font-display">Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="space-y-1">
              <h4 className="text-brand-primary font-semibold">{edu.degree}</h4>
              <p className="text-white text-sm">{edu.school}</p>
              <p className="text-xs text-gray-500">{edu.period}</p>
            </div>
          ))}
        </div>
        <div className="glass p-8 rounded-3xl">
          <h3 className="text-xl mb-6 text-white font-display">Recognition</h3>
          {certificates.map((cert, idx) => (
            <div key={idx} className="space-y-1">
              <h4 className="text-brand-secondary font-semibold">{cert.title}</h4>
              <p className="text-white text-sm">{cert.award}</p>
              <p className="text-xs text-gray-500">{cert.org} • {cert.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
