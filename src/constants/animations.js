/**
 * @file Constantes de animações e efeitos visuais
 * @description Centralizaconfigurações de animações Framer Motion
 * Facilita manutenção e consistência visual em toda a aplicação
 */

/**
 * Variantes de animações de entrada para seções
 * @type {Object}
 */
export const SECTION_ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  }
};

/**
 * Variantes comuns para componentes
 */
export const COMMON_VARIANTS = {
  // Fade in da esquerda
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  
  // Fade in da direita
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },

  // Fade in simples
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },

  // Scale up
  scaleUp: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { delay: 1, type: 'spring' }
  },

  // Bounce in
  bounceIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring', bounce: 0.4 }
  }
};

/**
 * Configurações padrão para Suspense fallback
 */
export const SKELETON_CONFIG = {
  className: 'h-24 rounded-xl bg-slate-100 animate-pulse',
  ariaHidden: true
};
