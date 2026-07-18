import { motion } from 'framer-motion';

/**
 * WatchTalk Component
 * Embedded YouTube video with responsive design
 */
export default function WatchTalk() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-6xl text-primary-900 mb-4 font-display">Watch My Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
In April 2025, I was selected as a TEDx speaker, where I shared my medical journey publicly for the first time. Through my story, I hoped to raise awareness for those facing rare challenges and show that embracing vulnerability can inspire connection and hope.          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Responsive YouTube embed */}
          <motion.div 
            className="relative w-full overflow-hidden rounded-2xl shadow-xl border-4 border-accent-500/20"
            whileHover={{ 
              boxShadow: '0 0 40px rgba(232, 106, 82, 0.3)',
              borderColor: 'rgba(232, 106, 82, 0.6)',
            }}
            style={{ paddingBottom: '56.25%' }}
          >
            <motion.iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/zKzR9Lsty-A?rel=0"
              title="My Story - TED Talk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
