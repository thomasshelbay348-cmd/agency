import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { site, services } from '../data/site.js';

const emptyForm = { name: '', email: '', service: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!emailPattern.test(values.email)) errors.email = 'Please enter a valid email.';
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function Contact() {
  usePageTitle('Contact');
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // TODO: send `values` to your backend here (Firebase, Formspree, EmailJS, your own API...).
    console.log('Contact form submitted:', values);
    setSent(true);
    setValues(emptyForm);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Contact</span>
          <h1>Let&apos;s talk about your project</h1>
          <p>Fill in the form and we will get back to you within one business day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="card contact-info">
            <h3>Get in touch</h3>
            <ul className="contact-list big">
              <li><Icon name="mail" size={20} /> {site.email}</li>
              <li><Icon name="call" size={20} /> {site.phone}</li>
              <li><Icon name="pin" size={20} /> {site.address}</li>
            </ul>
          </div>

          <div className="card">
            {sent ? (
              <div className="success" role="status">
                <Icon name="check" size={40} />
                <h3>Thank you!</h3>
                <p>Your message has been received. We will reply very soon.</p>
                <button type="button" className="btn btn-outline" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" value={values.name} onChange={handleChange} autoComplete="name" />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={values.email} onChange={handleChange} autoComplete="email" />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="field">
                  <label htmlFor="service">Service</label>
                  <select id="service" name="service" value={values.service} onChange={handleChange}>
                    <option value="">Select a service (optional)</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} />
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-block">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
