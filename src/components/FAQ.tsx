import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How long does setup take?",
      answer: "A typical automation build takes between 7 to 14 days from the strategy session to full deployment. More complex ecosystem builds can take up to 4 weeks."
    },
    {
      question: "Is this suitable for small businesses?",
      answer: "Absolutely. In fact, small businesses often see the highest ROI as automation allows them to compete with much larger teams without the massive payroll overhead."
    },
    {
      question: "Do I need technical skills?",
      answer: "Zero technical skills are required on your part. We handle the entire engineering process, API connections, and training. You just enjoy the results."
    },
    {
      question: "What results can I expect?",
      answer: "You can expect to reclaim 10-20 hours of manual work per week, zero missed inquiries through instant AI responses, and a significant increase in lead-to-booking conversion rates within the first 30 days."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#0B0B0B] border-t border-zinc-800/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 text-center">Answers</h2>
          <h3 className="text-4xl font-display font-bold text-white mb-6 text-center">Frequently Asked Questions</h3>
          <p className="text-zinc-400 text-center">Everything you need to know about partnering with Logicentra AI.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-zinc-900/30 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
                aria-expanded={activeIndex === i}
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-500">
                    <HelpCircle size={20} />
                  </div>
                  <span className="font-bold text-white md:text-lg">{faq.question}</span>
                </div>
                <div className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
                   {activeIndex === i ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-zinc-600" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-16 pb-8 text-zinc-400 leading-relaxed bg-zinc-900/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-zinc-900 border border-zinc-800 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
             <div className="font-bold text-white text-lg">Still have questions?</div>
             <div className="text-zinc-500">Contact our support team for any custom inquiries.</div>
          </div>
          <button className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-zinc-200 transition-all">
            Get Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(FAQ);
