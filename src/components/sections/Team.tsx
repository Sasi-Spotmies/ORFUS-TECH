import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Samantha Lee', role: 'CTO', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Marcus Chen', role: 'Lead Developer', gradient: 'from-orange-500 to-red-500' },
    { name: 'Rachel Green', role: 'Design Director', gradient: 'from-green-500 to-teal-500' },
    { name: 'James Wilson', role: 'DevOps Lead', gradient: 'from-indigo-500 to-purple-500' },
    { name: 'Lisa Anderson', role: 'Security Expert', gradient: 'from-pink-500 to-rose-500' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="team" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to delivering excellence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden glass-card neo-card hover:neo-card-inset hover:border-primary/50 transition-smooth">
                <div className={`h-64 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-end justify-center p-6 gap-4"
                  >
                    <motion.a
                      href="#"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-smooth"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-smooth"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </motion.a>
                  </motion.div>
                </div>
                <div className="p-6 text-center bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
