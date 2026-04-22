import { memo } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, MousePointerClick, Database, Mail, ArrowRight } from 'lucide-react';

const Solution = () => {
  const services = [
    {
      icon: <MessageSquare size={24} />,
      title: "Omnichannel AI Chatbots",
      description: "Custom-trained AI agents for WhatsApp, Website, and Instagram that handle support and sales 24/7.",
      tags: ["WhatsApp", "Website", "Instagram"]
    },
    {
      icon: <MousePointerClick size={24} />,
      title: "Lead Capture Funnels",
      description: "Automated systems that grab lead data and qualify prospects before they even speak to your team.",
      tags: ["Conversion Focused", "Auto-Qualifier"]
    },
    {
      icon: <Database size={24} />,
      title: "CRM Automation Systems",
      description: "Deep integrations that bridge your leads to your CRM. Never manually enter a lead again.",
      tags: ["HubSpot", "Salesforce", "Pipedrive"]
    },
    {
      icon: <Mail size={24} />,
      title: "Automated Follow-ups",
      description: "Hyper-personalized email and SMS sequences that nurture leads until they book a meeting.",
      tags: ["Email", "SMS", "Nurturing"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-[#0B0B0B] text-white border-t border-zinc-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Solutions
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold leading-tight"
          >
             We build smart AI systems that run your business operations 24/7.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-zinc-900/40 p-10 rounded-3xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group flex flex-col items-start gap-6 cursor-pointer"
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold font-display text-white">{service.title}</h4>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-zinc-800/80 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-400 border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="flex items-center gap-2 text-blue-500 font-bold text-sm mt-auto hover:text-blue-400 transition-colors">
                Learn how it works <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Solution);
