/**
 * @file Componente SectionLayout - Layout base para todas as seções
 * @description Padroniza a estrutura de seções (heading, children, etc)
 * Reduz repetição de código e garante consistência visual
 */

import React from 'react';
import { motion } from 'framer-motion';
import { COMMON_VARIANTS } from '@/constants/animations';

/**
 * SectionLayout - Componente wrapper para seções da página
 * 
 * Fornece:
 * - Container com classe e fundo padronizados
 * - Heading e descrição centralizados
 * - Animações de entrada consistentes
 * - Acessibilidade (aria-labelledby)
 * 
 * @component
 * @param {Object} props - Props do componente
 * @param {string} props.id - ID da seção (used for navigation)
 * @param {string} props.title - Título da seção
 * @param {string} [props.description] - Descrição/subtítulo da seção
 * @param {React.ReactNode} props.children - Conteúdo da seção
 * @param {string} [props.className] - Classes Tailwind adicionais
 * @param {string} [props.bgClass] - Classes Tailwind para fundo
 * @param {boolean} [props.centered=true] - Centralizar heading
 * 
 * @returns {React.ReactElement}
 * 
 * @example
 * <SectionLayout
 *   id="features"
 *   title="Recursos Principais"
 *   description="Tudo que você precisa"
 *   bgClass="bg-white"
 * >
 *   <div className="grid...">Conteúdo</div>
 * </SectionLayout>
 */
const SectionLayout = ({
  id,
  title,
  description,
  children,
  className = 'py-20',
  bgClass = 'bg-white',
  centered = true
}) => {
  const headingId = `${id}-titulo`;

  return (
    <section
      id={id}
      className={`${bgClass} ${className}`}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto px-4">
        {/* Header da seção com título e descrição */}
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={centered ? 'text-center mb-16' : 'mb-16'}
          >
            <h2
              id={headingId}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              {title}
            </h2>
            {description && (
              <p
                className={`text-xl text-gray-600 leading-relaxed ${
                  centered ? 'max-w-3xl mx-auto' : ''
                }`}
              >
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Conteúdo da seção */}
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
