// tailwind.config.js
const { heroui } = require('@heroui/react');
const hero = require('./src/app/hero'); // path to your hero.ts config

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    heroui(hero),
  ],
};
