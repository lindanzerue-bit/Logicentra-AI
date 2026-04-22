import { memo } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Clock, Users, Target, XCircle } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <Target className="text-blue-500" size={24} />,
      title: "Lead Response Delay",
      description: "Losing hot leads because you can't respond to inquiries within the crucial first 5 minutes."
    },
    {
      icon: <Clock className="text-blue-500" size={24} />,
      title: "Repetitive Manual Tasks",
      description: "Spending hours on data entry, follow-ups, and scheduling instead of high-value business strategy."
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "Fragmented Client Data",
      description: "No structured system to manage clients, leading to missed opportunities and disjointed communication."
    },
    {
      icon: <AlertCircle className="text-blue-500" size={24} />,
      title: "Revenue Leakage",
      description: "Poor follow-up sequences and manual errors leading to lost revenue and missed scaling potential."
    }
  ];

  return (
    <section className="section-padding bg-bg-dark border-t border-zinc-800/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 px-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-blue-500"></span>
              The Cost of Inefficiency
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Is Your Business Struggling to Keep Up with Manual Demands?
            </h3>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-sm">
            Manual processes are the silent killers of growth. If you aren't automating, you're falling behind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{problem.title}</h4>
              <p className="text-zinc-500 leading-relaxed text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Problem);
