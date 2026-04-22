import { memo } from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Amara Events",
      role: "Lagos, Nigeria",
      content: "Before working with Logicentra AI, I was constantly missing client messages and struggling to keep up with inquiries. Now, my bookings are automated, and clients get instant responses. I’ve literally doubled my inquiries in just a few weeks.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Emeka N.",
      role: "Service Provider",
      content: "The biggest difference for me is time. I no longer spend my day replying to the same questions or chasing leads. Everything is structured and automated. It feels like I upgraded my entire business without hiring staff.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Chioma A.",
      role: "Business Owner",
      content: "What stood out was how tailored everything was. Logicentra AI didn’t just install tools — they built a system that actually fits how my business operates. It’s clean, efficient, and delivers results.",
      image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section className="section-padding bg-[#0B0B0B] border-t border-zinc-800/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Results</h2>
          <h3 className="text-4xl font-display font-bold text-white mb-6">Trusted by Forward-Thinking Leaders</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/20 p-8 rounded-3xl border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-all relative"
            >
              <Quote className="absolute top-6 right-8 text-blue-500/10" size={48} />
              
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={16} className="fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-zinc-400 italic leading-relaxed mb-8 relative z-10">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  referrerPolicy="no-referrer"
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800" 
                />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos Marquee Placeholder */}
        <div className="mt-24 pt-20 border-t border-zinc-800/50">
           <p className="text-center text-zinc-500 text-sm font-bold uppercase tracking-widest mb-12">Empowering teams at</p>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale invert">
             {['Stripe', 'Notion', 'Intercom', 'GitHub', 'Linear'].map(logo => (
               <div key={logo} className="text-2xl font-display font-black text-white tracking-tighter">{logo}</div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SocialProof);
