// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Alien Encounters"', 'sans'], // Add your custom font here
      },
      colors: {
        'teal': '#7DF9FF', // Add your custom color here
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '15': '15px',
      },
    },
  },
  variants: {},
  plugins: [],
};
