/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Process from './components/Process';
import Results from './components/Results';
import SocialProof from './components/SocialProof';
import OfferSection from './components/OfferSection';
import FAQ from './components/FAQ';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-white overflow-x-hidden bg-[#0B0B0B]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[70]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Results />
        <SocialProof />
        <OfferSection />
        <FAQ />
        <CtaSection />
      </main>

      <Footer />
      
      <ChatWidget />

      {/* Sticky Book Call Button - Mobile Only */}
      <div className="md:hidden fixed bottom-6 left-6 right-24 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2"
        >
          Book Strategy Call <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
        </motion.button>
      </div>
    </div>
  );
}

