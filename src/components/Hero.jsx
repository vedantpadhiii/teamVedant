import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const DONATE_LINK = 'https://www.example.com/donate'; // Update this with your actual donation link

/**
 * Hero Component
 * Full-width hero section with headline, subheadline, CTA button, and countdown timer
 */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-900 via-earth to-primary-900 overflow-hidden flex items-center justify-center pt-20 pb-12 px-4">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-accent-500 opacity-15 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-primary-600 opacity-20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        className="container-wide relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight font-display"
          variants={titleVariants}
        >
          #TeamVedant
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-3xl text-warmth mb-12 font-light max-w-3xl mx-auto font-sans"
          variants={itemVariants}
        >
          Running the San Francisco Marathon
          <br />
          <span className="font-semibold text-accent-300">July 26, 2026</span>
        </motion.p>

        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-warmth/60 text-sm md:text-base uppercase tracking-widest mb-6 font-semibold">
            Countdown to Race Day
          </p>
          <div className="inline-block px-4 py-3 bg-black/60 rounded-xl">
            <CountdownTimer />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
