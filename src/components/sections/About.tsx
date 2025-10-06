import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses through innovative technology solutions'
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Rapid deployment with cutting-edge development practices'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority, every step of the way'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-accent/40 via-background to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient-brand">ORFUS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate technologists, designers, and strategists dedicated to transforming businesses through innovative digital solutions. With over a decade of experience, we've helped hundreds of companies navigate their digital transformation journey.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="p-8 rounded-2xl glass-card neo-card hover:neo-card-inset hover:border-primary/50 transition-smooth">
                <div className="inline-flex p-3 rounded-xl bg-gradient-primary mb-6 group-hover:scale-110 transition-bounce shadow-medium">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
