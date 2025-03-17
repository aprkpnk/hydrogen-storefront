import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'sm-max': {max: '48em'},
        'sm-only': {min: '32em', max: '48em'},
        'md-only': {min: '48em', max: '64em'},
        'lg-only': {min: '64em', max: '80em'},
        'xl-only': {min: '80em', max: '96em'},
        '2xl-only': {min: '96em'},
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        gothic: ['Franklin Gothic ATF', 'sans-serif'],
      },
      maxWidth: {
        369: '369px',
      },
      height: {
        301: '301px',
      },
      lineHeight: {
        base: '1.1',
      },
      padding: {
        productCard: '27px 22px 34px',
        badge: '7px 16px 3px',
      },
      aspectRatio: {
        productCard: '275 / 301',
      },
      borderRadius: {
        10: '10px',
      },
      borderColor: {
        e8e8e8: '#E8E8E8',
      },
      spacing: {
        '5px': '5px',
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
};
