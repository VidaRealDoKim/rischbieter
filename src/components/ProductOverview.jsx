/**
 * @file Seção Sobre o Produto.
 * @description Apresenta problema, solução e benefícios reais em formato escaneável com CTA intermediário.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LineChart, Wrench } from 'lucide-react';
import SectionLayout from '@/components/common/SectionLayout';
import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { productBenefits, productOverview } from '@/content/productData';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Proteção à montante',
    description: 'Barreira física antes do hidrômetro para evitar dano por partículas sólidas.'
  },
  {
    icon: LineChart,
    title: 'Mais precisão, menos perdas',
    description: 'Preserva o desempenho de medição e reduz risco de submedição em baixas vazões.'
  },
  {
    icon: Wrench,
    title: 'Operação simplificada',
    description: 'Instalação rápida e manutenção por retrolavagem sem descarte frequente.'
  }
];

const ProductOverview = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <SectionLayout
      id="sobre-produto"
      title="Sobre o Produto"
      description={productOverview.title}
      className="py-24"
      bgClass="bg-white"
      centered={false}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
        >
          <h3 className="text-xl font-semibold text-slate-900">Visão técnica</h3>
          <p className="mt-3 leading-relaxed text-slate-700">{productOverview.technicalPitch}</p>
          <h4 className="mt-6 text-lg font-semibold text-slate-900">Visão comercial</h4>
          <p className="mt-3 leading-relaxed text-slate-700">{productOverview.commercialPitch}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{productOverview.summary}</p>
          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">Problema → Solução → Resultado</p>
            <p className="mt-2 text-sm text-slate-700">
              Partículas na rede comprometem a medição. O retentor protege o hidrômetro à montante e
              sustenta maior confiabilidade metrológica e financeira.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl border border-blue-100 bg-blue-50/60 p-5"
            >
              <item.icon className="text-blue-700" size={22} aria-hidden="true" />
              <h4 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Benefícios práticos para operação e receita</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {productBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-start lg:justify-end">
          <Button
            onClick={() => scrollToSection('contato')}
            className="bg-blue-700 text-white hover:bg-blue-800"
          >
            Falar com especialista técnico
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProductOverview;
