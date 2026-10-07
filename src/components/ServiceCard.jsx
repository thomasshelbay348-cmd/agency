import Icon from './Icon.jsx';

export default function ServiceCard({ icon: IconComponent, title, text, points }) {
  return (
    <article className="card service-card">
      <span className="icon-badge"><IconComponent size={26} strokeWidth={1.5} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
      {points && (
        <ul className="check-list">
          {points.map((p) => (
            <li key={p}><Icon name="check" size={16} /> {p}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
