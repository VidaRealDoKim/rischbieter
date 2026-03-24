import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Box, Filter, FileCheck, Shield, Droplets } from 'lucide-react';

const specs = [
  {
    icon: Box,
    label: 'Corpo',
    value: 'PVC Rígido',
    detail: '100 cm³'
  },
  {
    icon: Filter,
    label: 'Área Filtrante',
    value: '70 cm²',
    detail: 'Alta capacidade'
  },
  {
    icon: Ruler,
    label: 'Granulometria',
    value: '0,2 mm e 1 mm',
    detail: 'Dupla filtragem'
  },
  {
    icon: FileCheck,
    label: 'Rosca',
    value: 'DN ¾ NBR NM ISO 7-1',
    detail: 'Padrão internacional'
  },
  {
    icon: Shield,
    label: 'Garantia',
    value: '2 anos',
    detail: 'Peça requerida'
  },
  {
    icon: Droplets,
    label: 'Retenção',
    value: '130 cm³',
    detail: 'Partículas'
  }
];

const TechnicalSpecs = () => {
  return (
    <section id="especificacoes" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Especificações Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detalhes técnicos que garantem qualidade e desempenho superior
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <spec.icon className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                  <div className="text-lg font-bold text-gray-900 mb-1">{spec.value}</div>
                  <div className="text-sm text-gray-600">{spec.detail}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Características Principais</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Não altera o padrão do cavalete, mantendo conformidade com normas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Melhora a qualidade da medição, evitando desperdício de água</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Evita perdas na arrecadação e diminui substituições dos medidores</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Sistema selado, evitando fraudes e garantindo segurança</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vantagens Operacionais</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Grande capacidade de depósito para maior intervalo entre manutenções</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Não é descartável, permitindo fácil manutenção por retrolavagem</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Partículas retidas são fraudes naturais das campanhas de saneamento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Equipamento inviolável e lavável, garantindo durabilidade</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;