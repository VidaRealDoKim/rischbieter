/**
 * @file Componente FeatureCard - Card reutilizável para features/benefícios
 * @description Componente padronizado para exibir features com ícone, título e descrição
 */

import React from 'react';
import { motion } from 'framer-motion';

/**
 * FeatureCard - Card para exibir feature, benefício ou diferencial
 * 
 * Fornece:
 * - Renderização dinâmica de ícone
 * - Animação de entrada com stagger
 * - Hover states interativos
 * - Padronização visual
 * 
 * @component
 * @param {Object} props - Props do componente
 * @param {React.ElementType} props.Icon - Componente de ícone (lucide-react)
 * @param {string} props.title - Título do card
 * @param {string} props.description - Descrição do card
 * @param {number} [props.index] - Índice para animação com delay
 * @param {string} [props.className] - Classes Tailwind adicionais
 * @param {string} [props.iconBgClass] - Classes para fundo do ícone
 * @param {string} [props.iconClass] - Classes para cor do ícone
 * 
 * @returns {React.ReactElement}
 * 
 * @example
 * <FeatureCard
 *   Icon={Shield}
 *   title="Proteção Total"
 *   description="Proteja seus dispositivos"
 *   index={0}
 * />
 */
const FeatureCard = ({
  Icon,
  title,
  description,
  index = 0,
  className = 'bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg',
  iconBgClass = 'bg-blue-600',
  iconClass = 'text-white'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`p-8 rounded-xl transition-shadow duration-300 ${className}`}
    >
      {/* Ícone */}
      <div className={`w-14 h-14 ${iconBgClass} rounded-lg flex items-center justify-center mb-6`}>
        <Icon className={iconClass} size={28} aria-hidden="true" />
      </div>

      {/* Título */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
