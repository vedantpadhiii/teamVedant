import { motion } from 'framer-motion';

/**
 * FollowJourney Component
 * Race day details and social sharing section
 */
export default function FollowJourney() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-6xl text-primary-900 mb-4 font-display">Follow the Journey</h2>
          <p className="text-lg text-gray-600 font-sans">
            Stay connected and cheer me on as we cross the finish line together!
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Race Day Details Card */}
          <motion.div 
            variants={itemVariants} 
            className="card p-8 md:p-12 bg-accent-50 border-l-4 border-accent-500"
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(232, 106, 82, 0.15)' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 font-display">Race Day Details</h3>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
              >
                <p className="text-sm uppercase tracking-widest text-gray-600 font-bold mb-2 font-sans">
                  Date
                </p>
                <p className="text-2xl font-bold text-primary-900 font-display">July 26, 2026</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
              >
                <p className="text-sm uppercase tracking-widest text-gray-600 font-bold mb-2 font-sans">
                  Event
                </p>
                <p className="text-2xl font-bold text-primary-900 font-display">
                  San Francisco Marathon
                </p>
              </motion.div>

              

              <div className="pt-4 border-t-2 border-accent-300">
                <p className="text-sm text-gray-600 font-sans">
                  Following the race? Come cheer for me at the finish line at around 9:00am!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Share Section */}
          <motion.div
            variants={itemVariants}
            className="card p-8 md:p-12 bg-primary-50 border-l-4 border-primary-600"
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(26, 125, 158, 0.15)' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 font-display">Share & Support</h3>

            {/* Hashtag */}
            <motion.div 
              className="mb-8 p-4 bg-white rounded-xl border-2 border-accent-200"
              whileHover={{ scale: 1.05 }}
            >
              <motion.p 
                className="text-center text-2xl font-bold text-accent-600 font-display"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                #TeamVedant
              </motion.p>
              <p className="text-center text-sm text-gray-600 mt-2 font-sans">
                Share with this hashtag to cheer us on!
              </p>
            </motion.div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-bold mb-4 font-sans">
                Come cheer me on
              </p>
              <p className="text-base text-gray-700 font-sans">
                I’d love to see you at the finish line. Meet me at Ferry Building in San Francisco at 9:00am to cheer me across the final stretch.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
