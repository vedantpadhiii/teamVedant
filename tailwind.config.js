export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Crimson Text', 'Garamond', 'Georgia', 'serif'],
        serif: ['Crimson Text', 'Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#faf8f6',
          100: '#f4ede6',
          200: '#e8dcd3',
          300: '#d4bfaa',
          400: '#b8947a',
          500: '#8b6f5a',
          600: '#6b5547',
          700: '#523d36',
          800: '#3d2c24',
          900: '#2a1f1a',
        },
        accent: {
          50: '#fef8f5',
          100: '#fdeee6',
          200: '#f9d7c8',
          300: '#f5b8a0',
          400: '#f09278',
          500: '#e86a52',
          600: '#d9533a',
          700: '#c63f28',
          800: '#a83222',
          900: '#7d251a',
        },
        warmth: '#f5d5b8',
        earth: '#5a4a3a',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'swing': 'swing 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232, 106, 82, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(232, 106, 82, 0.5)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)', transformOrigin: 'top center' },
          '50%': { transform: 'rotate(1.5deg)', transformOrigin: 'top center' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
