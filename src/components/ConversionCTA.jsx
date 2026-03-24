/**
 * @file CTA final de conversão com foco comercial e técnico.
 * @description Seção de fechamento para levar o usuário ao contato com urgência e proposta de valor.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/useScrollToSection';

/**
 * CTA principal de fundo da página para solicitação de orçamento técnico.
 */
const ConversionCTA = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <section id="cta-orcamento" className="py-20 bg-gradient-to-r from-blue-700 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-white/10 p-8 text-center text-white backdrop-blur-sm md:p-12"
        >
          <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100">
            Priorize agora os pontos críticos de medição
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            Transforme perdas invisíveis em resultado mensurável
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 md:text-lg">
            Solicite um orçamento técnico e receba orientação de especialista para implementar o
            Retentor de Partículas com foco em precisão, durabilidade e faturamento.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              onClick={() => scrollToSection('contato')}
              size="lg"
              className="bg-white text-blue-800 hover:bg-blue-50"
            >
              Solicitar orçamento técnico
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              onClick={() => scrollToSection('contato')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Falar com um especialista
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionCTA;
