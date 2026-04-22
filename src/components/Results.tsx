import { memo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Clock, Target, UserPlus } from 'lucide-react';

const Results = () => {
  const benefits = [
    {
      icon: <Clock size={28} />,
      stat: "10-20h",
      label: "Weekly Time Saved",
      detail: "Reclaim hours of your life by automating repetitive manual busy work."
    },
    {
      icon: <TrendingUp size={28} />,
      stat: "45%+",
      label: "Lead Conversion",
      detail: "Boosted engagement through instant, 24/7 AI responses to new inquiries."
    },
    {
      icon: <UserPlus size={28} />,
      stat: "Zero",
      label: "Missed Inquiries",
      detail: "Capture and nurture every single prospect across all channels, instantly."
    },
    {
      icon: <Target size={28} />,
      stat: "Scale",
      label: "Without Hiring",
      detail: "Grow your business volume without increasing your payroll overhead."
    }
  ];

  return (
    <section id="results" className="section-padding bg-[#0B0B0B] text-white relative border-t border-zinc-800/30">
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-blue-500 font-bold uppercase tracking-[0.2rem] text-sm mb-6">Quantifiable Impact</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-8">
              Real results for real businesses.
            </h3>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
              We don't just "chat" about AI. We build measurable systems that directly impact your bottom line and reclaim your team's time.
            </p>
            
            <div className="space-y-6">
              {[
                'Enterprise-grade security',
                'Custom training on your data',
                'Full ongoing support and management'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-blue-400 font-semibold">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 flex flex-col items-start"
              >
                <div className="p-3 bg-blue-600/10 text-blue-400 rounded-xl mb-6">
                  {benefit.icon}
                </div>
                <div className="text-4xl font-display font-bold mb-1">{benefit.stat}</div>
                <div className="text-blue-500 font-bold text-sm uppercase tracking-wider mb-4">{benefit.label}</div>
                <p className="text-zinc-500 text-sm leading-relaxed">{benefit.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Results);
