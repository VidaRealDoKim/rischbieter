/**
 * @file Componente Contact - Formulário e informações de contato
 * @description Seção com formulário de contato validado e dados de contato da empresa
 * 
 * Funcionalidades:
 * - Formulário com validação robusta
 * - Feedback visual com toast notifications
 * - Tratamento de erros
 * - Layout responsivo (coluna em mobile, 2 colunas em desktop)
 * - Acessibilidade completa (labels, aria, etc)
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FormField from '@/components/common/FormField';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from '@/hooks/useForm';
import { company } from '@/content/company';
import {
  CONTACT_FORM_FIELDS,
  FIELD_LENGTHS,
  VALIDATION_MESSAGES,
  VALIDATION_PATTERNS
} from '@/constants/validation';

/**
 * Validadores de campos
 * Cada validador retorna mensagem de erro ou null (válido)
 */
const createValidators = () => ({
  name: (value) => {
    if (!value?.trim()) return VALIDATION_MESSAGES.REQUIRED;
    if (value.length < FIELD_LENGTHS.NAME_MIN)
      return VALIDATION_MESSAGES.NAME_TOO_SHORT;
    if (value.length > FIELD_LENGTHS.NAME_MAX) return VALIDATION_MESSAGES.NAME_TOO_LONG;
    if (!VALIDATION_PATTERNS.NAME.test(value)) return VALIDATION_MESSAGES.INVALID_NAME;
    return null;
  },

  email: (value) => {
    if (!value?.trim()) return VALIDATION_MESSAGES.REQUIRED;
    if (!VALIDATION_PATTERNS.EMAIL.test(value))
      return VALIDATION_MESSAGES.INVALID_EMAIL;
    return null;
  },

  phone: (value) => {
    if (!value?.trim()) return VALIDATION_MESSAGES.REQUIRED;
    if (!VALIDATION_PATTERNS.PHONE_SIMPLE.test(value))
      return VALIDATION_MESSAGES.INVALID_PHONE;
    return null;
  },

  company: (value) => {
    if (value && !VALIDATION_PATTERNS.COMPANY.test(value))
      return 'Empresa contém caracteres inválidos';
    return null;
  },

  message: (value) => {
    if (!value?.trim()) return VALIDATION_MESSAGES.REQUIRED;
    if (value.length < FIELD_LENGTHS.MESSAGE_MIN)
      return VALIDATION_MESSAGES.MESSAGE_TOO_SHORT;
    if (value.length > FIELD_LENGTHS.MESSAGE_MAX)
      return VALIDATION_MESSAGES.MESSAGE_TOO_LONG;
    return null;
  }
});

/**
 * ContactInfo - Componente para exibir informação de contato
 * (Email, Telefone, Endereço)
 */
const ContactInfo = ({ icon: Icon, title, value }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-blue-100">{value}</div>
    </div>
  </div>
);

/**
 * Contact - Seção de contato
 */
const Contact = () => {
  const { toast } = useToast();
  const validators = createValidators();

  // Hook useForm gerencia estado, validação e submit do formulário
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit: onFormSubmit,
    resetForm
  } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    },
    async (formValues) => {
      // Aqui integraria com API/email service
      console.log('Form submitted:', formValues);

      toast({
        title: 'Mensagem Enviada! ✅',
        description: 'Entraremos em contato em breve. Obrigado pelo interesse!',
        duration: 5000
      });

      // Reset após sucesso
      resetForm();
    },
    validators
  );

  /**
   * Handler para submit do formulário
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onFormSubmit(e);
  };

  return (
    <section
      id="contato"
      className="py-20 bg-white"
      aria-labelledby="contato-titulo"
    >
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="contato-titulo" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas com nossa equipe técnica
          </p>
        </motion.div>

        {/* Conteúdo: Info à esquerda, formulário à direita */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Nossa equipe está pronta para atender suas necessidades e fornecer a
                melhor solução para seu projeto.
              </p>

              <div className="space-y-6">
                <ContactInfo icon={Mail} title="Email" value={company.email} />
                <ContactInfo icon={Phone} title="Telefone" value={company.phone} />
                <ContactInfo icon={MapPin} title="Endereço" value={company.address} />
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-sm text-blue-100">
                  <strong>Horário de Atendimento:</strong>
                  <br />
                  {company.serviceHours}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Nome */}
              <FormField
                id="name"
                name="name"
                label="Nome Completo"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Seu nome"
                error={errors.name}
                touched={touched.name}
                inputProps={{ autoComplete: 'name' }}
              />

              {/* Email */}
              <FormField
                id="email"
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="seu@email.com"
                error={errors.email}
                touched={touched.email}
                inputProps={{ autoComplete: 'email' }}
              />

              {/* Telefone */}
              <FormField
                id="phone"
                name="phone"
                label="Telefone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="(XX) XXXXX-XXXX"
                error={errors.phone}
                touched={touched.phone}
                inputProps={{ autoComplete: 'tel' }}
              />

              {/* Empresa (opcional) */}
              <FormField
                id="company"
                name="company"
                label="Empresa"
                type="text"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Nome da empresa (opcional)"
                error={errors.company}
                touched={touched.company}
                inputProps={{ autoComplete: 'organization' }}
              />

              {/* Mensagem */}
              <FormField
                id="message"
                name="message"
                label="Mensagem"
                type="textarea"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Descreva sua necessidade ou dúvida..."
                error={errors.message}
                touched={touched.message}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;