import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';

/**
 * Donate Component
 * Highlighted CTA section with fundraising progress
 */
export default function Donate() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        {/* Main CTA Banner */}
        <motion.div
          className="card bg-gradient-to-r from-primary-900 via-earth to-primary-800 p-8 md:p-16 mb-16 overflow-hidden relative border-l-4 border-accent-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          whileHover={{ boxShadow: '0 20px 60px rgba(232, 106, 82, 0.2)' }}
        >
          {/* Decorative background */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-accent-500 opacity-15 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-72 h-72 bg-primary-600 opacity-10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Help Me Reach the Finish Line
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-warmth mb-8 max-w-2xl mx-auto font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Your support helps make this journey possible. You can send a contribution through PayPal, Cash App, or Zelle. Together, we can make it through the hard miles—and help get the full donation total matched through a company.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-white max-w-2xl mx-auto font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Every contribution, of any size, moves us closer to the goal. Thank you for showing up and being part of this effort.
            </motion.p>
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center font-display">
            Fundraising Progress
          </h3>

          {/* Progress Bar Component */}
          <motion.div 
            className="card p-8 md:p-12 bg-primary-50"
            whileHover={{ boxShadow: '0 15px 40px rgba(26, 125, 158, 0.1)' }}
          >
            <ProgressBar raised={404} goal={5000} />
          </motion.div>

          {/* Supporting Text */}
          <motion.p 
            className="text-center text-gray-600 mt-8 text-base md:text-lg font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Thank you to everyone who has contributed so far! Let's keep pushing toward our goal.
          </motion.p>

          {/* Payment details block - moved here per request */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="p-6 bg-black/60 text-white rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold mb-3">Help Me Reach the Finish Line</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Zelle:</strong> vpadhi08@gmail.com</li>
                <li><strong>PayPal:</strong> reetapal@gmail.com</li>
                <li><strong>Cash:</strong> It's appreciated — we can work out details in messages.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
