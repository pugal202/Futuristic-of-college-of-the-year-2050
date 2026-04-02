import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, BarChart2, BellRing, Settings } from 'lucide-react';

const DashboardSimulation = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <section className="py-24 relative z-10" id="holography">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase text-glow-purple mb-4">
            Neural <span className="text-white">Dashboard</span>
          </h2>
          <p className="text-gray-400 font-exo max-w-xl mx-auto">
            Real-time biometric and academic telemetry visualization.
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass-card border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          
          {/* Sidebar */}
          <div className="md:w-64 bg-black/40 p-6 flex flex-col border-r border-white/5">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-n-blue to-n-purple p-0.5">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <div className="font-orbitron text-sm font-bold text-white tracking-wider">USER_ID_8492</div>
                <div className="text-[10px] font-orbitron text-n-cyan tracking-widest uppercase">Level 4 Scholar</div>
              </div>
            </div>
            
            <nav className="flex-1 flex flex-col space-y-2 font-orbitron text-xs tracking-widest">
              {['Overview', 'Performance', 'AI Insights', 'Settings'].map(tab => (
                 <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`text-left px-4 py-3 rounded transition-all flex items-center space-x-3
                    ${activeTab === tab ? 'bg-n-purple/20 text-white border-l-2 border-n-purple' : 'text-gray-500 hover:text-white hover:bg-white/5'}
                  `}
                >
                  {tab === 'Overview' && <BarChart2 className="w-4 h-4" />}
                  {tab === 'Performance' && <Sparkles className="w-4 h-4" />}
                  {tab === 'AI Insights' && <BellRing className="w-4 h-4" />}
                  {tab === 'Settings' && <Settings className="w-4 h-4" />}
                  <span>{tab}</span>
                </button>
              ))}
            </nav>
            
            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="text-[10px] text-gray-500 font-orbitron uppercase mb-2">Neural Link Status</div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[98%] h-full bg-n-cyan shadow-[0_0_8px_#00ffcc] animate-[pulse_2s_ease-in-out_infinite]"></div>
              </div>
              <div className="text-right text-[10px] text-n-cyan mt-1 font-exo">98% Synchronized</div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8 bg-gradient-to-br from-black/20 to-n-purple/5">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-orbitron font-bold text-white tracking-wider uppercase">{activeTab}</h3>
              <div className="px-3 py-1 bg-n-blue/10 border border-n-blue/30 rounded text-n-blue text-[10px] font-orbitron tracking-widest">
                LIVE FEED
              </div>
            </div>

            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Dummy Data UI */}
              <div className="col-span-2 md:col-span-1 glass-card p-5 border-white/5 hover:border-n-cyan/30 transition-colors">
                <div className="text-[10px] text-gray-400 uppercase font-orbitron mb-1">Cognitive Load</div>
                <div className="text-3xl font-exo text-white mb-4">42.5<span className="text-sm text-gray-500"> /mu</span></div>
                {/* Graph mockup */}
                <div className="flex items-end space-x-1 h-12">
                  {[40,70,45,90,65,30,80].map((h, i) => (
                    <div key={i} className="w-full bg-n-cyan/20 rounded-t" style={{height: `${h}%`}}>
                      <div className="w-full bg-n-cyan rounded-t hover:bg-white transition-colors" style={{height: `${h/2}%`}}></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2 md:col-span-1 glass-card p-5 border-white/5 hover:border-n-purple/30 transition-colors">
                 <div className="text-[10px] text-gray-400 uppercase font-orbitron mb-1">AI Recommendation</div>
                 <p className="text-sm font-exo text-gray-300 mt-2 leading-relaxed">
                   Based on your recent synaptic patterns, we recommend initiating the <span className="text-n-purple underline decoration-dotted">Quantum Mechanics Module</span> to optimize neural pathways.
                 </p>
                 <button className="mt-4 text-[10px] font-orbitron bg-n-purple text-white px-4 py-2 rounded uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full">
                   Execute Inject
                 </button>
              </div>

              <div className="col-span-2 glass-card p-5 border-white/5 mt-4">
                 <div className="flex justify-between items-center mb-4">
                  <div className="text-[10px] text-gray-400 uppercase font-orbitron">Recent Achievements</div>
                  <div className="text-[10px] text-n-blue uppercase font-orbitron cursor-pointer hover:text-white transition-colors">View All Archive</div>
                 </div>
                 
                 <div className="space-y-3">
                   {['Bypassed Turing Test Protocol', 'Mastered 4D Spatial Visualization', 'Completed Ethical Dilemma Sim V2'].map((ach, i) => (
                     <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded border border-transparent hover:border-white/10 transition-colors cursor-pointer group">
                       <div className="flex items-center space-x-3">
                         <div className="w-8 h-8 rounded bg-n-pink/10 flex items-center justify-center text-n-pink group-hover:scale-110 transition-transform">
                           <Sparkles className="w-4 h-4" />
                         </div>
                         <span className="text-sm font-exo text-gray-200 group-hover:text-white">{ach}</span>
                       </div>
                       <span className="text-[10px] text-gray-500 font-orbitron">{i+1} CYCLE AGO</span>
                     </div>
                   ))}
                 </div>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardSimulation;
