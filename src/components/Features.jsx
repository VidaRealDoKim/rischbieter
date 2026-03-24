/**
 * @file Componente Features - Exibe serviços e diferenciais do produto
 * @description Seção de features em grid reutilizando FeatureCard
 * Demonstra padrões de:
 * - Reutilização de componentes (FeatureCard)
 * - Dados centralizados (features array)
 * - Animações consistentes
 * - Acessibilidade adequada
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Clock, Award, TrendingUp, CheckCircle } from 'lucide-react';
import SectionLayout from '@/components/common/SectionLayout';
import FeatureCard from '@/components/common/FeatureCard';

/**
 * Array de features/serviços
 * Centralizado para facilitar manutenção e adição de novos itens
 * 
 * Cada feature contém:
 * - Icon: Componente lucide-react
 * - title: Título do feature
 * - description: Descrição longa
 */
const FEATURES_DATA = [
  {
    icon: Shield,
    title: 'Proteção do Medidor',
    description: 'Evita entrada de partículas que podem danificar o hidrômetro e comprometer a medição.'
  },
  {
    icon: Wrench,
    title: 'Fácil Instalação',
    description: 'Design otimizado para instalação rápida antes do relógio medidor, sem necessidade de ferramentas especiais.'
  },
  {
    icon: Clock,
    title: 'Maior Vida Útil',
    description: 'Preserva a vida útil do medidor, evitando desgaste prematuro e necessidade de substituições frequentes.'
  },
  {
    icon: Award,
    title: 'Qualidade Certificada',
    description: 'Fabricado em PVC rígido com corpo de 100 cm³ e área filtrante de 70 cm², seguindo normas técnicas.'
  },
  {
    icon: TrendingUp,
    title: 'Custo-Benefício',
    description: 'Investimento que se paga rapidamente através da redução de manutenções e trocas de medidores.'
  },
  {
    icon: CheckCircle,
    title: 'Manutenção Simples',
    description: 'Sistema lavável e inviolável, permitindo limpeza fácil sem comprometer a integridade do equipamento.'
  }
];

/**
 * Features - Seção de features/serviços
 * 
 * Estrutura:
 * 1. SectionLayout: Wrapper com heading/descrição
 * 2. Grid de FeatureCards: Cada feature em um card reutilizável
 * 3. Animações: Entrada escalonada dos cards
 */
const Features = () => {
  return (
    <SectionLayout
      id="servicos"
      title="Serviços e Diferenciais"
      description="Solução completa para proteção e eficiência do seu sistema de medição de água"
      bgClass="bg-white"
      className="py-20"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES_DATA.map((feature, index) => (
          <FeatureCard
            key={`feature-${index}`}
            Icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Features;