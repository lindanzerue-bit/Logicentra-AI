import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#075e54] p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                   <Bot size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Logicentra AI Agent</div>
                  <div className="text-[10px] uppercase tracking-widest text-emerald-100 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Flow */}
            <div className="h-[350px] p-6 overflow-y-auto space-y-6 bg-[#e5ddd5] dark:bg-zinc-950 relative">
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale invert" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }} />
               
               <div className="flex gap-3 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                     <Bot size={16} />
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-zinc-800 dark:text-zinc-300 leading-relaxed border border-zinc-200 dark:border-zinc-800">
                    Hello! I'm your Logicentra AI assistant. How can I help you automate your business today?
                  </div>
               </div>

               <div className="flex flex-col gap-2 pl-11 relative z-10">
                  {[
                    { text: "How much do you cost?", action: () => setMessage("Tell me about your pricing packages...") },
                    { text: "Can you automate WhatsApp?", action: () => setMessage("How does the WhatsApp automation work?") },
                    { text: "Chat with a human", action: () => window.open('https://api.whatsapp.com/send?phone=2348188508989&text=Hello! I\'d like to speak with a human about Logicentra AI.', '_blank') }
                  ].map(q => (
                    <button 
                      key={q.text} 
                      onClick={q.action}
                      className="text-left py-2 px-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 hover:border-blue-500 transition-colors shadow-sm"
                    >
                      {q.text}
                    </button>
                  ))}
               </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
               <form 
                 onSubmit={(e) => {
                   e.preventDefault();
                   if (!message.trim()) return;
                   window.open(`https://api.whatsapp.com/send?phone=2348188508989&text=${encodeURIComponent(message)}`, '_blank');
                 }}
                 className="relative"
               >
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..." 
                    className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full py-3 pl-5 pr-12 text-sm text-zinc-800 dark:text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-500"
                  />
                  <button type="submit" className="absolute right-2 top-1.5 w-9 h-9 bg-[#128c7e] text-white rounded-full flex items-center justify-center hover:bg-[#075e54] transition-colors shadow-lg">
                     <Send size={16} />
                  </button>
               </form>
               <div className="text-center mt-3 text-[10px] text-zinc-500 font-bold tracking-tight uppercase">Powered by Logicentra AI Solutions</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
              <MessageCircle size={32} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-[#25d366] flex items-center justify-center text-[10px] font-bold text-[#25d366]">1</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default memo(ChatWidget);
