import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Maximize, Orbit, Activity } from 'lucide-react';

const Hero = () => {
  const words = ["EDUCATION", "EVOLUTION", "INTELLIGENCE", "REALITY"];
  const [i, setI] = useState(0);

  useEffect(() => {
    const v = setInterval(() => {
      setI((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(v);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="explore">
      <div className="container mx-auto px-6 relative z-10 flex text-center flex-col items-center">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border-n-blue/30 mb-8"
        >
          <Activity className="w-4 h-4 text-n-blue animate-pulse" />
          <span className="text-xs font-orbitron tracking-widest text-n-blue uppercase">System Online V5.0</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron tracking-tight mb-4"
        >
          WELCOME TO THE <br className="hidden md:block"/> FUTURE OF <br className="block sm:hidden"/>
          <span className="relative inline-block ml-4 text-transparent bg-clip-text bg-gradient-to-r from-n-blue via-n-purple to-n-pink pb-2 block sm:inline">
            {words[i]}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-exo font-light leading-relaxed"
        >
          Transcend traditional boundaries. Merge with absolute intelligence.<br/>
          Experience cybernetically enhanced learning directly mapped to your neural net.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button className="group relative px-8 py-4 bg-n-blue text-black font-orbitron font-bold rounded overflow-hidden max-w-max">
            <span className="relative z-10 flex items-center tracking-widest space-x-2">
              <span>INITIATE DIVE</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
          </button>
          
          <button className="flex items-center space-x-2 px-8 py-4 rounded border border-n-purple/50 bg-n-purple/5 hover:bg-n-purple/10 text-white font-orbitron tracking-widest transition-all box-glow-purple group max-w-max">
            <Maximize className="w-5 h-5 text-n-purple group-hover:scale-110 transition-transform" />
            <span>AR TOUR</span>
          </button>
        </motion.div>

        {/* Holographic Projection Base Simulation */}
        <div className="mt-20 relative w-full max-w-4xl mx-auto h-[200px] sm:h-[300px] flex items-end justify-center perspective-[1000px]">
          {/* Base disc */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="w-48 h-12 md:w-96 md:h-24 bg-n-cyan/5 border border-n-cyan/30 rounded-full box-border absolute bottom-0 transform rotate-x-60"
            style={{ transform: "rotateX(75deg)" }}
          >
             <div className="absolute inset-0 rounded-full border border-n-cyan shadow-[0_0_50px_rgba(0,255,204,0.4)] animate-[ping_3s_ease-in-out_infinite]"></div>
          </motion.div>
          {/* Projection beams */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100%', opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
             className="absolute bottom-6 md:bottom-12 w-32 md:w-64 h-full bg-gradient-to-t from-n-cyan/40 to-transparent blur-md mask-image-[linear-gradient(to_bottom,transparent,black)] flex justify-center items-end"
             style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
          >
            <Orbit className="w-20 h-20 md:w-40 md:h-40 text-n-cyan/60 animate-spin absolute bottom-[30%] drop-shadow-[0_0_20px_#00ffcc]" style={{animationDuration: '10s'}} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
