import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'HTML5', icon: '🌐', color: 'text-orange-400' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'text-cyan' },
  { name: 'JavaScript', icon: '⚡', color: 'text-yellow-400' },
  { name: 'React', icon: '⚛️', color: 'text-cyan' },
  { name: 'Vue.js', icon: '💚', color: 'text-green' },
  { name: 'Node.js', icon: '🟢', color: 'text-green' },
  { name: 'Express.js', icon: '🚀', color: 'text-muted-foreground' },
  { name: 'Laravel', icon: '🔴', color: 'text-red-400' },
  { name: 'PHP', icon: '🐘', color: 'text-purple' },
  { name: 'MongoDB', icon: '🍃', color: 'text-green' },
  { name: 'MySQL', icon: '🗄️', color: 'text-cyan' },
  { name: 'Firebase', icon: '🔥', color: 'text-amber' },
  { name: 'Flutter', icon: '📱', color: 'text-cyan' },
  { name: 'Git', icon: '🔀', color: 'text-orange-400' },
  { name: 'GitHub', icon: '🐙', color: 'text-foreground' },
  { name: 'Postman', icon: '📮', color: 'text-orange-400' },
];

export function SkillsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient-cyan">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}