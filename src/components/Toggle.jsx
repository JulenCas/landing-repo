import './Toggle.css';

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`theme-toggle ${checked ? 'is-dark' : ''}`}
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      aria-label="Cambiar entre modo claro y oscuro"
    >
      <span className="toggle-thumb" />
      <span className="toggle-label">{checked ? 'Oscuro' : 'Claro'}</span>
    </button>
  );
}

export default Toggle;
