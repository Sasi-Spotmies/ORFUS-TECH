import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex pt-28 items-center justify-center overflow-hidden gradient-hero">
      {/* Decorative background layers */}
      <div className="grid-layer">
        <div className="grid-bg" />
      </div>

      <div className="aurora-layer">
        <div className="aurora-blob aurora-blob--1" />
        <div className="aurora-blob aurora-blob--2" />
        <div className="aurora-blob aurora-blob--3" />
      </div>

      <div className="glow-ring floating" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="text-gradient-brand">
              Cutting-Edge Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            We deliver premium IT solutions that drive innovation, enhance security, and accelerate your digital transformation journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group glass-card neo-card border border-primary/40 hover:border-primary text-gradient-cta shadow-strong transition-smooth"
            >
              <span className="text-gradient-cta">Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card neo-card hover:neo-card-inset border-primary/30 hover:border-primary transition-smooth"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
