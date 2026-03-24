/**
 * @file Constantes de navegação da aplicação
 * @description Define as seções principais e configurações de navegação
 * Mantém centralizado para facilitar manutenção e escalabilidade
 */

/**
 * Seções principais do site com suas configurações
 * @type {Object<string, {id: string, label: string, title: string}>}
 */
export const NAVIGATION_SECTIONS = {
  SOBRE: {
    id: 'sobre-produto',
    label: 'Sobre',
    title: 'Sobre o Produto'
  },
  COMO_FUNCIONA: {
    id: 'como-funciona',
    label: 'Como Funciona',
    title: 'Como Funciona'
  },
  RESULTADOS: {
    id: 'provas-resultados',
    label: 'Resultados',
    title: 'Provas e Resultados'
  },
  PRODUTO: {
    id: 'produto',
    label: 'Produto',
    title: 'Retentor de Partículas'
  },
  ESPECIFICACOES: {
    id: 'especificacoes',
    label: 'Especificações',
    title: 'Especificações Técnicas'
  },
  BENEFICIOS: {
    id: 'beneficios',
    label: 'Benefícios',
    title: 'Benefícios para Operação e Receita'
  },
  SERVICOS: {
    id: 'servicos',
    label: 'Serviços',
    title: 'Serviços e Diferenciais'
  },
  INSTALACAO: {
    id: 'instalacao',
    label: 'Instalação',
    title: 'Processo de Instalação'
  },
  CONTATO: {
    id: 'contato',
    label: 'Contato',
    title: 'Entre em Contato'
  }
};

/**
 * Array ordenado de seções para iteração
 */
export const NAVIGATION_SECTIONS_ARRAY = [
  NAVIGATION_SECTIONS.SOBRE,
  NAVIGATION_SECTIONS.COMO_FUNCIONA,
  NAVIGATION_SECTIONS.RESULTADOS,
  NAVIGATION_SECTIONS.CONTATO
];

/**
 * Configurações de scroll
 */
export const SCROLL_CONFIG = {
  // Distância em pixels que determina quando aplicar estilos de header scrollado
  SCROLL_THRESHOLD: 20,
  // Comportamento do scroll
  SCROLL_BEHAVIOR: 'smooth',
  // Offset adicional para posicionamento de elementos
  SCROLL_OFFSET: 80
};
