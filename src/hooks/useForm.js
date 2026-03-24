/**
 * @file Hook customizado para gerenciar formulários
 * @description Fornece lógica centralizada para handle state e validação de formulários
 */

import { useState, useCallback } from 'react';

/**
 * Hook para gerenciar estado e validação de formulários
 * Reduz boilerplate e centraliza lógica de formulários
 * 
 * @param {Object} initialValues - Valores iniciais do formulário
 * @param {Function} onSubmit - Callback executado no submit (após validação)
 * @param {Object} validators - Objeto com funções de validação por campo
 * @returns {Object} Objeto com estado e handlers do formulário
 * 
 * @example
 * const { values, errors, handleChange, handleSubmit } = useForm(
 *   { name: '', email: '' },
 *   (values) => console.log('Submit:', values),
 *   { email: (val) => val.includes('@') }
 * );
 */
export const useForm = (initialValues, onSubmit, validators = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handler para mudanças em campos do formulário
   */
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: inputValue
    }));

    // Limpa erro do campo quando usuário começa a editar
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null
      }));
    }
  }, [errors]);

  /**
   * Handler para blur de campos
   */
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true
    }));

    // Valida campo se houver validador
    if (validators[name]) {
      const error = validators[name](values[name]);
      if (error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error
        }));
      }
    }
  }, [values, validators]);

  /**
   * Handler para submit do formulário
   */
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    const newErrors = {};

    // Valida todos os campos
    Object.keys(validators).forEach((fieldName) => {
      const error = validators[fieldName](values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    setErrors(newErrors);

    // Se não há erros, executa callback onSubmit
    if (Object.keys(newErrors).length === 0) {
      try {
        await onSubmit(values);
        // Reset formulário após sucesso
        setValues(initialValues);
        setTouched({});
      } catch (error) {
        console.error('Erro ao submeter formulário:', error);
      }
    }

    setIsSubmitting(false);
  }, [values, validators, onSubmit, initialValues]);

  /**
   * Função para resetar formulário
   */
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  /**
   * Função para setar erros manualmente
   */
  const setFieldError = useCallback((fieldName, error) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error
    }));
  }, []);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldError
  };
};

export default useForm;
