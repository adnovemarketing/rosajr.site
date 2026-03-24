import React from 'react';
import { motion } from 'motion/react';

export const Legacy = () => {
  return (
    <section id="escritorio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Fundador Rosa Jr." 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-[1px] border-gold -z-10" />
            
            <div className="absolute bottom-8 left-8 bg-navy p-6 text-white max-w-[280px]">
              <p className="font-serif italic text-lg leading-relaxed">
                "O direito não é apenas uma profissão, é um compromisso com a dignidade humana."
              </p>
              <span className="block mt-4 text-gold font-bold uppercase tracking-widest text-xs">
                Rosa Jr. — Fundador
              </span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-navy font-serif text-4xl md:text-5xl leading-tight mb-8">
              Um legado de <br />
              <span className="text-gold italic">confiança</span> e resultados.
            </h2>
            <div className="space-y-6 text-navy/70 leading-relaxed text-lg">
              <p>
                Fundado há seis décadas, o escritório Rosa Jr. Advogados consolidou-se como uma referência em soluções jurídicas complexas, mantendo sempre o atendimento personalizado como pilar central.
              </p>
              <p>
                Nossa história é marcada pela defesa intransigente dos interesses de nossos clientes, adaptando-nos às mudanças do mundo sem nunca perder os valores éticos que nos trouxeram até aqui.
              </p>
              <p className="font-medium text-navy">
                Hoje, unimos a sabedoria da experiência com o dinamismo das novas tecnologias jurídicas para oferecer uma advocacia de alta performance.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-navy/10 pt-12">
              <div>
                <span className="block text-4xl font-serif text-gold mb-2">60+</span>
                <span className="text-xs uppercase tracking-widest font-bold text-navy/50">Anos de História</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-gold mb-2">15k+</span>
                <span className="text-xs uppercase tracking-widest font-bold text-navy/50">Casos Resolvidos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
