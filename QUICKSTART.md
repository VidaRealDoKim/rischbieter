# ⚡ Guia Rápido - Quick Start

Referência rápida para desenvolvedores novos no projeto.

## 🚀 5 Minutos para Começar

```bash
# 1. Instale dependências
npm install

# 2. Inicie dev server
npm run dev

# 3. Abra http://localhost:5173
# 4. Comece a editar!
```

## 📁 Onde Colocar Cada Coisa

| O que criar... | Onde colocar | Exemplo |
|---|---|---|
| novo componente de seção | `components/` | `components/Newsletter.jsx` |
| componente reutilizável | `components/common/` | `components/common/Card.jsx` |
| hook customizado | `hooks/` | `hooks/useFetch.js` |
| constantes | `constants/` | `constants/theme.js` |
| dados da empresa | `content/` | já existe `company.js` |
| utilitários | `lib/` | já existe `utils.js` |

## 🎯 Tarefas Comuns

### Adicionar nova seção

```jsx
// 1. Crie arquivo components/MySection.jsx
// 2. Use SectionLayout como wrapper
<SectionLayout
  id="minha-secao"
  title="Título da Seção"
  description="Descrição curta"
  bgClass="bg-white"
>
  {/* Seu conteúdo aqui */}
</SectionLayout>

// 3. Adicione em constants/navigation.js
MY_SECTION: {
  id: 'minha-secao',
  label: 'Minha Seção',
  title: 'Título da Seção'
}

// 4. Lazy load em App.jsx
const MySection = lazy(() => import('@/components/MySection'));
```

### Adicionar novo campo de formulário

```jsx
// 1. Adicione validador em constants/validation.js
VALIDATION_MESSAGES.CUSTOM_FIELD = 'Mensagem de erro';

// 2. Crie validador em Contact.jsx
myField: (value) => {
  if (!value?.trim()) return VALIDATION_MESSAGES.REQUIRED;
  // ... validações
  return null;
}

// 3. Use FormField no formulário
<FormField
  id="meu-campo"
  name="meu-campo"
  label="Meu Campo"
  value={values.meuCampo}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.meuCampo}
  touched={touched.meuCampo}
/>
```

### Adicionar novo hook

```javascript
// 1. Crie arquivo hooks/useMyHook.js
// 2. Adicione documentação JSDoc
export const useMyHook = (param) => {
  // lógica aqui
  return { /* resultado */ };
};

// 3. Importe onde for usar
import { useMyHook } from '@/hooks/useMyHook';
```

## 🐛 Debugging

### Verificar estado de um componente

```jsx
// Adicione console.log temporário
const MyComponent = ({ prop }) => {
  console.log('MyComponent rendered with:', { prop });
  return <div>{prop}</div>;
};
```

### React DevTools

```bash
# Instale extensão do navegador React DevTools
# Inspecione componentes, props e state
```

### Verificar validação de formulário

```javascript
// Em useForm hook, os erros ficam em `/values.errors`
console.log('Form errors:', errors);
```

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento com hot reload
npm run dev

# Build produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Customizações Rápidas

### Mudar cores principais

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      blue: { /* cores customizadas */ }
    }
  }
}
```

### Adicionar fontes

Edit `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Font+Name&display=swap');

body {
  font-family: 'Font Name', sans-serif;
}
```

### Mudar spacing/padding padrão

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    spacing: {
      // adicionar valores customizados
    }
  }
}
```

## 🔗 Imports Úteis

```javascript
// Componentes
import { Button } from '@/components/ui/button';
import { Toaster, useToast } from '@/components/ui/toaster';

// Hooks
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { useWindowScroll } from '@/hooks/useWindowScroll';
import { useForm } from '@/hooks/useForm';

// Constantes
import { NAVIGATION_SECTIONS } from '@/constants/navigation';
import { COMMON_VARIANTS } from '@/constants/animations';
import { VALIDATION_PATTERNS } from '@/constants/validation';

// Utilidades
import { cn } from '@/lib/utils';
```

## 📚 Documentação Completa

- [README.md](./README.md) - Visão geral
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Padrões de código
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Decisões de design

## ❓ Dúvidas Frequentes

**P: Onde adiciono um novo componente?**
R: Em `components/`. Se for reutilizável, em `components/common/`.

**P: Como adiciono validação a um campo?**
R: Em `constants/validation.js` adicione pattern e mensagem, depois crie validador no componente.

**P: Como faço scroll para uma seção?**
R: Use `const { scrollToSection } = useScrollToSection()` e chame `scrollToSection('id-secao')`.

**P: Posso usar uma lib externa?**
R: Sim, mas consulte o time. Tente usar alternativas existentes primeiro.

**P: Como debugo animações?**
R: Use Framer Motion DevTools ou Chrome DevTools para inspecionar elementos.

## 🆘 Problemas Comuns

### "Módulo não encontrado"
Verifique o caminho do import. Use `@/` para imports do `src/`.

### "Componente não renderiza"
Verifique se o ID da seção está correto em `constants/navigation.js`.

### "Validação não funciona"
Verifique se o `name` do input bate com a chave do validador.

### "Estilo não aplica"
Limpe cache do Tailwind: `npm run dev` recompila
automaitcamente.

---

**Bem-vindo ao Rischbieter! 🎉**
