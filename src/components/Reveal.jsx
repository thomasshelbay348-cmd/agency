import { motion } from 'framer-motion';

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, direction = 'up' }) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: 50, y: 0 };
      case 'right': return { opacity: 0, x: -50, y: 0 };
      case 'down': return { opacity: 0, y: -50, x: 0 };
      case 'up':
      default: return { opacity: 0, y: 50, x: 0 };
    }
  };

  const variants = {
    hidden: getInitialPosition(),
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.8, delay: delay / 1000, ease: 'easeOut' }
    }
  };

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
