import { Globe, Monitor, Smartphone, PenTool, TrendingUp, Bot, MapPin, Megaphone } from 'lucide-react';

// All text/content lives here. Edit this file to rebrand the whole site.
// NOTE: everything below is placeholder content - replace with your own.

export const site = {
  name: 'NexMove Development',
  tagline: 'We build digital products that grow your business.',
  email: 'nexmove.pk@gmail.com',
  phone: '+92 322 5673641',
  address: 'Lahore, Pakistan',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
};

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

export const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '45+', label: 'Happy clients' },
  { value: '6', label: 'Years of experience' },
  { value: '98%', label: 'Client satisfaction' },
];

export const services = [
  {
    icon: Globe,
    title: 'Website Development',
    text: 'Custom, responsive websites designed to engage your audience and drive conversions.',
    points: ['Custom React / Vite front-ends', 'Scalable back-ends', 'SEO-friendly markup', 'E-commerce integration'],
  },
  {
    icon: Monitor,
    title: 'Software Development',
    text: 'Custom software applications built with modern technologies — fast, scalable, and tailored to your requirements.',
    points: ['SaaS platforms', 'Custom CRM / ERP', 'API development', 'Cloud deployment'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    text: 'Native and cross-platform mobile apps that deliver exceptional experiences on iOS and Android.',
    points: ['React Native', 'iOS & Android', 'Push notifications', 'App store optimization'],
  },
  {
    icon: PenTool,
    title: 'Web Designing',
    text: 'Stunning user interfaces and seamless user experiences that reflect your brand identity.',
    points: ['Wireframes & Prototypes', 'Figma design systems', 'UI / UX audits', 'Mobile-first design'],
  },
  {
    icon: TrendingUp,
    title: 'Search Engine Optimization (SEO)',
    text: 'Data-driven SEO strategies that improve your visibility, rankings, and organic traffic.',
    points: ['Keyword research', 'On-page SEO', 'Technical audits', 'Link building'],
  },
  {
    icon: Bot,
    title: 'Answer Engine Optimization (AEO)',
    text: 'Optimize your content for AI-driven answer engines and conversational search platforms.',
    points: ['Content structuring', 'Knowledge graph integration', 'AI readiness', 'Conversational query targeting'],
  },
  {
    icon: MapPin,
    title: 'Generative Engine Optimization (GEO)',
    text: 'Advanced local and generative search optimization to put your business on the digital map.',
    points: ['Local SEO', 'Google Business Profile', 'Generative AI content', 'Local citations'],
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    text: 'Engaging social media campaigns that build brand loyalty and connect you with the right audience.',
    points: ['Content strategy', 'Community management', 'Paid social ads', 'Performance reporting'],
  },
];

export const process = [
  { title: 'Discover', text: 'We learn your goals, audience and constraints in a short kick-off call.' },
  { title: 'Design', text: 'Wireframes and a clickable prototype so you see the result before we build.' },
  { title: 'Build', text: 'Weekly builds you can review, with clean code and no surprises.' },
  { title: 'Launch & grow', text: 'We deploy, monitor, and keep improving with real user data.' },
];

export const packages = [
  {
    name: 'Starter',
    monthly: 299,
    blurb: 'Perfect for small businesses starting their digital journey.',
    features: ['Basic Website Setup', 'Local SEO (GEO) Basics', 'Social Media Setup', 'Monthly Performance Report'],
  },
  {
    name: 'Growth',
    monthly: 599,
    popular: true,
    blurb: 'Ideal for growing companies needing comprehensive digital services.',
    features: ['Custom Web Design & Dev', 'Advanced SEO & AEO', 'Social Media Management', 'Bi-weekly Analytics'],
  },
  {
    name: 'Enterprise',
    monthly: 'Custom',
    blurb: 'Tailored solutions for large-scale operations and complex needs.',
    features: ['Custom Software/Mobile App', 'Full-Scale Marketing Strategy', 'Dedicated Account Manager', '24/7 Priority Support'],
  },
];

export const faqs = [
  { q: 'How long does a typical project take?', a: 'A standard business website takes 2 to 4 weeks. Larger web apps are scoped individually and delivered in weekly milestones.' },
  { q: 'Do I own the code and the design?', a: 'Yes. Once the final payment is made, all source code, design files and assets are yours.' },
  { q: 'Can I change my package later?', a: 'Absolutely. You can upgrade or downgrade at the start of any billing period.' },
  { q: 'Do you offer maintenance after launch?', a: 'Yes. Every package includes support, and we offer separate maintenance plans for updates and monitoring.' },
];

export const team = [
  { name: 'Ayesha Khan', role: 'Founder & Creative Director', bio: 'Leads strategy and design with 8 years in digital branding.' },
  { name: 'Hamza Ali', role: 'Lead Full-stack Developer', bio: 'React, Node and Firebase specialist who loves clean architecture.' },
  { name: 'Sara Malik', role: 'UI / UX Designer', bio: 'Turns messy ideas into simple, beautiful interfaces.' },
  { name: 'Usman Raza', role: 'Growth Marketer', bio: 'SEO and paid-media expert focused on measurable results.' },
];

export const testimonials = [
  { name: 'Bilal A.', company: 'Retail startup', text: 'They delivered our store in three weeks and sales doubled in the first month. Communication was excellent.' },
  { name: 'Fatima R.', company: 'Clinic owner', text: 'The booking chatbot saves my reception team hours every day. Clean work and fair pricing.' },
  { name: 'Daniel P.', company: 'SaaS founder', text: 'Great design sense and solid code. Our new dashboard feels fast and our users noticed immediately.' },
];

export const values = [
  { title: 'Clarity', text: 'Plain language, honest timelines and no hidden costs.' },
  { title: 'Craft', text: 'Small details matter, so we sweat them on every project.' },
  { title: 'Results', text: 'We measure success by your growth, not by hours billed.' },
];
