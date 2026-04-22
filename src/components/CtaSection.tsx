import { memo, useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, ArrowRight, Shield, ChevronLeft, ChevronRight, Clock, CheckCircle2 } from 'lucide-react';

const CtaSection = () => {
  const [step, setStep] = useState<'date' | 'time' | 'email' | 'confirm'>('date');
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date();
  const currentMonthName = viewDate.toLocaleString('default', { month: 'long' });
  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  // Adjust for Mon-Sun grid (0 = Sun, so we want Mon-Sun: 1 2 3 4 5 6 0)
  const emptySlots = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  const handleMonthChange = (direction: number) => {
    setViewDate(new Date(currentYear, currentMonth + direction, 1));
  };

  const resetBooking = () => {
    setStep('date');
    setSelectedDate(null);
    setSelectedTime(null);
    setEmail('');
  };

  const finalizeBooking = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !selectedDate || !selectedTime) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          date: `${currentMonthName} ${selectedDate}, ${currentYear}`,
          time: selectedTime
        })
      });

      if (response.ok) {
        setStep('confirm');
      } else {
        console.error('Booking failed');
        alert("There was an issue processing your booking. Please try again.");
      }
    } catch (err) {
      console.error('Booking error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-call" className="section-padding bg-[#0B0B0B] relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Ready to Automate and <br/><span className="text-blue-500">Scale</span> Your Business?
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Join the forward-thinking business owners who are reclaiming their time and maximizing revenue with Logicentra AI.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-10 backdrop-blur-sm flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <CalendarIcon className="text-blue-500" /> Book Your Strategy Call
            </h3>
            
            <div className="space-y-6 mb-10">
               {[
                 "30-minute deep dive into your operations",
                 "Custom automation gap identification",
                 `Scaled roadmap for ${currentYear + 1} growth`,
                 "Direct access to our lead engineers"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-zinc-300">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                       <ArrowRight size={12} className="text-blue-400" />
                    </div>
                    {item}
                 </div>
               ))}
            </div>

            <button 
              onClick={() => document.getElementById('booking-interface')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white text-black py-5 rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              Select Time Slot <CalendarIcon size={20} />
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
               <Shield size={14} className="text-blue-500" /> Secure • No Commitment
            </div>
          </motion.div>

          <motion.div 
            id="booking-interface"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] overflow-hidden min-h-[550px] relative backdrop-blur-xl flex flex-col"
          >
             <div className="p-8 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="font-bold">{currentMonthName} {currentYear}</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Standard Time (GMT+0)</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleMonthChange(-1)}
                    className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => handleMonthChange(1)}
                    className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
             </div>

             <div className="flex-1 p-8">
                <AnimatePresence mode="wait">
                  {step === 'date' && (
                    <motion.div 
                      key="date"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d}>{d}</div>)}
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: emptySlots }).map((_, i) => (
                          <div key={`empty-${i}`} className="aspect-square" />
                        ))}
                        {daysArray.map(d => {
                          const isSelected = selectedDate === d;
                          const dateObj = new Date(currentYear, currentMonth, d);
                          const isDisabled = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                          
                          return (
                            <button
                              key={d}
                              disabled={isDisabled}
                              onClick={() => {
                                setSelectedDate(d);
                                setStep('time');
                              }}
                              className={`
                                aspect-square rounded-xl text-sm font-bold transition-all flex items-center justify-center border
                                ${isDisabled ? 'text-zinc-800 border-transparent cursor-not-allowed opacity-20' : 
                                  isSelected ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20' : 
                                  'text-zinc-300 border-zinc-800 hover:border-blue-500 hover:text-blue-400 bg-zinc-900/50'}
                              `}
                            >
                              {d}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 'time' && (
                    <motion.div 
                      key="time"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <button 
                        onClick={() => setStep('date')}
                        className="text-blue-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        <ChevronLeft size={14} /> Back to dates
                      </button>
                      <div className="text-white font-bold text-lg mb-4">Available times for {currentMonthName} {selectedDate}</div>
                      <div className="grid grid-cols-2 gap-3">
                         {times.map(t => (
                           <button
                             key={t}
                             onClick={() => {
                               setSelectedTime(t);
                               setStep('email');
                             }}
                             className="py-4 px-6 bg-zinc-800/50 border border-zinc-800 rounded-xl text-zinc-300 text-sm font-bold hover:border-blue-500 hover:text-white transition-all text-center"
                           >
                             {t}
                           </button>
                         ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'email' && (
                    <motion.div 
                      key="email"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <button 
                        onClick={() => setStep('time')}
                        className="text-blue-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        <ChevronLeft size={14} /> Back to times
                      </button>
                      <div className="text-white font-bold text-lg mb-4">Confirm your details</div>
                      <form onSubmit={finalizeBooking} className="space-y-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Email Address</label>
                          <input 
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-zinc-800/50 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : 'Finalize Booking'}
                        </button>
                      </form>
                      <p className="text-[10px] text-zinc-500 text-center uppercase tracking-widest leading-relaxed">
                        By confirming, you agree to receive a calendar invitation and one follow-up reminder.
                      </p>
                    </motion.div>
                  )}

                  {step === 'confirm' && (
                    <motion.div 
                      key="confirm"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center h-64 space-y-4"
                    >
                      <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle2 size={40} />
                      </div>
                      <h4 className="text-2xl font-bold text-white">Booking Confirmed!</h4>
                      <p className="text-zinc-400 text-sm">
                        {currentMonthName} {selectedDate}, {currentYear} at {selectedTime}<br/>
                        A calendar invite has been sent to your email.
                      </p>
                      <button 
                         onClick={resetBooking}
                         className="text-blue-500 text-xs font-bold uppercase tracking-widest pt-4 hover:text-blue-400"
                      >
                        Book another session
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
             
             <div className="p-6 bg-zinc-900/30 border-t border-zinc-800 text-center">
                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Logicentra Scheduler v2.4</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(CtaSection);
