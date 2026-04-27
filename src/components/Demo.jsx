import './Demo.css';

function Demo() {
  return (
    <section id="demo" className="section">
      <h2>Descubre cómo funciona</h2>
      <div className="demo-shell paper-card">
        <iframe
          src="https://www.youtube.com/embed/n1J3JkA0Y9I"
          title="Demostración de Lunara Stories"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Demo;
