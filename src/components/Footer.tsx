import { memo } from 'react';
import { Mail, Linkedin, Twitter, MessageSquare, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white pt-24 pb-12 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20 px-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                L
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-white">
                Logicentra<span className="text-blue-500">AI</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
              We empower businesses to reach their full potential through intelligent AI systems and process automation. Reclaiming time, increasing revenue, and scaling smarter.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, MessageSquare].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 uppercase tracking-wider text-xs text-zinc-500">Solutions</h5>
            <ul className="space-y-4 text-zinc-400 font-medium">
              {['AI Chatbots', 'CRM Automations', 'Sales Funnels', 'System Audit'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h5 className="font-bold mb-6 uppercase tracking-wider text-xs text-zinc-500">Company</h5>
             <ul className="space-y-4 text-zinc-400 font-medium">
                {['Case Studies', 'Pricing', 'Blog', 'Support'].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-zinc-900 text-zinc-500 text-xs px-6">
           <div>© 2026 Logicentra AI Agency. All rights reserved.</div>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
