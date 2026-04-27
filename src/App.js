import { useEffect, useState } from 'react';
import { BookOpen, MoonStar, Sun } from 'lucide-react';
import Toggle from './components/Toggle';
import Scene from './components/Scene';
import FeatureCard from './components/FeatureCard';
import Demo from './components/Demo';
import Footer from './components/Footer';
import './styles.css';

const features = [
  {
    icon: BookOpen,
    title: 'Editor visual',
    description: 'Diseña tramas ramificadas con una interfaz de arrastrar y soltar estilo storyboard.',
  },
  {
    icon: MoonStar,
    title: 'Ambientes dinámicos',
    description: 'Cambia música, escenas y decisiones en tiempo real para cada lector.',
  },
  {
    icon: Sun,
    title: 'Publicación instantánea',
    description: 'Comparte tus cuentos con un enlace y recibe feedback desde cualquier dispositivo.',
  },
];

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div className="app-shell">
      <header className="header paper-card">
        <div className="logo-wrap">
          <span className="logo-mark" aria-hidden="true">📖</span>
          <span className="logo-text">Lunara Stories</span>
        </div>

        <nav aria-label="Navegación principal" className="nav-links">
          <a href="#features">Funciones</a>
          <a href="#demo">Demo</a>
          <a href="#cta">Comenzar</a>
        </nav>

        <Toggle
          checked={theme === 'dark'}
          onChange={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
        />
      </header>

      <main>
        <Scene isDark={theme === 'dark'} />

        <section id="features" className="section">
          <h2>Todo para construir cuentos interactivos</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <Demo />

        <section id="cta" className="cta-section paper-card">
          <h2>Empieza hoy en Lunara Stories</h2>
          <p>Crea universos, invita lectores y convierte cada decisión en una aventura única.</p>
          <button type="button" className="cta-button">Regístrate gratis</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
