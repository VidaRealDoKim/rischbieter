/**
 * @file Componente FormField - Campo de formulário reutilizável
 * @description Wrapper para inputs/textareas com validação e acessibilidade
 */

import React from 'react';

/**
 * FormField - Campo de formulário com rótulo, validação visual e mensagens de erro
 * 
 * Fornece:
 * - Rótulo associado com htmlFor
 * - Indicador visual de erro (border/texto vermelho)
 * - Mensagem de erro/ajuda
 * - Suporte a diferentes tipos de input
 * - Acessibilidade completa
 * 
 * @component
 * @param {Object} props - Props do componente
 * @param {string} props.id - ID do campo (único)
 * @param {string} props.name - Nome do campo
 * @param {string} props.label - Rótulo do campo
 * @param {string} [props.type='text'] - Tipo de input (text, email, tel, etc)
 * @param {string} [props.value] - Valor do campo
 * @param {Function} props.onChange - Handler para mudanças
 * @param {Function} [props.onBlur] - Handler para blur
 * @param {boolean} [props.required=false] - Campo obrigatório
 * @param {string} [props.placeholder] - Placeholder do campo
 * @param {string} [props.error] - Mensagem de erro
 * @param {boolean} [props.touched] - Se foi modificado
 * @param {string} [props.helperText] - Texto de ajuda
 * @param {Object} [props.inputProps] - Props adicionais para o input
 * 
 * @returns {React.ReactElement}
 * 
 * @example
 * <FormField
 *   id="email"
 *   name="email"
 *   label="Email"
 *   type="email"
 *   value={email}
 *   onChange={handleChange}
 *   error={errors.email}
 *   touched={touched.email}
 *   required
 * />
 */
const FormField = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  required = false,
  placeholder,
  error,
  touched,
  helperText,
  inputProps = {}
}) => {
  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' : 'input';
  const hasError = touched && error;

  return (
    <div className="flex flex-col">
      {/* Rótulo */}
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="campo obrigatório">
            *
          </span>
        )}
      </label>

      {/* Input/Textarea */}
      <InputComponent
        id={id}
        name={name}
        type={isTextarea ? undefined : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        className={`
          w-full px-4 py-3 border rounded-lg 
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-0
          ${
            hasError
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-600 focus:border-transparent'
          }
        `}
        rows={type === 'textarea' ? 4 : undefined}
        {...inputProps}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : helperText ? `${id}-help` : undefined}
      />

      {/* Mensagem de erro */}
      {hasError && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-2">
          {error}
        </p>
      )}

      {/* Texto de ajuda */}
      {helperText && !hasError && (
        <p id={`${id}-help`} className="text-gray-500 text-sm mt-2">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FormField;
