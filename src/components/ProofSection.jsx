/**
 * @file Seção Provas e Resultados.
 * @description Reúne métricas de validação, evidências de campo e CTA orientado a resultado.
 */

import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '@/components/common/SectionLayout';
import StatCard from '@/components/common/StatCard';
import MediaPlaceholder from '@/components/common/MediaPlaceholder';
import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { proofCases, proofMetrics } from '@/content/productData';

const ProofSection = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <SectionLayout
      id="provas-resultados"
      title="Provas e Resultados"
      description="Comprovado em testes e validado em campo: menos erro de medição, menos travamento e mais previsibilidade de receita."
      className="py-24"
      bgClass="bg-gradient-to-br from-blue-50 to-slate-100"
    >
      <div className="mb-8 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
        Comprovado • Testado • Validado
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {proofMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <StatCard
              value={metric.value}
              title={metric.title}
              description={metric.description}
              badge={metric.badge}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-semibold text-slate-900">Clientes e operações de referência</h3>
          <p className="mt-2 text-sm text-slate-600">
            Solução já utilizada por organizações que exigem confiabilidade metrológica e controle de perdas.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {proofCases.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-semibold text-slate-900">Espaço para gráficos comparativos</h3>
          <p className="mt-2 text-sm text-slate-600">
            Use este bloco para inserir gráfico de faturamento, curva IDM ou comparativos sem/ com retentor.
          </p>
          <div className="mt-4">
            <MediaPlaceholder
              type="image"
              title="Gráfico técnico em preparação"
              label="Imagem do teste"
              className="min-h-56"
            />
          </div>
        </article>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-blue-100 bg-white p-5 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-700">
          Receba uma estimativa técnica de impacto para sua operação e priorize pontos críticos de medição.
        </p>
        <Button
          onClick={() => scrollToSection('contato')}
          className="bg-blue-700 text-white hover:bg-blue-800"
        >
          Ver potencial de resultado
        </Button>
      </div>
    </SectionLayout>
  );
};

export default ProofSection;
