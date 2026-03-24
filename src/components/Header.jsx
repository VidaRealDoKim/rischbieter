/**
 * @file Componente Header - Navegação principal da aplicação
 * @description Header fixo com navegação responsiva e efeito de scroll
 * 
 * Funcionalidades:
 * - Menu desktop com navegação
 * - Menu mobile responsivo (hamburger)
 * - Efeito de fundo ao scroll
 * - Navegação suave entre seções
 * - Logo e nome da empresa
 */

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company } from '@/content/company';
import { NAVIGATION_SECTIONS_ARRAY } from '@/constants/navigation';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { useWindowScroll } from '@/hooks/useWindowScroll';

/**
 * NavLink - Componente reutilizável para links de navegação
 * 
 * @component
 * @param {Object} props
 * @param {string} props.label - Texto do link
 * @param {string} props.sectionId - ID da seção para scroll
 * @param {Function} props.onClick - Callback ao clicar
 */
const NavLink = ({ label, sectionId, onClick }) => (
  <button
    onClick={() => onClick(sectionId)}
    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
    aria-label={`Navegar para ${label}`}
  >
    {label}
  </button>
);

/**
 * Header - Componente de navegação principal
 */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useWindowScroll();
  const { scrollToSection } = useScrollToSection(() => setIsMobileMenuOpen(false));

  /**
   * Handler para navegação com scroll
   * Fecha menu mobile após navegar
   */
  const handleNavClick = useCallback(
    (sectionId) => {
      scrollToSection(sectionId);
      setIsMobileMenuOpen(false);
    },
    [scrollToSection]
  );

  /**
   * Toggle do menu mobile
   */
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo e nome da empresa */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={company.logo}
                alt={`Logo ${company.name}`}
                width="48"
                height="48"
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-lg text-gray-900">{company.shortName}</div>
              <div className="text-xs text-gray-600">ENGENHARIA LTDA</div>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION_SECTIONS_ARRAY.map((section) => (
              <NavLink
                key={section.id}
                label={section.label}
                sectionId={section.id}
                onClick={handleNavClick}
              />
            ))}
            <Button
              onClick={() => handleNavClick('contato')}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Orçamento
            </Button>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col space-y-3 py-4">
              {NAVIGATION_SECTIONS_ARRAY.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left px-4 py-1"
                >
                  {section.label}
                </button>
              ))}
              <div className="px-4">
                <Button
                  onClick={() => handleNavClick('contato')}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Solicitar orçamento
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;