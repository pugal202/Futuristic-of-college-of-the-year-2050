import React from 'react';
import { Hexagon, Globe, Radio, Monitor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/50 relative z-10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 group cursor-pointer mb-6 max-w-max">
              <Hexagon className="w-8 h-8 text-n-blue group-hover:text-n-purple transition-colors duration-300" />
              <span className="font-orbitron font-bold text-xl tracking-wider uppercase text-white">
                Neoversity
              </span>
            </div>
            <p className="text-gray-400 font-exo max-w-sm mb-6">
              Engineering the minds of tomorrow. Merging human intelligence with advanced computational reality since 2050.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-n-blue hover:border-n-blue hover:bg-n-blue/10 transition-colors">
                <Radio className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-n-purple hover:border-n-purple hover:bg-n-purple/10 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-colors">
                <Monitor className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white uppercase tracking-widest mb-6">Protocols</h4>
            <ul className="space-y-3 font-exo text-gray-400 text-sm">
              <li><a href="#" className="hover:text-n-blue transition-colors">Admission Override</a></li>
              <li><a href="#" className="hover:text-n-blue transition-colors">Curriculum Matrices</a></li>
              <li><a href="#" className="hover:text-n-blue transition-colors">Neural Upgrades</a></li>
              <li><a href="#" className="hover:text-n-blue transition-colors">Financial Synergies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-white uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3 font-exo text-gray-400 text-sm">
              <li><a href="#" className="hover:text-n-pink transition-colors">Cyber-Law Compliance</a></li>
              <li><a href="#" className="hover:text-n-pink transition-colors">Data Privacy Shield</a></li>
              <li><a href="#" className="hover:text-n-pink transition-colors">Cookie Tracking Params</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-orbitron text-gray-600 tracking-widest uppercase">
          <p>&copy; 2050 NEOVERSITY ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-n-blue animate-pulse"></div>
            <span>Global Net: Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
