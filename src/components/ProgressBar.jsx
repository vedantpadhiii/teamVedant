import { motion } from 'framer-motion';

/**
 * ProgressBar Component
 * Displays fundraising progress toward goal
 */
export default function ProgressBar({ raised = 0, goal = 5000 }) {
  const percentage = Math.min((raised / goal) * 100, 100);

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 md:h-4 overflow-hidden shadow-inner border border-gray-300">
        <motion.div
          className="bg-gradient-to-r from-accent-500 to-accent-600 h-full rounded-full shadow-md"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between items-center mt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-gray-600 font-sans">Raised</p>
          <p className="text-2xl md:text-3xl font-bold text-accent-600 font-display">
            {formatCurrency(raised)}
          </p>
        </motion.div>
        <motion.div 
          className="text-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-gray-600 font-sans">Goal</p>
          <p className="text-2xl md:text-3xl font-bold text-primary-600 font-display">
            {formatCurrency(goal)}
          </p>
        </motion.div>
      </div>

      {/* Percentage */}
      <motion.p 
        className="text-center mt-4 text-lg font-semibold text-accent-600 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Math.round(percentage)}% funded
      </motion.p>
    </div>
  );
}
