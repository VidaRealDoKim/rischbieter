/**
 * @file Componente Footer - Rodapé da aplicação
 * @description Footer com informações de contato, horários e copyright
 * 
 * Funcionalidades:
 * - Layout em 3 colunas (Info, Contato, Horários)
 * - Ícones Lucide para melhor visual
 * - Copyright dinâmico com ano
 * - Acessibilidade completa
 * - Logo repetido para reforço de marca
 */

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { company } from '@/content/company';

/**
 * FooterColumn - Componente wrapper para coluna do footer
 */
const FooterColumn = ({ title, children }) => (
  <div>
    {title && <h3 className="font-bold text-lg mb-4">{title}</h3>}
    {children}
  </div>
);

/**
 * ContactItem - Item de contato com ícone
 */
const ContactItem = ({ icon: Icon, children }) => (
  <div className="flex items-center space-x-3 text-gray-400">
    <Icon size={18} aria-hidden="true" />
    <span>{children}</span>
  </div>
);

/**
 * Footer - Rodapé da aplicação
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900 text-white py-12"
      aria-label="Rodapé institucional"
    >
      <div className="container mx-auto px-4">
        {/* Grid de 3 colunas */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1: Logo, Nome e Descrição */}
          <FooterColumn>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg">{company.shortName}</div>
                <div className="text-xs text-gray-400">ENGENHARIA LTDA</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              {company.institucionalText}
            </p>
          </FooterColumn>

          {/* Coluna 2: Contato */}
          <FooterColumn title="Contato">
            <div className="space-y-3">
              <ContactItem icon={Mail}>{company.email}</ContactItem>
              <ContactItem icon={Phone}>{company.phone}</ContactItem>
              <ContactItem icon={MapPin}>{company.address}</ContactItem>
            </div>
          </FooterColumn>

          {/* Coluna 3: Horários */}
          <FooterColumn title="Horário de Atendimento">
            <div className="text-gray-400 space-y-2 text-sm">
              <p>Segunda a Sexta</p>
              <p className="font-semibold text-white">8h às 18h</p>
            </div>
          </FooterColumn>
        </div>

        {/* Divisor e Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} {company.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;