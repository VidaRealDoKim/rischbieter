/**
 * @file Componente Hero - Seção principal (acima da dobra)
 * @description First impression da página com title, descrição, CTA e imagem
 * 
 * Funcionalidades:
 * - Animações de entrada suave
 * - Layout responsivo (coluna em mobile, 2 colunas em desktop)
 * - CTAs diretos (Ver especificações, Solicitar orçamento)
 * - Indicador de eficiência animado
 * - Acessibilidade adequada
 */

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Droplet, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company } from '@/content/company';
import { COMMON_VARIANTS } from '@/constants/animations';
import { useScrollToSection } from '@/hooks/useScrollToSection';

/**
 * HeroFeature - Componente pequeno para features do hero
 * Reutilizável com ícone, texto
 */
const HeroFeature = ({ icon: Icon, label }) => (
  <div className="flex items-center space-x-2">
    <Icon className="text-blue-600" size={20} />
    <span className="text-gray-700 font-medium">{label}</span>
  </div>
);

/**
 * EfficiencyBadge - Badge com indicador de eficiência (animado)
 * Posicionado absolutamente na imagem
 */
const EfficiencyBadge = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: 'spring' }}
    className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs"
  >
    <div className="text-sm text-gray-600 mb-1">Eficiência Comprovada</div>
    <div className="text-2xl font-bold text-blue-600">99.9%</div>
    <div className="text-xs text-gray-500 mt-1">Retenção de partículas</div>
  </motion.div>
);

/**
 * Hero - Seção hero principal
 */
const Hero = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <section
      id="produto"
      className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white"
      aria-labelledby="hero-titulo"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Conteúdo */}
          <motion.div
            initial={COMMON_VARIANTS.fadeInLeft.initial}
            animate={COMMON_VARIANTS.fadeInLeft.animate}
            transition={COMMON_VARIANTS.fadeInLeft.transition}
          >
            {/* Badge com categoria */}
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Solução Profissional para Medição de Água
            </div>

            {/* Título */}
            <h1
              id="hero-titulo"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Retentor de Partículas
            </h1>

            {/* Descrição */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Proteja seu sistema de medição com tecnologia avançada. Instalação antes do
              relógio medidor para máxima eficiência e durabilidade.
            </p>

            {/* Features do Hero */}
            <div className="flex flex-wrap gap-4 mb-8">
              <HeroFeature icon={Shield} label="Proteção Total" />
              <HeroFeature icon={Droplet} label="Fácil Manutenção" />
              <HeroFeature icon={Settings} label="Instalação Simples" />
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('especificacoes')}
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Ver Especificações
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('contato')}
                size="lg"
                variant="outline"
                className="text-gray-700 hover:text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </motion.div>

          {/* Coluna Direita: Imagem */}
          <motion.div
            initial={COMMON_VARIANTS.fadeInRight.initial}
            animate={COMMON_VARIANTS.fadeInRight.animate}
            transition={{ ...COMMON_VARIANTS.fadeInRight.transition, delay: 0.2 }}
            className="relative"
          >
            {/* Imagem do diagrama */}
            <figure className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={company.heroImage}
                alt="Diagrama técnico do retentor de partículas"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                width="1200"
                height="760"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </figure>

            {/* Badge de eficiência */}
            <EfficiencyBadge />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;