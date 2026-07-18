import { motion } from 'framer-motion';

/**
 * Footer Component
 * Simple thank you note and repeated social icons
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-primary-900 text-white py-12 md:py-16">
      <div className="container-wide">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Thank You Message */}
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-4 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Thank You
          </motion.h3>
          <motion.p 
            className="text-lg text-warmth max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Your support means everything. Together, we're making a difference for patients,
            families, and researchers working toward breakthrough discoveries. This journey
            wouldn't be possible without you.
          </motion.p>

          {/* Hashtag */}
          <motion.p 
            className="text-accent-500 text-xl font-bold mb-8 font-display"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            #TeamVedant
          </motion.p>

          {/* Legal */}
          <motion.div 
            className="border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-white/60 font-sans">
              © {currentYear} Team Vedant, 2026. All rights reserved.
            </p>
            <p className="text-xs text-white/50 mt-4 font-sans">
              Running for a cause. Raising funds for medical research and patient support.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
