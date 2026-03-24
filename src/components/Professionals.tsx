import React from 'react';
import { motion } from 'motion/react';

const ProfessionalCard = ({ name, role, specialty, image, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group"
  >
    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface grayscale hover:grayscale-0 transition-all duration-500 border border-navy/5">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 border-[1px] border-gold/0 group-hover:border-gold/30 transition-all duration-500 m-4" />
    </div>
    <div className="text-center">
      <h3 className="text-navy font-serif text-2xl mb-1">{name}</h3>
      <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-3">{role}</p>
      <div className="w-8 h-[1px] bg-navy/10 mx-auto mb-3" />
      <p className="text-navy/50 text-sm italic">{specialty}</p>
    </div>
  </motion.div>
);

export const Professionals = () => {
  const team = [
    {
      name: "João Batista Rosa Junior",
      role: "Sócio Administrador do Escritório",
      specialty: "Área de família, sucessões e negócios",
      image: "https://i.postimg.cc/y8fYFdK6/01-joao-batista-rosa-jr-b.png"
    },
    {
      name: "Vitor Hugo Colino Vono",
      role: "Advogado Associado",
      specialty: "Direito do Trabalho",
      image: "https://i.postimg.cc/sgnDpXzg/02-vitor-hugo-colino-vono-b.png"
    },
    {
      name: "Anaísa Esteves",
      role: "Advogada Associada",
      specialty: "Direito Tributário",
      image: "https://i.postimg.cc/GmMhk2Rc/03-anaisa-esteves-b.png"
    }
  ];

  return (
    <section id="profissionais" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Corpo Jurídico
          </span>
          <h2 className="text-navy font-serif text-4xl md:text-5xl mb-6">
            Nossos Profissionais
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, index) => (
            <ProfessionalCard 
              key={member.name}
              {...member}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
