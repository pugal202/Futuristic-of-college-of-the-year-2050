import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Send, X, Terminal, Maximize2 } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Initializing neural link... I am Neoversity AI Guide. Query?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    
    // Simulate thinking delay
    setTimeout(() => {
      const response = generateAIResponse(input);
      setMessages(prev => [...prev, { sender: 'ai', text: response }]);
    }, 1000);
  };

  const generateAIResponse = (req) => {
    const r = req.toLowerCase();
    if (r.includes('course') || r.includes('learn')) return 'Accessing Nexus database... Recommending Lvl 4 Cybernetic Enhancements for your profile.';
    if (r.includes('tour') || r.includes('ar')) return 'Initiating AR mode. Please ensure your cerebral implant is calibrated.';
    if (r.includes('hello') || r.includes('hi')) return 'Greetings, organic being. Ready for synchronization?';
    return 'Processing parameter... Data insufficient. Please refine query or connect to local node.';
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-n-cyan text-black shadow-[0_0_20px_#00ffcc] hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'block animate-pulse'}`}
      >
        <Cpu className="w-8 h-8" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-8 right-8 z-50 w-[350px] md:w-[400px] h-[500px] glass-card border-n-cyan/50 shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-n-cyan/20 to-transparent border-b border-n-cyan/20 flex justify-between items-center backdrop-blur-xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-n-cyan/20 flex items-center justify-center border border-n-cyan relative">
                   <Cpu className="w-4 h-4 text-n-cyan" />
                   <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-green-400 shadow-[0_0_5px_#4ade80] animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-n-cyan tracking-wider text-sm">NEO-GUIDE V.9</h4>
                  <p className="text-[10px] text-gray-400 font-exo uppercase tracking-widest leading-none mt-1">Status: Active</p>
                </div>
              </div>
              <div className="flex space-x-2">
                 <button className="text-gray-400 hover:text-white transition-colors"><Maximize2 className="w-4 h-4" /></button>
                 <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-n-pink transition-colors"><X className="w-5 h-5" /></button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4 scrollbar-thin scrollbar-thumb-n-cyan/20 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={idx} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-lg p-3 font-exo text-sm shadow-md 
                    ${msg.sender === 'user' 
                      ? 'bg-n-purple/20 border border-n-purple/30 text-white rounded-br-none' 
                      : 'bg-black/60 border border-n-cyan/30 text-n-cyan rounded-bl-none'}`}
                  >
                    {msg.sender === 'ai' && <Terminal className="w-3 h-3 mb-1 opacity-50" />}
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-n-cyan/20 bg-black/40 flex items-center space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="INPUT QUERY..." 
                className="flex-1 bg-transparent border border-white/10 rounded px-3 py-2 text-sm font-orbitron placeholder:text-gray-600 focus:outline-none focus:border-n-cyan/50 text-white tracking-widest uppercase transition-colors"
                autoComplete="off"
              />
              <button 
                type="submit" 
                className="p-2 bg-n-cyan/20 text-n-cyan rounded hover:bg-n-cyan hover:text-black transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
