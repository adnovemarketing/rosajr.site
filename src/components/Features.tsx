import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col items-center text-center p-8 border border-navy/5 hover:border-gold/20 transition-all hover:bg-white hover:shadow-xl group"
  >
    <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
      <Icon className="text-gold group-hover:text-white transition-colors" size={32} />
    </div>
    <h3 className="text-navy font-serif text-xl mb-4">{title}</h3>
    <p className="text-navy/60 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const Features = () => {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureItem 
            icon={ShieldCheck}
            title="Tradição Institucional"
            description="Seis décadas de atuação ininterrupta, construindo um nome sinônimo de ética e segurança jurídica no mercado."
            delay={0.1}
          />
          <FeatureItem 
            icon={Zap}
            title="Modernidade Estratégica"
            description="Utilizamos as ferramentas mais avançadas de jurimetria e inteligência de dados para antecipar cenários e decisões."
            delay={0.2}
          />
          <FeatureItem 
            icon={HeartHandshake}
            title="Atendimento Personalizado"
            description="Aqui, você não é um número de processo. Cada cliente tem acesso direto aos sócios e uma estratégia sob medida."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
