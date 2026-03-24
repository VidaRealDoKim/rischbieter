/**
 * @file Constantes de validação de formulários
 * @description Padrões e mensagens de validação centralizados
 * Facilita manutenção e consistência de validação
 */

/**
 * Padrões de validação (regex)
 */
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
  // Aceita formato brasileiro básico
  PHONE_SIMPLE: /^[\d\s()+-]+$/,
  NAME: /^[a-zA-ZáéíóúãõâêôçÁÉÍÓÚÃÕÂÊÔÇ\s'-]+$/,
  COMPANY: /^[a-zA-Z0-9áéíóúãõâêôçÁÉÍÓÚÃÕÂÊÔÇ\s'-.,&]+$/
};

/**
 * Limites de comprimento de campos
 */
export const FIELD_LENGTHS = {
  NAME_MIN: 3,
  NAME_MAX: 100,
  COMPANY_MIN: 2,
  COMPANY_MAX: 150,
  MESSAGE_MIN: 10,
  MESSAGE_MAX: 1000,
  EMAIL_MAX: 255,
  PHONE_MAX: 20
};

/**
 * Mensagens de validação
 */
export const VALIDATION_MESSAGES = {
  REQUIRED: 'Este campo é obrigatório',
  INVALID_EMAIL: 'Por favor, insira um email válido',
  INVALID_PHONE: 'Por favor, insira um telefone válido',
  INVALID_NAME: 'Nome deve conter apenas letras, espaços, hífens e apóstrofos',
  NAME_TOO_SHORT: `Nome deve ter no mínimo ${FIELD_LENGTHS.NAME_MIN} caracteres`,
  NAME_TOO_LONG: `Nome não pode exceder ${FIELD_LENGTHS.NAME_MAX} caracteres`,
  MESSAGE_TOO_SHORT: `Mensagem deve ter no mínimo ${FIELD_LENGTHS.MESSAGE_MIN} caracteres`,
  MESSAGE_TOO_LONG: `Mensagem não pode exceder ${FIELD_LENGTHS.MESSAGE_MAX} caracteres`
};

/**
 * Configuração de campos do formulário de contato
 */
export const CONTACT_FORM_FIELDS = {
  NAME: {
    name: 'name',
    type: 'text',
    required: true,
    validation: {
      pattern: VALIDATION_PATTERNS.NAME,
      minLength: FIELD_LENGTHS.NAME_MIN,
      maxLength: FIELD_LENGTHS.NAME_MAX
    }
  },
  EMAIL: {
    name: 'email',
    type: 'email',
    required: true,
    validation: {
      pattern: VALIDATION_PATTERNS.EMAIL,
      maxLength: FIELD_LENGTHS.EMAIL_MAX
    }
  },
  PHONE: {
    name: 'phone',
    type: 'tel',
    required: true,
    validation: {
      pattern: VALIDATION_PATTERNS.PHONE_SIMPLE,
      maxLength: FIELD_LENGTHS.PHONE_MAX
    }
  },
  COMPANY: {
    name: 'company',
    type: 'text',
    required: false,
    validation: {
      pattern: VALIDATION_PATTERNS.COMPANY,
      minLength: FIELD_LENGTHS.COMPANY_MIN,
      maxLength: FIELD_LENGTHS.COMPANY_MAX
    }
  },
  MESSAGE: {
    name: 'message',
    type: 'textarea',
    required: true,
    validation: {
      minLength: FIELD_LENGTHS.MESSAGE_MIN,
      maxLength: FIELD_LENGTHS.MESSAGE_MAX
    }
  }
};
