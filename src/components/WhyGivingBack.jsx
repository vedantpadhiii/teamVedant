import { motion } from 'framer-motion';

/**
 * WhyGivingBack Component
 * Two-column section explaining gratitude and cause
 */
export default function WhyGivingBack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="section bg-gradient-to-b from-primary-50 to-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-6xl text-primary-900 mb-4 font-display">Why I'm Giving Back</h2>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column - Text Content */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 font-display">
                Gratitude in Action
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I am forever grateful to the doctors, surgeons, nurses, researchers, and my family who supported me through some of the most challenging moments of my life.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
            Running this marathon is about more than completing 26.2 miles. It represents my commitment to giving back to the community that helped me survive and thrive. I hope to ensure that future patients and families facing similar challenges have access to the care, research, and support they need. They should never feel like they're alone--we're all with them.
          </motion.p>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
            </motion.p>
          </motion.div>

          {/* Right Column - Highlight Card */}
          <motion.div
            variants={itemVariants}
            className="card bg-gradient-to-br from-accent-50 to-accent-100 border-l-4 border-accent-500 p-8 md:p-12 shadow-lg"
            whileHover={{ 
              y: -10, 
              boxShadow: '0 25px 50px rgba(232, 106, 82, 0.2)' 
            }}
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm uppercase tracking-widest text-accent-600 font-bold mb-3 font-sans">
                Our Impact
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 font-display">
                Lucile Packard Children's Hospital--Stanford
              </h3>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                className="border-l-4 border-accent-500 pl-4"
                whileHover={{ x: 5 }}
              >
                <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-1 font-sans">
                  Where Your Funds Go
                </p>
                <p className="text-lg text-gray-800 font-semibold font-sans">
                  Colorectal Research Foundation, Pediatric Cancer Research, and Patient Support Programs
                </p>
              </motion.div>
            </div>

            {/* Stat Highlight */}
            <motion.div>
              <motion.p>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
