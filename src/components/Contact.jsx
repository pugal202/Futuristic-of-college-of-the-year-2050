import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Focus } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('transmitting');
    setTimeout(() => {
      setStatus('completed');
      setTimeout(() => setStatus(null), 3000);
    }, 2000);
  };

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="glass-card rounded-2xl p-8 md:p-12 border-t-2 border-n-pink/40 shadow-[0_0_50px_rgba(255,0,160,0.1)] relative overflow-hidden">
          
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div>
              <div className="inline-flex items-center space-x-2 text-n-pink font-orbitron tracking-widest text-xs uppercase mb-4">
                <Focus className="w-4 h-4" />
                <span>Comm Channel</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6 uppercase text-glow-purple">
                Establish <br/> <span className="text-n-pink">Link</span>
              </h2>
              <p className="text-gray-400 font-exo text-sm leading-relaxed mb-8">
                Transmit your coordinates and neural frequency to receive an invitation to the next onboarding phase. 
                Our algorithms are ready to process your application.
              </p>
              
              <div className="space-y-4">
                 <div className="flex items-center space-x-4 text-gray-300 border border-white/5 p-4 rounded hover:border-n-pink/30 hover:bg-n-pink/5 transition-all cursor-pointer">
                   <Mail className="w-5 h-5 text-n-pink" />
                   <span className="font-orbitron text-xs tracking-widest uppercase">nexus@neoversity.edu</span>
                 </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="relative group">
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded p-4 text-white font-exo focus:outline-none focus:border-n-pink/50 peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-500 font-orbitron text-xs tracking-widest uppercase transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-n-pink peer-valid:-top-2 peer-valid:text-[10px] peer-valid:text-n-pink bg-bg-dark px-1">
                  Designation / Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded p-4 text-white font-exo focus:outline-none focus:border-n-pink/50 peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-500 font-orbitron text-xs tracking-widest uppercase transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-n-pink peer-valid:-top-2 peer-valid:text-[10px] peer-valid:text-n-pink bg-bg-dark px-1">
                  Neural COM / Email
                </label>
              </div>

              <button 
                type="submit" 
                disabled={status !== null}
                className={`p-4 rounded font-orbitron font-bold tracking-widest uppercase transition-all flex justify-center items-center
                  ${status === null ? 'bg-n-pink text-white hover:bg-white hover:text-black box-glow' : ''}
                  ${status === 'transmitting' ? 'bg-transparent border border-n-cyan text-n-cyan' : ''}
                  ${status === 'completed' ? 'bg-green-500 text-white' : ''}
                `}
              >
                {status === null && "Transmit Signal"}
                {status === 'transmitting' && <span className="animate-pulse">Transmitting...</span>}
                {status === 'completed' && "Signal Received"}
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
