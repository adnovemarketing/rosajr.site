import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    area: 'Empresarial'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '', area: 'Empresarial' });
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Pronto para sua <br />
              <span className="text-gold italic">Consulta Estratégica?</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Nossa equipe está preparada para analisar seu caso com a profundidade e o sigilo que ele exige.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gold mb-2">Endereço</h4>
                  <p className="text-white/80">Av. Paulista, 1000 — 15º Andar<br />Jardins, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gold mb-2">Telefone</h4>
                  <p className="text-white/80">+55 (11) 3000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/10">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gold mb-2">E-mail</h4>
                  <p className="text-white/80">contato@rosajr.adv.br</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 relative rounded-sm overflow-hidden h-64 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Localização" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gold text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">Ver no Google Maps</div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-sm shadow-2xl"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 className="text-gold mb-6" size={80} />
                <h3 className="text-navy font-serif text-3xl mb-4">Mensagem Enviada!</h3>
                <p className="text-navy/60 mb-8">Agradecemos o contato. Um de nossos especialistas retornará em até 24 horas úteis.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-gold font-bold uppercase tracking-widest text-sm underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-navy/40 text-[10px] uppercase tracking-widest font-bold mb-2">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-surface border-b border-navy/10 py-3 px-4 text-navy focus:border-gold outline-none transition-colors"
                    placeholder="Ex: João Silva"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy/40 text-[10px] uppercase tracking-widest font-bold mb-2">E-mail Corporativo</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-surface border-b border-navy/10 py-3 px-4 text-navy focus:border-gold outline-none transition-colors"
                      placeholder="email@empresa.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-navy/40 text-[10px] uppercase tracking-widest font-bold mb-2">Telefone / WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-surface border-b border-navy/10 py-3 px-4 text-navy focus:border-gold outline-none transition-colors"
                      placeholder="(11) 99999-9999"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy/40 text-[10px] uppercase tracking-widest font-bold mb-2">Área de Interesse</label>
                  <select 
                    className="w-full bg-surface border-b border-navy/10 py-3 px-4 text-navy focus:border-gold outline-none transition-colors appearance-none"
                    value={formState.area}
                    onChange={(e) => setFormState({...formState, area: e.target.value})}
                  >
                    <option>Empresarial</option>
                    <option>Tributário</option>
                    <option>Trabalhista</option>
                    <option>Família e Sucessões</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-navy/40 text-[10px] uppercase tracking-widest font-bold mb-2">Como podemos ajudar?</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-surface border-b border-navy/10 py-3 px-4 text-navy focus:border-gold outline-none transition-colors resize-none"
                    placeholder="Descreva brevemente sua necessidade..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-gold text-white py-5 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-navy transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Solicitar Consulta
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
