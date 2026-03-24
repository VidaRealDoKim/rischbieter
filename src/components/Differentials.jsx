/**
 * @file Seção Diferenciais.
 * @description Destaca vantagens competitivas do produto em cards para leitura rápida.
 */

import React from 'react';
import SectionLayout from '@/components/common/SectionLayout';
import FeatureCard from '@/components/common/FeatureCard';
import { Sparkles, Shield, Gauge, Wrench, ScanSearch, Layers } from 'lucide-react';
import { differentials } from '@/content/productData';

const icons = [Sparkles, Shield, Gauge, Wrench, ScanSearch, Layers];

const Differentials = () => {
  return (
    <SectionLayout
      id="diferenciais"
      title="Diferenciais"
      description="Mais que um filtro: uma solução de engenharia para reduzir perdas e preservar ativos de medição."
      className="py-20"
      bgClass="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item, index) => (
          <FeatureCard
            key={item.title}
            Icon={icons[index % icons.length]}
            title={item.title}
            description={item.description}
            index={index}
            className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 hover:shadow-lg"
            iconBgClass="bg-blue-700"
            iconClass="text-white"
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Differentials;
