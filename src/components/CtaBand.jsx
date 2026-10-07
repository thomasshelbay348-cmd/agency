import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function CtaBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2>Ready to start your project?</h2>
          <p>Tell us what you need and we will reply within one business day.</p>
          <Link to="/contact" className="btn btn-light">
            Start a conversation <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
