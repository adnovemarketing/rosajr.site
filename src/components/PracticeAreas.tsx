import React from 'react';
import { motion } from 'motion/react';
import { Building2, Users, ArrowUpRight } from 'lucide-react';

const AreaCard = ({ title, description, icon: Icon, image, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative overflow-hidden aspect-[3/4] flex flex-col justify-end p-8"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10">
      <div className="bg-gold/20 backdrop-blur-md w-14 h-14 flex items-center justify-center mb-6 border border-gold/30">
        <Icon className="text-gold" size={28} />
      </div>
      <h3 className="text-white font-serif text-3xl mb-4">{title}</h3>
      <p className="text-white/70 mb-6 line-clamp-3 group-hover:text-white transition-colors">
        {description}
      </p>
      <button className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs group/btn">
        Saiba Mais
        <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

export const PracticeAreas = () => {
  return (
    <section id="atuacao" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Nossa Expertise
          </span>
          <h2 className="text-navy font-serif text-4xl md:text-5xl mb-6">
            Soluções Jurídicas <br /> Especializadas
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AreaCard 
            title="Para Empresas"
            description="Assessoria estratégica em Direito Tributário, Societário e Trabalhista. Protegemos o seu negócio com visão preventiva e contenciosa de alto nível."
            icon={Building2}
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            delay={0.1}
          />
          <AreaCard 
            title="Para Famílias"
            description="Planejamento sucessório, inventários e direito de família. Cuidamos do seu patrimônio e das suas relações com a sensibilidade e o rigor que o tema exige."
            icon={Users}
            image="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};
