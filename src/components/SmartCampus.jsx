import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SmartCampus = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={targetRef} className="py-32 relative z-10 overflow-hidden" id="campus">
      <div className="container mx-auto px-6 relative">
        
        <div className="text-center mb-20 relative z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 rounded-full border border-n-blue/50 box-glow bg-n-blue/5 mb-6"
          >
            <span className="font-orbitron tracking-widest text-n-blue text-sm uppercase">Infrastructure Alpha</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-glow">
            SENTIENT CAMPUS
          </h2>
        </div>

        <motion.div style={{ opacity, scale }} className="relative z-10 glass-card rounded-2xl border border-n-blue/20 p-1 bg-gradient-to-b from-n-blue/10 to-transparent">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center rounded-2xl opacity-40 mix-blend-luminosity brightness-50"></div>
          
          {/* Overlay UI elements to simulate AR HUD over the campus image */}
          <div className="relative z-20 p-8 md:p-16 min-h-[500px] flex flex-col justify-between">
            
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3 bg-black/50 p-3 rounded backdrop-blur-md border border-white/10">
                <div className="w-2 h-2 rounded-full bg-n-cyan animate-pulse"></div>
                <span className="font-orbitron text-xs text-white tracking-widest uppercase">Robotics Lab #04 Active</span>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="w-16 h-1 bg-white/20 overflow-hidden rounded"><div className="w-1/2 h-full bg-n-blue animate-pulse"></div></div>
                <div className="w-12 h-1 bg-white/20 overflow-hidden rounded"><div className="w-3/4 h-full bg-n-purple animate-pulse"></div></div>
                <div className="w-20 h-1 bg-white/20 overflow-hidden rounded"><div className="w-1/3 h-full bg-n-pink animate-pulse"></div></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
              <div className="glass-card bg-black/40 border-n-blue/30 p-4 rounded hover:bg-n-blue/10 transition-colors cursor-crosshair">
                <span className="block text-n-blue font-orbitron text-lg font-bold">IoT Grid</span>
                <span className="text-xs font-exo text-gray-400">99.9% Efficiency</span>
              </div>
              <div className="glass-card bg-black/40 border-n-purple/30 p-4 rounded hover:bg-n-purple/10 transition-colors cursor-crosshair">
                <span className="block text-n-purple font-orbitron text-lg font-bold">Holo-Classrooms</span>
                <span className="text-xs font-exo text-gray-400">42 Sessions Active</span>
              </div>
              <div className="glass-card bg-black/40 border-n-pink/30 p-4 rounded hover:bg-n-pink/10 transition-colors cursor-crosshair">
                <span className="block text-n-pink font-orbitron text-lg font-bold">Energy Shield</span>
                <span className="text-xs font-exo text-gray-400">Optimal Levels</span>
              </div>
            </div>

          </div>

          {/* Target Reticle decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full pointer-events-none flex items-center justify-center">
             <div className="w-48 h-48 border-[0.5px] border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="w-32 h-32 border border-n-cyan/20 rounded-full animate-[spin_8s_linear_infinite_reverse] absolute"></div>
             <div className="w-2 bg-n-cyan h-2 rounded-full absolute"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SmartCampus;
