/**
 * @file Hook customizado para detectar scroll da janela
 * @description Monitora posição de scroll e fornece estado atualizado
 * Útil para aplicar estilos condicionais (como header com sombra)
 */

import { useState, useEffect } from 'react';
import { SCROLL_CONFIG } from '@/constants/navigation';

/**
 * Hook para monitorar scroll da janela
 * Fornece estado booleano indicando se página foi scrollada
 * 
 * @param {number} threshold - Distância em pixels para considerar como "scrollado"
 * @returns {Object} Objeto com estado { isScrolled }
 * 
 * @example
 * const { isScrolled } = useWindowScroll(20);
 * <header className={isScrolled ? 'shadow-md' : 'shadow-none'}>
 */
export const useWindowScroll = (threshold = SCROLL_CONFIG.SCROLL_THRESHOLD) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    /**
     * Handler para evento de scroll
     * Usa throttling implícito através do requestAnimationFrame
     */
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Adiciona listener com passive flag para melhor performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Verificação inicial
    setIsScrolled(window.scrollY > threshold);

    // Cleanup: remove listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled };
};

export default useWindowScroll;
