# 📱 Rischbieter - Site Institucional

Site responsivo e moderno para a Rischbieter Engenharia LTDA, especializada em soluções de retenção de partículas para sistemas de medição de água.

## 🎯 Visão Geral do Projeto

Este projeto foi refatorado seguindo princípios de **arquitetura limpa**, **baixo acoplamento**, **alta coesão** e **padrões modernos de desenvolvimento**. É mantido com documentação clara e estrutura pronta para onboarding de novos desenvolvedores.

### Tecnologias Principais

- **React 18.2** - Framework UI
- **Vite 8.0** - Build tool otimizado
- **Tailwind CSS 3.4** - Utility-first CSS
- **Framer Motion 10.16** - Animações suaves
- **React Helmet** - Gerenciamento de metadados SEO
- **Lucide React** - Ícones modernos
- **Radix UI** - Componentes acessíveis

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/                    # Componentes reutilizáveis
│   │   ├── SectionLayout.jsx      # Wrapper para seções
│   │   ├── FeatureCard.jsx        # Card para features/benefícios
│   │   └── FormField.jsx          # Campo de formulário com validação
│   ├── ui/                        # Componentes UI (Radix + custom)
│   │   ├── button.jsx
│   │   ├── toast.jsx
│   │   ├── toaster.jsx
│   │   └── use-toast.js
│   ├── Header.jsx                 # Navegação principal
│   ├── Hero.jsx                   # Seção principal
│   ├── Features.jsx               # Serviços e diferenciais
│   ├── TechnicalSpecs.jsx         # Especificações técnicas
│   ├── Benefits.jsx               # Benefícios operacionais
│   ├── Installation.jsx           # Processo de instalação
│   ├── Contact.jsx                # Formulário e contato
│   ├── Footer.jsx                 # Rodapé
│   └── WelcomeMessage.jsx
├── hooks/                         # Hooks customizados reutilizáveis
│   ├── useScrollToSection.js      # Scroll suave entre seções
│   ├── useWindowScroll.js         # Detecta scroll da janela
│   └── useForm.js                 # Gerenciamento de formulários
├── constants/                     # Constantes e configurações centralizadas
│   ├── navigation.js              # Seções e configurações de navegação
│   ├── animations.js              # Variantes de animações Framer Motion
│   └── validation.js              # Padrões e mensagens de validação
├── content/
│   └── company.js                 # Dados da empresa (centralizados)
├── lib/
│   └── utils.js                   # Utilitários (ex: cn - merge classes)
├── App.jsx                        # Componente raiz com lazy loading
├── main.jsx                       # Entry point
└── index.css                      # Estilos globais
```

## 🏗️ Arquitetura e Padrões

### 1. **Separação de Responsabilidades**

Cada arquivo/componente tem uma responsabilidade clara:

- **Components**: Renderização e UI
- **Hooks**: Lógica reutilizável
- **Constants**: Dados e configurações
- **Content**: Dados de negócio
- **Lib**: Utilitários puros

### 2. **Componentes Reutilizáveis**

Padrão de abstração para evitar duplicação:

```jsx
// ✅ Reutilizável
<FeatureCard 
  Icon={Shield} 
  title="Proteção" 
  description="..." 
/>

// ✅ Reutilizável
<SectionLayout 
  id="features" 
  title="Features" 
  description="..."
>
  {children}
</SectionLayout>

// ✅ Reutilizável
<FormField 
  id="email" 
  label="Email" 
  error={errors.email}
  {...props}
/>
```

### 3. **Hooks Customizados**

Lógica extraída em hooks para reutilização:

```jsx
// useScrollToSection - Scroll suave com callback
const { scrollToSection } = useScrollToSection(() => closeMenu());

// useWindowScroll - Detecta scroll para efeitos visuais
const { isScrolled } = useWindowScroll(20);

// useForm - Gerencia estado, validação e submit de formulários
const { values, errors, handleChange, handleSubmit } = useForm(
  initialValues,
  onSubmit,
  validators
);
```

### 4. **Constantes Centralizadas**

Dados duplicados são evitados centralizando tudo:

```js
// constants/navigation.js
NAVIGATION_SECTIONS - Seções e URLs
SCROLL_CONFIG - Configurações de scroll

// constants/animations.js
SECTION_ANIMATIONS - Variantes comuns
COMMON_VARIANTS - Animações reutilizáveis

// constants/validation.js
VALIDATION_PATTERNS - Regex e regras
FIELD_LENGTHS - Limites de campos
VALIDATION_MESSAGES - Mensagens de erro
```

### 5. **Code-Splitting e Lazy Loading**

Performance otimizada com Suspense:

```jsx
// App.jsx - Componentes de seção são carregados sob demanda
const Hero = lazy(() => import('@/components/Hero'));
const Features = lazy(() => import('@/components/Features'));

<Suspense fallback={<SectionFallback />}>
  <Hero />
  <Features />
  {/* ... */}
</Suspense>
```

### 6. **Camada de Abstração para Formulários**

Hook `useForm` centraliza validação e tratamento de erros:

```jsx
const { values, errors, touched, handleChange, handleBlur, handleSubmit } = 
  useForm(initialValues, onSubmit, validators);

// Componente FormField trata rendering de erro e styling
<FormField 
  error={errors.email} 
  touched={touched.email}
  {...props}
/>
```

## 🚀 Como Começar

### Instalação

```bash
# Instalar dependências
npm install

# Desenvolvimento - Hot reload
npm run dev

# Build produção
npm run build

# Preview do build
npm run preview
```

### Estrutura de Desenvolvimento

1. **Componentes**: Crie em `src/components/`
2. **Hooks**: Crie em `src/hooks/`
3. **Constantes**: Adicione em `src/constants/`
4. **Documentação**: Use JSDoc para funções/componentes

## 📝 Convenções de Código

### Nomeação de Arquivos

```
COMPONENTES: PascalCase
  ✅ Header.jsx
  ✅ FeatureCard.jsx
  ❌ header.jsx

HOOKS: camelCase com prefixo 'use'
  ✅ useScrollToSection.js
  ✅ useForm.js
  ❌ scrollToSection.js

CONSTANTES: UPPER_SNAKE_CASE
  ✅ NAVIGATION_SECTIONS
  ✅ VALIDATION_PATTERNS
  ❌ navigationSections
```

### Documentação (JSDoc)

```jsx
/**
 * @file Descrição breve do arquivo
 * @description Descrição detalhada do que o arquivo/componente faz
 */

/**
 * ComponentName - Descrição do componente
 * @component
 * @param {string} title - Descrição do prop
 * @returns {React.ReactElement}
 * @example
 * <ComponentName title="Exemplo" />
 */
```

### Estrutura de Componentes

```jsx
/**
 * @file Componente X
 * @description O que faz
 */

// Imports
import React from 'react';
import Component from '@/components/Component';
import { CONSTANT } from '@/constants/file';

// Componentes internos (se houver)
const InternalComponent = () => { /* ... */ };

// Componente principal com export default
const MainComponent = (props) => {
  return {/* JSX */};
};

export default MainComponent;
```

## ✨ Melhorias Implementadas

✅ **Baixo Acoplamento**: Constantes centralizadas, hooks customizados, componentes pequenos
✅ **Alta Coesão**: Cada arquivo tem responsabilidade clara
✅ **Reutilização**: FeatureCard, FormField, SectionLayout
✅ **Validação**: Sistema robusto de validação de formulários
✅ **Acessibilidade**: ARIA labels, htmlFor, aria-invalid, etc
✅ **Performance**: Code-splitting, lazy loading, Suspense
✅ **SEO**: Helmet para metadados dinâmicos
✅ **Documentação**: JSDoc em todos os componentes e hooks
✅ **Type Safety**: Padrões consistentes com comentários de tipos
✅ **Escalabilidade**: Estrutura pronta para crescimento

## 🤝 Contribuindo

Consulte [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes de desenvolvimento.

## 📄 Licença

Todos os direitos reservados © Rischbieter Engenharia LTDA
