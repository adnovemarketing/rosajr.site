import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              60 Anos de Excelência Jurídica
            </span>
            <h1 className="text-white font-serif text-5xl md:text-7xl leading-tight mb-8">
              Tradição que <br />
              <span className="italic text-gold">evolui</span> com você.
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
              Soluções jurídicas estratégicas para empresas e famílias, unindo o legado de gerações à modernidade do direito contemporâneo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#atuacao" 
                className="bg-gold text-white px-8 py-4 rounded-sm font-bold uppercase tracking-[0.15em] text-sm hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 group"
              >
                Nossas Áreas
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contato" 
                className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-[0.15em] text-sm hover:bg-white/10 transition-all text-center"
              >
                Consulta Estratégica
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};
