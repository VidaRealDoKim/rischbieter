# 🤝 Contribuindo com o Projeto

Obrigado por considerar contribuir com o projeto Rischbieter! Este documento fornece diretrizes e padrões para manter a qualidade do código.

## 📋 Índice

1. [Como Começar](#como-começar)
2. [Padrões de Código](#padrões-de-código)
3. [Criando Componentes](#criando-componentes)
4. [Criando Hooks](#criando-hooks)
5. [Validação de Formulários](#validação-de-formulários)
6. [Checklist de PR](#checklist-de-pr)

## 🚀 Como Começar

### Setup Inicial

```bash
# Clone o repositório
git clone <repo-url>
cd rischibiter-site

# Instale dependências
npm install

# Inicie o desenvolvimento
npm run dev
```

### Estrutura de Branches

```
main                    # Produção
  └─ develop          # Integração contínua
       └─ feature/*    # Features novas (feature/header-refactor)
       └─ fix/*        # Correções (fix/header-scroll-bug)
       └─ docs/*       # Documentação (docs/api-guide)
```

## 🎨 Padrões de Código

### JavaScript/JSX

#### Nomenclatura

```javascript
// ✅ Componentes: PascalCase
const MyComponent = () => {};

// ✅ Funções/Variáveis: camelCase
const myFunction = () => {};
const myVariable = 'value';

// ✅ Constantes: UPPER_SNAKE_CASE
const MY_CONSTANT = 'constant';
const MAX_ITEMS = 100;

// ✅ Privadas: _leading underscore
const _internalHelper = () => {};
```

#### Imports

```javascript
// ✅ BOM: Organizado por tipo
// React e bibliotecas
import React from 'react';
import { motion } from 'framer-motion';

// Componentes
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

// Hooks customizados
import { useScrollToSection } from '@/hooks/useScrollToSection';

// Constantes
import { NAVIGATION_SECTIONS } from '@/constants/navigation';

// Estilos
import './MyComponent.css';
```

#### Comentários

```javascript
/**
 * JSDoc para funções/componentes públicos
 * @param {type} name - Descrição
 * @returns {type} Descrição do retorno
 */
function publicFunction(name) {
  // Comentário inline para lógica complexa
  const result = complexCalculation();
  return result;
}

// TODO: Melhorar performance (usar useMemo)
// FIXME: Bug ao renderizar em Safari
// NOTE: Este comportamento é intencional
// HACK: Solução temporária até API estar pronta
```

#### Espaçamento

```javascript
// ✅ BOM
if (condition) {
  doSomething();
}

// ✅ BOM - Espaçamento em objetos literais
const config = {
  key: 'value',
  nested: { inner: 'data' }
};

// ❌ RUIM - Sem espaçamento
if(condition){doSomething();}
```

### Tailwind CSS

```jsx
// ✅ BOM - Organizado logicamente
<div className="
  flex items-center justify-between
  w-full px-4 py-2
  bg-white rounded-lg
  shadow-md hover:shadow-lg
  transition-shadow duration-300
">

// ❌ RUIM - Desorganizado
<div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

// ✅ USE cn() para classes condicionais
import { cn } from '@/lib/utils';
<div className={cn(
  'base-styles',
  isActive && 'active-styles',
  isDark && 'dark-styles'
)}>
```

## 🧩 Criando Componentes

### Componente Funcional Simples

```jsx
/**
 * @file Componente Button customizado
 * @description Botão com variantes predefinidas
 */

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * PrimaryButton - Botão primário
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Conteúdo do botão
 * @param {boolean} [props.disabled] - Desabilitar botão
 * @param {Function} [props.onClick] - Callback ao clique
 * @returns {React.ReactElement}
 * 
 * @example
 * <PrimaryButton onClick={() => alert('Clicado')}>
 *   Enviar
 * </PrimaryButton>
 */
const PrimaryButton = ({ children, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'px-4 py-2 bg-blue-600 text-white rounded-lg',
        'hover:bg-blue-700 transition-colors',
        'disabled:opacity-50 disabled:cursor-not-allowed'
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
```

### Componente com Estado e Efeitos

```jsx
/**
 * @file Componente Modal
 * @description Modal com entrada/saída animada
 */

import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Modal - Componente de modal com backdrop
 * 
 * @component
 * @param {Object} props
 * @param {boolean} props.isOpen - Controla visibilidade
 * @param {Function} props.onClose - Callback ao fechar
 * @param {React.ReactNode} props.children - Conteúdo do modal
 */
const Modal = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/50"
            aria-label="Fechar modal"
          />

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 max-w-md"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
```

## 🎣 Criando Hooks

### Hook Simples

```javascript
/**
 * @file Hook useLocalStorage
 * @description Sincroniza state com localStorage
 */

import { useState, useEffect, useCallback } from 'react';

/**
 * useLocalStorage - Hook para persistir state em localStorage
 * 
 * @param {string} key - Chave no localStorage
 * @param {any} initialValue - Valor inicial
 * @returns {[any, Function]} [value, setValue]
 * 
 * @example
 * const [name, setName] = useLocalStorage('userName', 'João');
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao ler localStorage[${key}]:`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Erro ao escrever localStorage[${key}]:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};
```

### Hook Complexo com Dependências

```javascript
/**
 * @file Hook useAsync
 * @description Executa função assíncrona e gerencia estado
 */

import { useState, useEffect, useCallback } from 'react';

/**
 * useAsync - Hook para executar operações assíncronas
 * 
 * @param {Function} asyncFunction - Função async a executar
 * @param {boolean} immediate - Executar imediatamente
 * @param {Array} deps - Dependências para re-executar
 * @returns {Object} { data, loading, error, execute }
 * 
 * @example
 * const { data, loading, error } = useAsync(fetchData, true, [userId]);
 */
export const useAsync = (asyncFunction, immediate = true, deps = []) => {
  const [state, setState] = useState({
    data: null,
    loading: immediate,
    error: null
  });

  const execute = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const response = await asyncFunction();
      setState({ data: response, loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error });
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, deps);

  return { ...state, execute };
};
```

## ✅ Validação de Formulários

### Padrão de Validação

```javascript
// ✅ BOM - Validadores centralizados em constants/validation.js
import {
  VALIDATION_PATTERNS,
  VALIDATION_MESSAGES,
  FIELD_LENGTHS
} from '@/constants/validation';

const validators = {
  email: (value) => {
    if (!value?.trim()) return VALIDATION_MESSAGES.REQUIRED;
    if (!VALIDATION_PATTERNS.EMAIL.test(value)) {
      return VALIDATION_MESSAGES.INVALID_EMAIL;
    }
    return null;
  },

  password: (value) => {
    if (!value?.trim()) return VALIDATION_MESSAGES.REQUIRED;
    if (value.length < FIELD_LENGTHS.PASSWORD_MIN) {
      return `Mínimo ${FIELD_LENGTHS.PASSWORD_MIN} caracteres`;
    }
    return null;
  }
};

// Usar com useForm hook
const { values, errors, handleChange, handleSubmit } = useForm(
  { email: '', password: '' },
  onSubmit,
  validators
);
```

### Usar FormField para Input

```jsx
<FormField
  id="email"
  name="email"
  label="Email"
  type="email"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  required
  error={errors.email}
  touched={touched.email}
/>
```

## 📋 Checklist de PR

Antes de fazer um Pull Request, verifique:

- [ ] **Código**
  - [ ] Segue padrões de nomenclatura
  - [ ] Sem código comentado ou debug
  - [ ] Sem console.log's (exceto erros importantes)
  - [ ] Sem variáveis não utilizadas
  - [ ] Sem duplicação de código

- [ ] **Componentes**
  - [ ] JSDoc com @param, @returns, @example
  - [ ] Props com tipos comentados
  - [ ] Acessibilidade (aria labels, htmlFor, etc)
  - [ ] Responsivo em mobile/tablet/desktop
  - [ ] Testado em navegadores principais

- [ ] **Performance**
  - [ ] useCallback para funções passadas como props
  - [ ] useMemo para cálculos pesados
  - [ ] Lazy loading onde aplicável
  - [ ] Sem renders desnecessários

- [ ] **Testes**
  - [ ] Funcionário localmente (npm run dev)
  - [ ] Build sem erros (npm run build)
  - [ ] Sem warnings no console
  - [ ] Validação de formulários funciona

- [ ] **Documentação**
  - [ ] README atualizado se necessário
  - [ ] Comentários explicam o "porquê", não o "quê"
  - [ ] Constantes documentadas

## 🐛 Reportando Bugs

Ao reportar bugs, inclua:

1. **Descrição clara** do comportamento encontrado
2. **Passos para reproduzir**
3. **Comportamento esperado**
4. **Screenshots/vídeos** se possível
5. **Ambiente**: Browser, OS, versão do Node

## 💡 Sugestões de Melhoria

Temos interesse em:

- Melhorias de performance
- Melhorias de UX/UI
- Novas features
- Melhorias de documentação
- Refatorações que melhorem legibilidade

## 📞 Contato

Para dúvidas sobre contribuição, abra uma **issue** no repositório.

---

**Obrigado por contribuir!** 🎉
