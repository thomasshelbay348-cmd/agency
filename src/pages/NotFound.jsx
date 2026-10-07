import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <section className="section not-found">
      <div className="container center">
        <p className="big-404">404</p>
        <h1>Page not found</h1>
        <p className="muted">The page you are looking for does not exist or was moved.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
