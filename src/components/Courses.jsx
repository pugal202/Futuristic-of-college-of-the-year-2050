import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Globe, FlaskConical, Code } from 'lucide-react';

const courses = [
  { id: 1, title: 'Synthetic Biology', cat: 'Bio-Tech', level: 'Lvl 5', icon: <FlaskConical className="w-6 h-6" /> },
  { id: 2, title: 'Advanced Neural Net Architecture', cat: 'AI', level: 'Lvl 7', icon: <BrainCircuit className="w-6 h-6" /> },
  { id: 3, title: 'Cybernetic Enhancements', cat: 'Bio-Tech', level: 'Lvl 4', icon: <Globe className="w-6 h-6" /> },
  { id: 4, title: 'Quantum Cryptography', cat: 'Cyber-Sec', level: 'Lvl 8', icon: <Code className="w-6 h-6" /> },
  { id: 5, title: 'Interstellar Economics', cat: 'Social', level: 'Lvl 3', icon: <Globe className="w-6 h-6" /> },
  { id: 6, title: 'Artificial Sentience Ethics', cat: 'AI', level: 'Lvl 6', icon: <BrainCircuit className="w-6 h-6" /> },
];

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'AI', 'Bio-Tech', 'Cyber-Sec', 'Social'];

  const filtered = activeFilter === 'All' ? courses : courses.filter(c => c.cat === activeFilter);

  return (
    <section className="py-24 relative z-10" id="nexus">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase text-glow-purple mb-4">
              Knowledge <span className="text-white">Nexus</span>
            </h2>
            <p className="text-gray-400 font-exo max-w-xl">
              Access the central database of learning constructs. Select a module to begin cognitive synchronization.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {filters.map(f => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 font-orbitron text-xs tracking-wider uppercase rounded transition-all duration-300 border
                  ${activeFilter === f 
                    ? 'border-n-purple bg-n-purple/20 text-white box-glow-purple' 
                    : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(course => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card hover:bg-glass-bg border-l-2 border-transparent hover:border-n-cyan p-6 rounded-lg relative overflow-hidden group cursor-pointer"
              >
                {/* Background glow effect on hover */}
                <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-n-cyan/10 rounded-full blur-2xl group-hover:bg-n-cyan/20 transition-all duration-500"></div>

                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-n-cyan/10 text-n-cyan rounded-lg group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <span className="text-xs font-orbitron tracking-widest text-n-cyan">{course.level}</span>
                </div>
                
                <h3 className="text-xl font-orbitron font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">{course.title}</h3>
                <span className="text-xs font-exo px-2 py-1 bg-white/5 text-gray-400 rounded group-hover:bg-white/10 uppercase tracking-widest">
                  {course.cat} Module
                </span>

                <div className="mt-8 flex items-center justify-between">
                  <div className="h-1 flex-1 bg-white/10 rounded-full mr-4 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-n-cyan w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                  </div>
                  <button className="text-n-cyan font-orbitron text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Sync {'->'}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Courses;
