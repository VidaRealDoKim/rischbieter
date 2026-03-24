/**
 * @file Hook customizado para navegação por scroll
 * @description Fornece funcionalidade de scroll suave para seções
 * Centraliza a lógica de scroll para evitar duplicação de código
 */

import { useCallback } from 'react';
import { SCROLL_CONFIG } from '@/constants/navigation';

/**
 * Hook para scroll suave para seções específicas
 * Executa scroll suave e permite fechar menus mobile após navegação
 * 
 * @param {Function} onNavigate - Callback opcional disparado após scroll
 * @returns {Object} Objeto com função scrollToSection
 * 
 * @example
 * const { scrollToSection } = useScrollToSection(() => setMobileMenuOpen(false));
 * <button onClick={() => scrollToSection('contato')}>Ir para contato</button>
 */
export const useScrollToSection = (onNavigate = null) => {
  const scrollToSection = useCallback(
    (sectionId) => {
      const element = document.getElementById(sectionId);
      
      if (!element) {
        console.warn(`Seção não encontrada: ${sectionId}`);
        return;
      }

      // Executa o scroll suave
      element.scrollIntoView({
        behavior: SCROLL_CONFIG.SCROLL_BEHAVIOR,
        block: 'start'
      });

      // Chama callback se fornecido (ex: fechar menu mobile)
      if (onNavigate && typeof onNavigate === 'function') {
        onNavigate();
      }
    },
    [onNavigate]
  );

  return { scrollToSection };
};

export default useScrollToSection;
