function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="feature-card paper-card">
      <Icon size={24} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default FeatureCard;
