import { memo } from 'react';
import { motion } from 'motion/react';
import { Zap, CheckCircle, BarChart3, Bot, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0B0B0B]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">March Onboarding Open</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Automate Your <br/><span className="text-blue-500">Business</span> Operations
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-md">
              Logicentra AI helps you capture more leads, automate repetitive tasks, and scale your business using powerful AI systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all text-lg"
              >
                Book Free Strategy Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-800 transition-all text-lg"
              >
                Get Free AI Audit
              </motion.button>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#0B0B0B] bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-500">JD</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0B0B0B] bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-400">BS</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0B0B0B] bg-zinc-600 flex items-center justify-center text-[10px] font-bold text-zinc-300">ML</div>
              </div>
              <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest">
                <span className="block text-zinc-100 font-bold">50+ Projects Delivered</span>
                AI-Driven Growth Systems
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Visual Asset */}
            <div className="relative z-10 p-1 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                  alt="AI Core Technology" 
                  className="w-full aspect-[4/3] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                
                {/* Floating UI Elements over image */}
                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Bot size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">AI Status</div>
                      <div className="text-sm font-bold text-white">System Optimizing: 94%</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-3xl shadow-2xl border border-zinc-200 hidden md:block"
            >
              <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Total Savings</div>
              <div className="text-2xl font-black text-blue-600 tracking-tighter">1,200+ hrs</div>
            </motion.div>

            {/* Background Glows */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] -z-0"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/10 blur-[120px] -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
