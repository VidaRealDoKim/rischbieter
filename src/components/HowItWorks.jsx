/**
 * @file Seção Como Funciona.
 * @description Explica o fluxo operacional do retentor em etapas simples e visuais com CTA intermediário.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionLayout from '@/components/common/SectionLayout';
import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { howItWorksSteps } from '@/content/productData';

const HowItWorks = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <SectionLayout
      id="como-funciona"
      title="Como Funciona"
      description="Sem proteção, partículas degradam a medição. Com o retentor, o fluxo é filtrado antes do hidrômetro e o desempenho se mantém estável."
      className="py-24"
      bgClass="bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {howItWorksSteps.map((step, index) => (
          <motion.article
            key={step.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="inline-flex rounded-md bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
              Etapa {step.step}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            {index < howItWorksSteps.length - 1 && (
              <ArrowRight
                className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-blue-300 lg:block"
                size={18}
                aria-hidden="true"
              />
            )}
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-blue-100 bg-white p-5 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-700">
          Quer validar esse fluxo para sua operação? Nossa equipe técnica orienta o melhor cenário de aplicação.
        </p>
        <Button
          onClick={() => scrollToSection('contato')}
          className="bg-blue-700 text-white hover:bg-blue-800"
        >
          Solicitar avaliação técnica
        </Button>
      </div>
    </SectionLayout>
  );
};

export default HowItWorks;
