import { motion } from 'framer-motion';
import './Scene.css';

function Layer({ color, zIndex, height, clipPath }) {
  return (
    <div
      className="scene-layer"
      style={{
        background: color,
        zIndex,
        height,
        clipPath,
      }}
    />
  );
}

function SunMoon({ isDark }) {
  return (
    <motion.div
      className={`sun-moon ${isDark ? 'moon' : 'sun'}`}
      animate={{ x: isDark ? 130 : -130 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      {isDark && (
        <>
          <span className="crater crater-1" />
          <span className="crater crater-2" />
          <span className="crater crater-3" />
        </>
      )}
    </motion.div>
  );
}

const stars = Array.from({ length: 10 }, (_, i) => i + 1);

function Scene({ isDark }) {
  return (
    <section className="hero section" aria-label="Paisaje de recortes de papel">
      <div className="scene paper-texture">
        <SunMoon isDark={isDark} />

        {isDark && (
          <div className="stars" aria-hidden="true">
            {stars.map((star) => (
              <svg key={star} className={`star s-${star}`} viewBox="0 0 24 24" focusable="false">
                <path d="M12 2 14.8 8.3 22 9.2 16.7 14l1.4 6.9L12 17.6 5.9 20.9 7.3 14 2 9.2l7.2-.9z" />
              </svg>
            ))}
          </div>
        )}

        <Layer
          color="var(--color-sky)"
          zIndex={1}
          height="100%"
          clipPath="polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        />
        <Layer
          color="var(--mountain-color)"
          zIndex={2}
          height="58%"
          clipPath="polygon(0 70%, 11% 54%, 22% 66%, 36% 46%, 51% 66%, 66% 41%, 79% 62%, 100% 50%, 100% 100%, 0 100%)"
        />
        <Layer
          color="var(--color-ground-1)"
          zIndex={3}
          height="45%"
          clipPath="polygon(0 55%, 14% 50%, 29% 56%, 44% 48%, 63% 57%, 79% 49%, 100% 58%, 100% 100%, 0 100%)"
        />
        <Layer
          color="var(--color-ground-2)"
          zIndex={4}
          height="35%"
          clipPath="polygon(0 52%, 18% 64%, 31% 50%, 46% 63%, 63% 51%, 81% 60%, 100% 48%, 100% 100%, 0 100%)"
        />

        <div className="hero-copy paper-card">
          <h1>Historias que cobran vida</h1>
          <p>
            Convierte ideas en aventuras interactivas con escenas animadas, personajes memorables y caminos
            narrativos infinitos.
          </p>
          <button type="button" className="cta-button">Crea tu cuento</button>
        </div>
      </div>
    </section>
  );
}

export default Scene;
