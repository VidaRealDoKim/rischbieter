/**
 * @file Dados da empresa centralizado
 * @description Informações institucionais da Rischbieter Engenharia
 * 
 * Este arquivo é importado em múltiplos componentes:
 * - Header: Logo e nome da empresa
 * - Hero: Imagem do diagrama
 * - Footer: Informações de contato
 * - Contact: Email, telefone, endereço
 * 
 * Para manter DRY (Don't Repeat Yourself), todos os dados da empresa
 * ficam centralizados aqui. Qualquer mudança reflete em todo o site.
 */

/**
 * Objeto global com dados da empresa Rischbieter
 * 
 * @type {Object}
 * @property {string} name - Nome completo da empresa
 * @property {string} shortName - Nome curto/sigla
 * @property {string} segment - Segmento de atuação
 * @property {string} email - Email de contato
 * @property {string} phone - Telefone de contato
 * @property {string} address - Endereço da empresa
 * @property {string} serviceHours - Horário de funcionamento
 * @property {string} logo - URL do logo (caminho público)
 * @property {string} heroImage - URL da imagem hero (caminho público)
 * @property {string} institucionalText - Texto institucional para meta tags e descrições
 */
export const company = {
  // Dados gerais
  name: 'Rischbieter Engenharia LTDA',
  shortName: 'RISCHBIETER',
  segment: 'Engenharia para medição de água',

  // Contato
  email: 'contato@rischbieter.com.br',
  phone: '+55 (XX) XXXX-XXXX',
  address: 'Rischbieter Engenharia LTDA',
  serviceHours: 'Segunda a Sexta: 8h às 18h',

  // Imagens e Assets
  logo: '/assets/images/logo-rischbieter.svg',
  heroImage: '/assets/images/retentor-diagrama.svg',

  // Textos
  institucionalText:
    'Soluções profissionais para sistemas de medição de água com qualidade, segurança e eficiência comprovadas.'
};
