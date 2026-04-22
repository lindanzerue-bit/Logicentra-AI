import { memo } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#process' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-dark/80 backdrop-blur-md border-b border-zinc-800/50 py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-600/20">
            L
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            Logicentra<span className="text-blue-500">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
          >
            Book Free Strategy Call
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 p-6 shadow-2xl md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold mt-4 shadow-lg shadow-blue-900/20 uppercase tracking-wider text-sm"
          >
            Book Free Call
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default memo(Navbar);
