import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight text-navy">
                ROSA JR.
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold">
                ADVOGADOS
              </span>
            </div>
            <p className="text-navy/50 text-sm leading-relaxed">
              Excelência jurídica e compromisso ético desde 1966. Tradição que evolui com você.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#escritorio" className="text-navy/60 hover:text-gold text-sm transition-colors">O Escritório</a></li>
              <li><a href="#profissionais" className="text-navy/60 hover:text-gold text-sm transition-colors">Profissionais</a></li>
              <li><a href="#atuacao" className="text-navy/60 hover:text-gold text-sm transition-colors">Áreas de Atuação</a></li>
              <li><a href="#diferenciais" className="text-navy/60 hover:text-gold text-sm transition-colors">Diferenciais</a></li>
              <li><a href="#contato" className="text-navy/60 hover:text-gold text-sm transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-6">Especialidades</h4>
            <ul className="space-y-4">
              <li className="text-navy/60 text-sm">Direito Tributário</li>
              <li className="text-navy/60 text-sm">Direito Societário</li>
              <li className="text-navy/60 text-sm">Planejamento Sucessório</li>
              <li className="text-navy/60 text-sm">Direito do Trabalho</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-6">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-gold hover:text-white hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy/30 text-[10px] uppercase tracking-widest">
            © 2026 Rosa Jr. Advogados. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-navy/30 text-[10px] uppercase tracking-widest hover:text-gold">Privacidade</a>
            <a href="#" className="text-navy/30 text-[10px] uppercase tracking-widest hover:text-gold">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
