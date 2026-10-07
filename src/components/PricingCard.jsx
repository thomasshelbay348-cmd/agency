import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function PricingCard({ plan, yearly }) {
  const isCustom = plan.monthly === 'Custom';
  const price = isCustom ? 'Custom' : (yearly ? Math.round(plan.monthly * 0.8) : plan.monthly);

  return (
    <article className={`card pricing-card ${plan.popular ? 'popular' : ''}`}>
      {plan.popular && <span className="badge">Most popular</span>}
      <h3>{plan.name}</h3>
      <p className="muted">{plan.blurb}</p>
      <div className="price">
        {isCustom ? (
          <span className="amount">Custom</span>
        ) : (
          <>
            <span className="amount">${price}</span>
            <span className="per">/ month</span>
          </>
        )}
      </div>
      {yearly && !isCustom && <p className="save">Billed yearly, you save 20%</p>}
      <ul className="check-list">
        {plan.features.map((f) => (
          <li key={f}><Icon name="check" size={16} /> {f}</li>
        ))}
      </ul>
      <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-block`}>
        Choose {plan.name}
      </Link>
    </article>
  );
}
