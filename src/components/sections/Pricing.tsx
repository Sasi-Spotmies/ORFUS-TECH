import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: 'per project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom Web Development',
        'Responsive Design',
        'Basic SEO Optimization',
        '3 Months Support',
        'Source Code Access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Cloud Integration',
        'Advanced Security',
        'API Development',
        '6 Months Support',
        'Performance Optimization',
        'Analytics Dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large-scale operations',
      features: [
        'Everything in Professional',
        'Dedicated Team',
        'Custom AI Solutions',
        'Priority Support',
        'Unlimited Revisions',
        'DevOps Setup',
        'Training & Documentation',
        'SLA Guarantee'
      ],
      popular: false
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
    <section id="pricing" ref={ref} className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-background via-accent/30 to-background">
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
            Transparent <span className="text-gradient-brand">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include premium support.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-card border-2 border-primary/50 z-50 text-gradient-brand text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`h-full p-8 rounded-2xl transition-smooth ${
                plan.popular 
                  ? 'glass-card neo-card-inset border-primary/50 hover:border-primary shadow-strong' 
                  : 'glass-card neo-card hover:neo-card-inset hover:border-primary/50'
              }`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <Button 
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:opacity-90 border-2 border-primary/60 hover:border-primary'
                      : 'border-2 border-primary/50 hover:border-primary hover:bg-primary/5'
                  }`}
                  variant={plan.popular ? 'outline' : 'outline'}
                >
                  Get Started
                </Button>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 p-1 rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
