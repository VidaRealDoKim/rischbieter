/**
 * @file Seção de Dados Técnicos em tabela.
 * @description Organiza especificações para leitura rápida e apoio à tomada de decisão técnica.
 */

import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '@/components/common/SectionLayout';
import { technicalTableRows } from '@/content/productData';

const keySpecs = [
  { label: 'Área filtrante', value: 'até 90 cm²' },
  { label: 'Granulometria', value: '0,2 mm e 1 mm' },
  { label: 'Retenção', value: 'até 130 cm³' },
  { label: 'Garantia', value: '2 anos' }
];

const TechnicalDataTable = () => {
  return (
    <SectionLayout
      id="dados-tecnicos"
      title="Dados Técnicos"
      description="Leitura técnica rápida para suporte de decisão, especificação e padronização operacional."
      className="py-24"
      bgClass="bg-white"
    >
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {keySpecs.map((item) => (
          <article key={item.label} className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{item.label}</p>
            <p className="mt-2 text-lg font-bold text-slate-900">{item.value}</p>
          </article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-slate-200"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Parâmetro
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Especificação
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {technicalTableRows.map((row, index) => (
                <tr key={row.parameter} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{row.parameter}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </SectionLayout>
  );
};

export default TechnicalDataTable;
