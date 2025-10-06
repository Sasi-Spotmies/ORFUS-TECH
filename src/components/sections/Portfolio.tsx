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
    <section id="portfolio" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
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
              <div className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-smooth shadow-soft hover:shadow-strong">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
