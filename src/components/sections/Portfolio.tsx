import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Healthcare AI',
      category: 'AI & Machine Learning',
      description: 'Predictive analytics system for patient care optimization',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'FinTech Mobile App',
      category: 'Mobile Development',
      description: 'Secure banking application with biometric authentication',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud Migration',
      category: 'Cloud Solutions',
      description: 'Enterprise-scale AWS migration and optimization',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'IoT Dashboard',
      category: 'IoT Solutions',
      description: 'Real-time monitoring dashboard for smart manufacturing',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Security Platform',
      category: 'Cybersecurity',
      description: 'Advanced threat detection and response system',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="portfolio" ref={ref} className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-background via-background to-muted/40">
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
            Featured <span className="text-gradient-brand">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects and transformative solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass-card neo-card hover:neo-card-inset hover:border-primary/50 transition-smooth">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <button className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:scale-105 transition-smooth" aria-label="Open project">
                    <ExternalLink className="h-4 w-4 text-foreground" />
                  </button>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
