import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Escritório', href: '#escritorio' },
    { name: 'Profissionais', href: '#profissionais' },
    { name: 'Áreas de Atuação', href: '#atuacao' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <span className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? 'text-navy' : 'text-white'}`}>
            ROSA JR.
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${scrolled ? 'text-gold' : 'text-gold'}`}>
            ADVOGADOS
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5500000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gold text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            <Phone size={16} />
            Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-navy text-white p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif border-b border-white/10 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5500000000000"
              className="bg-gold text-white w-full py-4 text-center font-bold uppercase tracking-widest"
            >
              Falar com Especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
