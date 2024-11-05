/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      background: '#f0f0f0',
      primary: '#ff0000',
      muted: '#00000099',
      dark: '#1c1b21',
      darkest: '#1c1b21',
      light: '#ffffff',
    },
    extend: {
      backgroundImage: {
        'secondary-gradient':
          'linear-gradient(60deg, #fbb03b 13.39%, #ff6b00 86.61%)',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '7.5rem',
      },
    },
  },
  plugins: [],
};
