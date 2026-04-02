import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Fingerprint, Mic } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Explore', 'Academics', 'Nexus', 'Campus', 'Holography'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b-none py-3 backdrop-blur-xl bg-black/40' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <Hexagon className="w-8 h-8 text-n-blue group-hover:text-n-purple transition-colors duration-300 drop-shadow-[0_0_10px_#00d2ff]" />
          <span className="font-orbitron font-bold text-xl tracking-wider uppercase text-glow hidden sm:block">
            Neoversity
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-exo">
          {menuItems.map((item, idx) => (
            <a key={idx} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-n-cyan transition-colors duration-300 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-n-cyan rounded transition-all duration-300 group-hover:w-full hidden group-hover:block drop-shadow-[0_0_8px_#00ffcc] animate-[glow_1s_ease-in-out_infinite_alternate]"></span>
            </a>
          ))}
          
          <button className="flex items-center space-x-2 px-5 py-2 rounded-lg border border-n-blue/50 box-glow hover:bg-n-blue/10 transition-all duration-300 cursor-pointer">
            <Fingerprint className="w-4 h-4 text-n-blue" />
            <span className="text-sm font-orbitron tracking-widest text-n-blue">SYNC LINK</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-n-cyan transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card border-t border-n-blue/20 backdrop-blur-2xl">
          <div className="flex flex-col space-y-4 px-6 py-6 font-orbitron">
            {menuItems.map((item, idx) => (
              <a key={idx} href={`#${item.toLowerCase()}`} className="text-sm tracking-wider text-gray-300 hover:text-n-blue p-2 rounded hover:bg-n-blue/10 transition-colors" onClick={() => setIsOpen(false)}>
                {item}
              </a>
            ))}
            <button className="flex justify-center items-center space-x-2 px-5 py-3 mt-4 rounded border border-n-blue box-glow">
              <Fingerprint className="w-4 h-4 text-n-blue" />
              <span className="text-sm text-n-blue">NEURO-SYNC</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
