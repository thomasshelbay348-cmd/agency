import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import TiltCard from '../components/TiltCard.jsx';
import { motion } from 'framer-motion';
import { services } from '../data/site.js';

/* ── Animated counter hook ── */
function useCounter(target, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);
  return count;
}

/* ── Single stat box ── */
function StatBox({ value, suffix = '', label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCounter(parseInt(value), 1800, visible);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="dpo-stat-box" ref={ref}>
      <span className="dpo-stat-number">{count}{suffix}</span>
      <span className="dpo-stat-label">{label}</span>
    </div>
  );
}



/* ── Process steps ── */
const steps = [
  { num: '01', title: 'Discovery', text: 'We deep-dive into your goals, challenges and market to build a crystal-clear picture of what success looks like.' },
  { num: '02', title: 'Strategy', text: 'We craft a bespoke digital roadmap with timelines, milestones and measurable KPIs aligned to your objectives.' },
  { num: '03', title: 'Execution', text: 'Our expert team delivers with precision — weekly updates, transparent progress and zero surprises.' },
  { num: '04', title: 'Growth', text: 'We continuously monitor, analyse and optimise to ensure long-term results and sustainable business growth.' },
];

/* ── Testimonials ── */
const testimonials = [
  { name: 'Ahmed Raza', role: 'CEO, TechVenture PK', text: 'NexMove Developments transformed our operations completely. Their AI automation saved us 20+ hours per week. Exceptional results and professionalism.' },
  { name: 'Sarah Mitchell', role: 'Founder, E-Commerce Brand', text: 'The branding and digital marketing team delivered beyond expectations. Our online sales grew 180% within 3 months of working with them.' },
  { name: 'Usman Tariq', role: 'Director, FinTech Startup', text: 'Their custom software development is top-tier. Clean code, on-time delivery and a team that truly understands the product vision.' },
];

/* ── Why choose us ── */
const whyUs = [
  { icon: '🏆', title: 'Proven Track Record', text: '200+ successful projects delivered across industries in Pakistan and internationally.' },
  { icon: '⚡', title: 'Fast Turnaround', text: 'We move fast without compromising quality — because your time is money.' },
  { icon: '🔒', title: 'Transparent Pricing', text: 'No hidden fees, no surprises. Clear quotes and honest timelines every time.' },
  { icon: '💡', title: 'Innovative Solutions', text: 'We leverage the latest AI and technology to give your business a competitive edge.' },
];

export default function Home() {
  usePageTitle('Digital Transformation Company | NexMove Developments Official');

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="dpo-hero">
        {/* Video Background */}
        <video
          className="dpo-hero-video"
          src="/Marko-Video-Background.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="dpo-hero-bg-overlay" />
        <div className="dpo-hero-particles">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="dpo-particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="container dpo-hero-content">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="dpo-hero-badge"
          >
            <span className="dpo-badge-dot" />
            Digital Transformation Experts - Lahore, Pakistan
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="dpo-hero-title"
          >
            Transforms Your Business With{' '}
            <span className="dpo-highlight">Digital Innovations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="dpo-hero-sub"
          >
            We are a full service digital transformation company delivering AI automation,
            software development, branding and performance marketing all under one roof.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="dpo-hero-actions"
          >
            <Link to="/contact" className="dpo-btn dpo-btn-primary">
              Get Free Consultation <span className="dpo-btn-arrow">→</span>
            </Link>
            <Link to="/services" className="dpo-btn dpo-btn-outline">
              Explore Services
            </Link>
          </motion.div>
          <div className="dpo-stats-row">
            <StatBox value={200} suffix="+" label="Projects Delivered" />
            <StatBox value={98} suffix="%" label="Client Satisfaction" />
            <StatBox value={50} suffix="+" label="Happy Clients" />
            <StatBox value={5} suffix="+" label="Years Experience" />
          </div>
        </div>
        <div className="dpo-scroll-hint"><span /></div>
      </section>

      {/* ═══ TRUSTED BY ═══ */}
      <section className="dpo-trusted">
        <div className="container">
          <div className="dpo-trusted-inner">
            <div className="dpo-trusted-text-row">
              <Reveal direction="right">
                <h2 className="dpo-trusted-title">
                  Trusted by Businesses That Value Structure, Clarity & Long Term Results
                </h2>
              </Reveal>
              <Reveal direction="left">
                <p className="dpo-trusted-desc">
                  We work with organizations to identify underlying business challenges, implement solutions through a structured approach, and build scalable systems that support long term efficiency, performance, and growth.
                </p>
              </Reveal>
            </div>
            
            <Reveal direction="up" delay={200}>
              <div className="dpo-trusted-logos">
                <div className="dpo-trusted-logos-track">
                  {[...['Startup Lahore', 'PakTech Solutions', 'NovaBrand', 'SwiftApps', 'GrowthLab', 'DigitalEdge'], ...['Startup Lahore', 'PakTech Solutions', 'NovaBrand', 'SwiftApps', 'GrowthLab', 'DigitalEdge']].map((b, i) => (
                    <div key={`${b}-${i}`} className="dpo-trusted-logo-card">
                      <span className="dpo-trusted-logo">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="dpo-section" id="services">
        <div className="container">
          <Reveal direction="left">
            <div className="dpo-section-header">
              <span className="dpo-eyebrow">What We Do</span>
              <h2 className="dpo-section-title">
                Comprehensive Digital Services Built Around{' '}
                <span className="dpo-highlight">Your Growth</span>
              </h2>
              <p className="dpo-section-sub">
                From AI-powered automation to stunning brand identities — we handle every dimension
                of your digital presence so you can focus on running your business.
              </p>
            </div>
          </Reveal>
          <div className="dpo-services-grid">
            {services.map((s, i) => {
              const dirs = ['left', 'up', 'right', 'right', 'down', 'left'];
              const IconComponent = s.icon;
              return (
                <TiltCard key={s.title} depth={30} direction={dirs[i % 6]} delay={i * 100}>
                  <div className="dpo-service-card">
                    <div className="dpo-service-icon">
                      <IconComponent size={28} strokeWidth={1.75} />
                    </div>
                    <h3 className="dpo-service-title">{s.title}</h3>
                    <p className="dpo-service-text">{s.text}</p>
                    <Link to="/services" className="dpo-service-link">Learn more →</Link>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="dpo-section dpo-why-section">
        <div className="container dpo-why-inner">
          <Reveal direction="right">
            <div className="dpo-why-text">
              <span className="dpo-eyebrow">Why Choose Us</span>
              <h2 className="dpo-section-title">
                We Don't Just Deliver Projects —{' '}
                We Deliver <span className="dpo-highlight">Results</span>
              </h2>
              <p className="dpo-section-sub" style={{ maxWidth: '480px' }}>
                NexMove Developments combines deep technical expertise with a results-first
                mindset. Every solution we build is designed to generate real, measurable
                business impact for you.
              </p>
              <Link to="/about" className="dpo-btn dpo-btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Learn About Us →
              </Link>
            </div>
          </Reveal>
          <div className="dpo-why-cards">
            {whyUs.map((w, i) => (
              <TiltCard key={w.title} depth={20} direction="left" delay={i * 150}>
                <div className="dpo-why-card">
                  <span className="dpo-why-icon">{w.icon}</span>
                  <div>
                    <h4 className="dpo-why-title">{w.title}</h4>
                    <p className="dpo-why-body">{w.text}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="dpo-section dpo-process-section">
        <div className="container">
          <Reveal direction="down">
            <div className="dpo-section-header">
              <span className="dpo-eyebrow">How We Work</span>
              <h2 className="dpo-section-title">
                A Simple Process,{' '}
                <span className="dpo-highlight">Remarkable Results</span>
              </h2>
              <p className="dpo-section-sub">
                Our proven 4-step methodology ensures every project is delivered on time,
                on budget and exceeds your expectations.
              </p>
            </div>
          </Reveal>
          <div className="dpo-process-grid">
            {steps.map((s, i) => (
              <TiltCard key={s.num} depth={40} direction="up" delay={i * 150}>
                <div className="dpo-process-card">
                  <div className="dpo-process-num">{s.num}</div>
                  <h3 className="dpo-process-title">{s.title}</h3>
                  <p className="dpo-process-text">{s.text}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="dpo-section">
        <div className="container">
          <Reveal direction="left">
            <div className="dpo-section-header">
              <span className="dpo-eyebrow">Client Stories</span>
              <h2 className="dpo-section-title">
                What Our Clients Say About{' '}
                <span className="dpo-highlight">Working With Us</span>
              </h2>
            </div>
          </Reveal>
          <div className="dpo-testi-grid">
            {testimonials.map((t, i) => (
              <TiltCard key={t.name} depth={20} direction={i % 2 === 0 ? 'right' : 'up'} delay={i * 150}>
                <div className="dpo-testi-card">
                  <div className="dpo-testi-stars">★★★★★</div>
                  <blockquote className="dpo-testi-quote">"{t.text}"</blockquote>
                  <div className="dpo-testi-author">
                    <div className="dpo-testi-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <strong className="dpo-testi-name">{t.name}</strong>
                      <span className="dpo-testi-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section className="dpo-cta-band">
        <div className="dpo-cta-bg" />
        <div className="container dpo-cta-inner">
          <Reveal direction="up">
            <div className="dpo-cta-content">
              <span className="dpo-eyebrow dpo-eyebrow-light">Ready to Transform?</span>
              <h2 className="dpo-cta-title">
                Let's Build Your Digital Future —<br />Starting Today
              </h2>
              <p className="dpo-cta-sub">
                Schedule a free 30-minute consultation with our experts. No commitment required.
                We'll analyse your business and show you exactly how we can help.
              </p>
              <div className="dpo-cta-actions">
                <Link to="/contact" className="dpo-btn dpo-btn-white">
                  Book Free Consultation →
                </Link>
                <Link to="/packages" className="dpo-btn dpo-btn-ghost-white">
                  View Packages
                </Link>
              </div>
            </div>
          </Reveal>
          <div className="dpo-cta-contact-info">
            <Reveal direction="left" delay={150}>
              <a href="tel:+923225673641" className="dpo-cta-contact-item">
                <span className="dpo-cta-contact-icon">📞</span>
                <div>
                  <span className="dpo-cta-contact-label">Call Us</span>
                  <span className="dpo-cta-contact-val">+92 322 5673641</span>
                </div>
              </a>
            </Reveal>
            <Reveal direction="left" delay={300}>
              <a href="mailto:nexmove.pk@gmail.com" className="dpo-cta-contact-item">
                <span className="dpo-cta-contact-icon">✉️</span>
                <div>
                  <span className="dpo-cta-contact-label">Email Us</span>
                  <span className="dpo-cta-contact-val">nexmove.pk@gmail.com</span>
                </div>
              </a>
            </Reveal>
            <Reveal direction="left" delay={450}>
              <div className="dpo-cta-contact-item">
                <span className="dpo-cta-contact-icon">📍</span>
                <div>
                  <span className="dpo-cta-contact-label">Our Office</span>
                  <span className="dpo-cta-contact-val">128-J DHA Phase 6, Lahore</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

