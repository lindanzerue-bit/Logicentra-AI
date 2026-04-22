import { memo } from 'react';
import { motion } from 'motion/react';
import { Check, Calendar } from 'lucide-react';

const OfferSection = () => {
  const points = [
    "Personalized automation strategy",
    "Identify revenue leaks and manual bottlenecks",
    "Custom implementation roadmap",
    "No-obligation project quote"
  ];

  return (
    <section id="offer" className="section-padding bg-[#0B0B0B] overflow-hidden border-t border-zinc-800/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20 rounded-full">
                Limited Time Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
                 Get Your Free AI Automation Audit
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Stop guessing. Let our experts provide a 30-minute deep-dive into your business to identify the exact points where AI will boost your revenue.
              </p>
              
              <ul className="space-y-4 mb-10">
                {points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-blue-400" />
                    </div>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 text-lg"
                >
                  Book My Free Audit <Calendar size={20} />
                </motion.button>
                <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                   Only 3 slots left for March onboarding
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 backdrop-blur-md p-4 rounded-3xl border border-zinc-700 hidden md:block group hover:bg-zinc-800 transition-colors">
              <div className="aspect-[4/5] bg-zinc-900 rounded-2xl relative overflow-hidden border border-zinc-700">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                  alt="AI Strategy Roadmap" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/40" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-xl shadow-blue-500/20">
                    <Check size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-wide text-white">Custom Roadmap</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    We map out every touchpoint where AI can reclaim your time and scale your revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(OfferSection);
