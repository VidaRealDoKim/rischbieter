/**
 * @file Seção Aplicações.
 * @description Mostra cenários reais de uso por segmento e direciona para contato técnico.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Home, Landmark } from 'lucide-react';
import SectionLayout from '@/components/common/SectionLayout';
import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { applications } from '@/content/productData';

const icons = [Landmark, Building2, Home, Factory];

const Applications = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <SectionLayout
      id="aplicacoes"
      title="Aplicações"
      description="Da ligação residencial à operação em escala: aplicação prática com foco em confiabilidade e redução de perdas aparentes."
      className="py-24"
      bgClass="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {applications.map((app, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.article
              key={app.segment}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Icon className="text-blue-700" size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{app.segment}</h3>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-blue-700">
                Aplicação recomendada
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {app.examples.map((example) => (
                  <li key={example} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-slate-700">
          Quer priorizar os pontos de maior impacto no seu sistema? Nossa equipe ajuda no desenho da implantação.
        </p>
        <Button
          onClick={() => scrollToSection('contato')}
          className="mt-4 bg-blue-700 text-white hover:bg-blue-800 sm:mt-0"
        >
          Falar com especialista
        </Button>
      </div>
    </SectionLayout>
  );
};

export default Applications;
