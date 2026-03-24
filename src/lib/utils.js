/**
 * @file Utilitários Gerais
 * @description Funções utilitárias compartilhadas pela aplicação
 */

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes Tailwind com merge inteligente de conflitos
 * 
 * Soluciona problema comum com Tailwind onde classes sobrescrevem:
 * - clsx: Une classes condicionalmente
 * - twMerge: Remove conflitos de Tailwind
 * 
 * @param {...any} inputs - Classes (strings, arrays, objetos com clsx)
 * @returns {string} Classes Tailwind compiladas e merged
 * 
 * @example
 * // Classe customizada sobrescreve padrão
 * cn('px-4 py-2', 'px-8') // Retorna 'py-2 px-8' (não 'px-4 px-8')
 * 
 * @example
 * // Condicionais
 * cn(
 *   'base-class',
 *   isActive && 'active-class',
 *   isDark && 'dark-class'
 * )
 * 
 * @example
 * // Sobrescrita de theme
 * cn(
 *   'bg-blue-600 text-white',
 *   error && 'bg-red-600' // Sobrescreve bg-blue-600
 * )
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default cn;