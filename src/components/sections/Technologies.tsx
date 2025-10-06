import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiAwsamplify,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiTensorflow,
  SiNextdotjs
} from 'react-icons/si';
import { useRef } from 'react';

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: 'React', color: '#61DAFB', Icon: SiReact },
    { name: 'TypeScript', color: '#3178C6', Icon: SiTypescript },
    { name: 'Node.js', color: '#339933', Icon: SiNodedotjs },
    { name: 'Python', color: '#3776AB', Icon: SiPython },
    { name: 'AWS', color: '#FF9900', Icon: SiAwsamplify },
    { name: 'Docker', color: '#2496ED', Icon: SiDocker },
    { name: 'Kubernetes', color: '#326CE5', Icon: SiKubernetes },
    { name: 'PostgreSQL', color: '#4169E1', Icon: SiPostgresql },
    { name: 'MongoDB', color: '#47A248', Icon: SiMongodb },
    { name: 'GraphQL', color: '#E10098', Icon: SiGraphql },
    { name: 'TensorFlow', color: '#FF6F00', Icon: SiTensorflow },
    { name: 'Next.js', color: '#000000', Icon: SiNextdotjs }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-secondary/40 via-background to-background">
      {/* Background layers */}
      <div className="aurora-layer">
        <div className="aurora-blob aurora-blob--1" />
        <div className="aurora-blob aurora-blob--2" />
        <div className="aurora-blob aurora-blob--3" />
      </div>
      <div className="glow-ring" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technologies <span className="text-gradient-brand">We Use</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage the latest and most powerful technologies to build robust solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="p-6 rounded-xl glass-card neo-card hover:neo-card-inset hover:border-primary/50 transition-smooth flex flex-col items-center justify-center aspect-square">
                <div
                  className="w-12 h-12 rounded-lg mb-4 group-hover:scale-110 transition-bounce shadow-medium flex items-center justify-center"
                  style={{ backgroundColor: tech.color + '20' }}
                >
                  {tech.Icon && <tech.Icon style={{ color: tech.color }} className="w-6 h-6" />}
                </div>
                <span className="font-medium text-center">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
