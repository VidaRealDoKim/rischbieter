import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Preparação',
    description: 'Feche o registro de água e prepare o local de instalação antes do medidor.'
  },
  {
    number: '02',
    title: 'Posicionamento',
    description: 'Instale o retentor imediatamente antes do relógio medidor, seguindo o fluxo da água.'
  },
  {
    number: '03',
    title: 'Conexão',
    description: 'Conecte as roscas DN ¾ NBR NM ISO 7-1 garantindo vedação adequada.'
  },
  {
    number: '04',
    title: 'Verificação',
    description: 'Abra o registro gradualmente e verifique se não há vazamentos no sistema.'
  }
];

const Installation = () => {
  return (
    <section id="instalacao" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Processo de Instalação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instalação simples e rápida em apenas 4 passos
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
                {index % 2 === 0 && index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-200"
          >
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instalação Profissional Recomendada</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para garantir o melhor desempenho e durabilidade do equipamento, recomendamos que a instalação seja realizada por profissional qualificado. Nossa equipe técnica está disponível para suporte e orientações.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Installation;