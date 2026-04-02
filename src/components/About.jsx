import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Eye, Network } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Cpu className="w-8 h-8 text-n-blue" />,
      title: "Cerebral Integration",
      desc: "Direct neural upload of knowledge modules drastically reducing learning time by 900%."
    },
    {
      icon: <Network className="w-8 h-8 text-n-purple" />,
      title: "Hive-Mind Processing",
      desc: "Connect seamlessly with global intelligence nets for collaborative problem solving."
    },
    {
      icon: <Eye className="w-8 h-8 text-n-pink" />,
      title: "Holo-Simulated Realty",
      desc: "100% physically accurate immersive environments for historical and scientific immersion."
    },
    {
      icon: <Zap className="w-8 h-8 text-n-cyan" />,
      title: "Quantum Calculation",
      desc: "Utilize on-campus quantum processors for personal thesis and timeline manipulation models."
    }
  ];

  return (
    <section className="py-24 relative z-10" id="academics">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 uppercase text-glow">
            Paradigm <span className="text-n-purple">Shift</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-exo tracking-wide">
            The era of manual data consumption has ended. Neoversity brings the integration of biological and artificial paradigms to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 group hover:-translate-y-2 transition-transform duration-300 border-t border-n-blue/20 hover:border-n-blue/60"
            >
              <div className="w-14 h-14 rounded bg-n-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-orbitron font-medium mb-3 group-hover:text-n-blue transition-colors">{card.title}</h3>
              <p className="text-gray-400 text-sm font-exo leading-relaxed">{card.desc}</p>
              
              <div className="mt-6 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-0.5 bg-n-blue"></div>
                <span className="text-xs text-n-blue font-orbitron tracking-widest uppercase">Analyze</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
