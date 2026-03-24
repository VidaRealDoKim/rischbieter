/**
 * @file Componente raiz da aplicação
 * @description App.jsx é o ponto de entrada principal da aplicação React
 * 
 * Responsabilidades:
 * - Gerenciar helmet (metadados SEO)
 * - Renderizar componentes principais (header, main, footer)
 * - Code-splitting com Suspense e lazy loading para otimizar performance
 * - Prover contexto global de UI (toast)
 * 
 * Arquitetura:
 * - Componentes críticos renderizam imediatamente (Header, Footer)
 * - Componentes de seção usam lazy loading com fallback
 * - Suspense aguarda carregamento antes de renderizar placeholders
 */

import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { company } from '@/content/company';
import { SKELETON_CONFIG } from '@/constants/animations';

// Lazy loading de seções para otimizar bundle inicial
// Cada seção é carregada sob demanda (quando se torna visível)
const Hero = lazy(() => import('@/components/Hero'));
const ProductOverview = lazy(() => import('@/components/ProductOverview'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const Differentials = lazy(() => import('@/components/Differentials'));
const Applications = lazy(() => import('@/components/Applications'));
const Features = lazy(() => import('@/components/Features'));
const TechnicalSpecs = lazy(() => import('@/components/TechnicalSpecs'));
const TechnicalDataTable = lazy(() => import('@/components/TechnicalDataTable'));
const ProofSection = lazy(() => import('@/components/ProofSection'));
const MediaGallery = lazy(() => import('@/components/MediaGallery'));
const Benefits = lazy(() => import('@/components/Benefits'));
const Installation = lazy(() => import('@/components/Installation'));
const ConversionCTA = lazy(() => import('@/components/ConversionCTA'));
const Contact = lazy(() => import('@/components/Contact'));

/**
 * SectionFallback - Placeholder exibido enquanto seção está carregando
 * Usa skeleton loading para melhor UX
 */
const SectionFallback = () => (
  <div className="container mx-auto px-4 py-10">
    <div className={SKELETON_CONFIG.className} aria-hidden={SKELETON_CONFIG.ariaHidden} />
  </div>
);

/**
 * App - Componente raiz
 * 
 * Estrutura:
 * 1. Helmet: Metadados e SEO
 * 2. Header: Navegação fixa
 * 3. Main: Conteúdo com Suspense e lazy-loaded sections
 * 4. Footer: Informações rodapé
 * 5. Toaster: Sistema de notificações
 */
function App() {
  return (
    <>
      {/* SEO e Metadados */}
      <Helmet>
        <title>Retentor de Partículas | {company.name}</title>
        <meta
          name="description"
          content="Retentor de partículas para instalação antes do medidor de água. Solução profissional para proteção de hidrómetros e sistemas de medição."
        />
        <meta property="og:title" content={`Retentor de Partículas | ${company.name}`} />
        <meta property="og:description" content={company.institucionalText} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Estrutura principal da página */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
        {/* Header com navegação */}
        <Header />

        {/* Conteúdo principal com lazy loading */}
        <main>
          <Suspense fallback={<SectionFallback />}>
            <Hero />
            <ProductOverview />
            <HowItWorks />
            <Differentials />
            <Applications />
            <Features />
            <TechnicalSpecs />
            <TechnicalDataTable />
            <ProofSection />
            <MediaGallery />
            <Benefits />
            <Installation />
            <ConversionCTA />
            <Contact />
          </Suspense>
        </main>

        {/* Footer com informações */}
        <Footer />

        {/* Sistema de notificações (toasts) */}
        <Toaster />
      </div>
    </>
  );
}

export default App;