import { memo } from 'react';
import { motion } from 'motion/react';
import { Calendar, Search, Rocket, ChevronRight, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Calendar size={32} />,
      title: "Book Strategy Call",
      description: "We meet for 30 minutes to understand your specific workflow and business goals."
    },
    {
      icon: <Search size={32} />,
      title: "Identify Gaps",
      description: "Our experts analyze your current processes to find exactly where automation can save you time."
    },
    {
      icon: <Rocket size={32} />,
      title: "Build & Deploy",
      description: "We build, test, and deploy your custom AI ecosystem within 14 days of our session."
    }
  ];

  return (
    <section id="process" className="section-padding bg-[#0B0B0B] border-t border-zinc-800/30 relative overflow-hidden">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
          alt="" 
          className="w-full h-full object-cover grayscale" 
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">The Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">3 Steps to Full Automation</h3>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-px bg-zinc-800 -z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center text-blue-500 shadow-xl mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2 z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black text-sm font-bold shadow-lg">
                  0{i + 1}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
              <p className="text-zinc-400 max-w-xs">{step.description}</p>
              
              {i < steps.length - 1 && (
                <div className="md:hidden mt-8 text-zinc-800">
                  <ChevronRight size={32} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-blue-900/40 text-lg flex items-center justify-center gap-3 mx-auto cursor-pointer"
            >
              Get Started Now <ArrowRight size={22} />
            </motion.button>
        </div>
      </div>
    </section>
  );
};

export default memo(Process);
