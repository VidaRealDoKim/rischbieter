# 🏗️ Guia de Arquitetura

Documento técnico descrevendo a arquitetura e decisões de design do projeto Rischbieter.

## Princípios de Design

### 1. SOLID

#### Single Responsibility Principle (SRP)
Cada componente/hook tem uma única responsabilidade:

```
✅ Header.jsx - Renderiza navegação
✅ useScrollToSection.js - Gerencia scroll
✅ NAVIGATION_SECTIONS - Define seções disponíveis
✅ FormField.jsx - Renderiza campo de formulário
✅ useForm.js - Gerencia estado e validação de formulários
```

#### Open/Closed Principle (OCP)
Componentes são abertos para extensão, fechados para modificação:

```jsx
// ✅ BOM - Estendível com props
<FeatureCard 
  Icon={Shield} 
  title="Custom Title"
  description="Custom Description"
  iconBgClass="bg-green-600" // Override customizável
/>

// ❌ RUIM - Hardcoded, precisa modificar componente
<FeatureCard 
  title="Fixed Title"
  description="Fixed Description"
/>
```

#### Liskov Substitution Principle (LSP)
Subtipos podem substituir tipos base:

```jsx
// ✅ BOM - Comportamentos padronizados
const { scrollToSection } = useScrollToSection();
// Funciona em qualquer lugar que scroll for necessário
```

#### Interface Segregation Principle (ISP)
Interfaces/props mínimas e focadas:

```jsx
// ✅ BOM - Props específicas necessárias
<FormField
  id="email"
  name="email"
  label="Email"
  type="email"
  value={value}
  onChange={onChange}
  error={error}
/>

// ❌ RUIM - Props genéricos demais
<Field {...allProps} />
```

#### Dependency Inversion Principle (DIP)
Dependa de abstrações, não de implementações concretas:

```jsx
// ✅ BOM - Abstração com hook
const { scrollToSection } = useScrollToSection();
<button onClick={() => scrollToSection('contato')}>

// ❌ RUIM - Implementação direta acoplada
const handleClick = () => {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
};
```

### 2. DRY (Don't Repeat Yourself)

Elimina duplicação através de:

- **Componentes reutilizáveis**: `FeatureCard`, `FormField`, `SectionLayout`
- **Hooks customizados**: `useScrollToSection`, `useWindowScroll`, `useForm`
- **Constantes centralizadas**: `NAVIGATION_SECTIONS`, `VALIDATION_PATTERNS`

### 3. KISS (Keep It Simple, Stupid)

Simplicidade máxima:

```jsx
// ✅ BOM - Simples e claro
<FormField error={errors.email} touched={touched.email} />

// ❌ RUIM - Complexo demais
{touched.email && typeof errors.email === 'string' && errors.email.length > 0 ? (
  <p style={{ color: errors.email ? 'red' : 'green' }}>
    {errors.email}
  </p>
) : null}
```

## Camadas da Arquitetura

```
┌─────────────────────────────────────────┐
│         PRESENTATION LAYER              │
│  Components (Header, Hero, Footer, etc) │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│      COMPOSITION LAYER                  │
│  Hooks (useForm, useScrollToSection)    │
│  Common Components (FormField, etc)     │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│      CONFIG LAYER                       │
│  Constants & Constants                  │
│  (navigation, validation, animations)   │
└─────────────────────────────────────────┘
```

## Pattern: Container Components

Separação clara entre containers (lógica) e presentationals (UI):

```jsx
// ❌ EVITAR - Lógica e presentação misturadas
const Contact = () => {
  const [formData, setFormData] = useState({...});
  const handleChange = (e) => {...};
  const handleSubmit = (e) => {...};
  
  return (
    <form>
      <input {...props} />
      <button>Enviar</button>
    </form>
  );
};

// ✅ FAZER - Separar responsabilidades
// Hook (Lógica)
const { values, errors, handleChange, handleSubmit } = useForm(...);

// Componente (Presentação)
const ContactForm = ({ values, errors, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input {...props} />
    <button>Enviar</button>
  </form>
);

// Composição
<ContactForm 
  values={values}
  errors={errors}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
/>
```

## Performance Optimization

### Code-Splitting

Lazy loading de seções não críticas:

```jsx
// App.jsx
const Hero = lazy(() => import('@/components/Hero'));
const Features = lazy(() => import('@/components/Features'));

<Suspense fallback={<Skeleton />}>
  <Hero />
  <Features />
</Suspense>
```

### Memoization

Usar `useCallback` para funções passadas como props:

```jsx
// ✅ BOM - Previne re-renders desnecessários
const handleNavClick = useCallback((sectionId) => {
  scrollToSection(sectionId);
}, [scrollToSection]);

// ✅ BOM - Usar useMemo para cálculos pesados
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
```

### Event Delegation

Scroll listener com RAF throttling:

```jsx
// ✅ BOM - Throttled com RAF
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
```

## Padrões de Estado

### Local Component State
Para estado específico do componente:

```jsx
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

### Derived State (através de props)
Para relacionamentos entre componentes:

```jsx
const Header = ({ isScrolled }) => {
  return <header className={isScrolled ? 'shadow' : ''} />;
};

// Em App ou componente pai
const { isScrolled } = useWindowScroll();
<Header isScrolled={isScrolled} />;
```

### Form State (com useForm)
Para formulários complexos:

```jsx
const { values, errors, touched, handleChange, handleSubmit } = useForm(
  initialValues,
  onSubmit,
  validators
);
```

## Validação de Dados

### Estratégia Multi-Camada

1. **Client-side**: Validação com `useForm` hook
2. **Field-level**: Validadores em `constants/validation.js`
3. **Pattern matching**: Regex em `VALIDATION_PATTERNS`
4. **Custom validators**: Funções personalizadas em `validators` object

```javascript
// constants/validation.js
VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
  // ...
};

// Em componente Contact
const validators = {
  email: (value) => {
    if (!value) return 'Obrigatório';
    if (!VALIDATION_PATTERNS.EMAIL.test(value)) return 'Email inválido';
    return null;
  },
  phone: (value) => {
    if (!value) return 'Obrigatório';
    if (!VALIDATION_PATTERNS.PHONE.test(value)) return 'Telefone inválido';
    return null;
  }
};
```

## Tratamento de Erros

### Console Warnings

```javascript
// ❌ RUIM - Silencia erros
if (!element) return;

// ✅ BOM - Loga para ajudar desenvolvimento
if (!element) {
  console.warn(`Seção não encontrada: ${sectionId}`);
  return;
}
```

### Error Boundaries (Futura implementação)

```jsx
// Envolver componentes críticos
<ErrorBoundary fallback={<ErrorComponent />}>
  <Hero />
</ErrorBoundary>
```

## Acessibilidade (A11y)

### Atributos ARIA Semânticos

```jsx
// ✅ BOM
<section aria-labelledby="hero-titulo">
  <h1 id="hero-titulo">Título</h1>
  <p>Conteúdo</p>
</section>

<FormField
  required
  aria-invalid={hasError}
  aria-describedby={hasError ? `${id}-error` : null}
/>

// ✅ BOM - Labels para inputs
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

### Navegação por Teclado

```jsx
// ✅ BOM - Botão com aria-label
<button 
  aria-label="Abrir menu"
  aria-expanded={isOpen}
>
  <Menu />
</button>
```

## Testing Strategy (Futura)

```javascript
// Estrutura proposta para testes
describe('FormField Component', () => {
  it('exibe erro quando touched e com erro', () => {
    render(<FormField error="Obrigatório" touched={true} />);
    expect(screen.getByText('Obrigatório')).toBeInTheDocument();
  });

  it('não exibe erro quando não touched', () => {
    render(<FormField error="Obrigatório" touched={false} />);
    expect(screen.queryByText('Obrigatório')).not.toBeInTheDocument();
  });
});

describe('useForm Hook', () => {
  it('valida campos corretamente', () => {
    const { result } = renderHook(() => 
      useForm(initialValues, onSubmit, validators)
    );
    
    act(() => {
      result.current.handleChange({
        target: { name: 'email', value: 'invalid' }
      });
    });
    
    expect(result.current.errors.email).toBeDefined();
  });
});
```

## Escalabilidade Futura

### Adição de Novas Seções

```javascript
// 1. Adicionar em constants/navigation.js
export const NAVIGATION_SECTIONS = {
  NOVO: {
    id: 'novo',
    label: 'Novo',
    title: 'Título da Seção Nova'
  }
};

// 2. Criar componente em components/
const NewSection = () => {
  return (
    <SectionLayout
      id="novo"
      title="Título"
      description="Descrição"
    >
      {/* Conteúdo */}
    </SectionLayout>
  );
};

// 3. Lazy load em App.jsx
const NewSection = lazy(() => import('@/components/NewSection'));

<Suspense fallback={<SectionFallback />}>
  {/* ... */}
  <NewSection />
</Suspense>
```

### Adição de Novas Páginas

```javascript
// Com React Router (futura implementação)
<Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/blog" element={<BlogPage />} />
  </Routes>
</Router>
```

---

**Última atualização**: 2024
**Mantido por**: Equipe de Desenvolvimento
