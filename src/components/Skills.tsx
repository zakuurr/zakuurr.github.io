import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Backend & Systems",
    skills: [
      { name: "Microservices", level: "Expert" },
      { name: "Node JS", level: "Advanced" },
      { name: "Express JS", level: "Advanced" },
      { name: "Go", level: "Intermediate" },
      { name: "PHP", level: "Advanced" },
      { name: "Laravel", level: "Advanced" },
      { name: "Codeigniter", level: "Advanced" },
      { name: "Elysia JS", level: "Intermediate" },
      { name: "BUN", level: "Intermediate" },
      { name: "Airflow ETL", level: "Intermediate" },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "Vue JS", level: "Advanced" },
      { name: "React JS", level: "Intermediate" },
      { name: "Javascript", level: "Advanced" },
      { name: "Typescript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Ant Design", level: "Intermediate" },
      { name: "Bootstrap", level: "Advanced" },
    ]
  },
  {
    title: "DevOps & Core Skills",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
      { name: "Git", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Clean code practices", level: "Advanced" },
      { name: "SOLID Principles", level: "Advanced" },
      { name: "Problem Solving", level: "Advanced" },
    ]
  }
];

const currentlyLearning = [
  { title: "System Design", description: "Mastering distributed systems and high-availability architecture." },
  { title: "Microservices", description: "Deep dive into event-driven architecture and service meshes." },
  { title: "DevOps", description: "Advanced automation and observability in cloud environments." },
  { title: "AI Integration", description: "Integrating LLMs and generative AI into production apps." }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mb-20">
        <h2 className="text-4xl mb-4">Technical <span className="text-gradient">Stack</span></h2>
        <p className="text-gray-400 max-w-2xl">
          A comprehensive overview of my technological proficiency, specializing in building robust backend systems and high-performance applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-xl mb-6 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              <span>{category.title}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group relative">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:border-brand-primary/50 transition-colors cursor-default block">
                    {skill.name}
                    {skill.level === 'Expert' && <span className="ml-1 text-[8px] text-brand-secondary font-bold uppercase">Exp</span>}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl mb-8 flex items-center space-x-3">
          <span className="text-brand-secondary font-mono text-sm underline underline-offset-4">Currently Learning</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentlyLearning.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
