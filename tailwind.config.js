/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        'subtle-float': 'subtle-float 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'subtle-float': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-20px) rotate(1deg)',
          },
          '50%': {
            transform: 'translateY(-40px) rotate(-1deg)',
          },
          '75%': {
            transform: 'translateY(-20px) rotate(1deg)',
          },
        },
        'gradient-shift': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(231, 0, 81, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(231, 0, 81, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
};
