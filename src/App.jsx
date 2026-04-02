import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import SmartCampus from './components/SmartCampus';
import DashboardSimulation from './components/DashboardSimulation';
import AIChatbot from './components/AIChatbot';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial system boot-up
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-bg-dark flex flex-col items-center justify-center font-orbitron overflow-hidden">
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          <div className="absolute inset-0 border-t-4 border-n-blue rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-4 border-n-purple rounded-full animate-spin [animation-direction:reverse]"></div>
          <div className="absolute inset-4 border-b-4 border-n-cyan rounded-full animate-spin"></div>
          <div className="text-white text-2xl font-bold animate-pulse">NEO</div>
        </div>
        <h1 className="text-2xl text-white tracking-[0.3em] font-light">INITIALIZING SYNC_CORE...</h1>
        <div className="w-64 h-1 bg-glass-bg mt-6 rounded-full overflow-hidden">
          <div className="h-full bg-n-blue shadow-[0_0_10px_#00d2ff] animate-[progress_2.5s_ease-in-out]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark text-white relative flex flex-col pt-20 overflow-x-hidden">
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 pointer-events-none cyber-grid opacity-30 z-0"></div>
      
      {/* Animated Glowing Orbs Background */}
      <div className="fixed top-[10%] left-[10%] w-96 h-96 bg-n-blue rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse z-0"></div>
      <div className="fixed bottom-[10%] right-[10%] w-96 h-96 bg-n-purple rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse z-0" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Courses />
          <SmartCampus />
          <DashboardSimulation />
          <Contact />
        </main>
        <Footer />
        <AIChatbot />
      </div>

      <style jsx global>{`
        @keyframes progress {
          0% { width: 0%; transform: translateX(-10%); }
          50% { width: 70%; transform: translateX(0); }
          100% { width: 100%; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
