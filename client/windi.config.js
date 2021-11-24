import { defineConfig } from 'windicss/helpers';
// import colors from 'windicss/colors'
// import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '10rem',
        '2xl': '12rem',
      },
    },
    extend: {
      //   screens: {
      //     'sm': '640px',
      //     'md': '768px',
      //     'lg': '1024px',
      //     'xl': '1280px',
      //     '2xl': '1536px',
      //   },
      colors: {
        primary: '#32A9EC', // Blue
        secondary: '#A7A7A5',
        black: '#323230',
        success: '#31C186',
        'success-darken': '#4C7162',
        warning: '#969C4A',
      },
      fontFamily: {
        // sans: ['Graphik', 'sans-serif'],
        serif: ['Arial', 'serif'],
      },
      //   spacing: {
      //     128: '32rem',
      //     144: '36rem',
      //   },
      //   borderRadius: {
      //     '4xl': '2rem',
      //   },
      // borderWidth: {
      //   '4xl': '2rem',
      // },
    },
  },
  shortcuts: {
    dark: 'bg-black text-white transition-colors',
    light: 'bg-white text-black transition-colors',
    header: 'font-bold text-2.375rem',
  },
  //   plugins: [
  //     plugin(({ addUtilities }) => {
  //       const newUtilities = {
  //         '.skew-10deg': {
  //           transform: 'skewY(-10deg)',
  //         },
  //         '.skew-15deg': {
  //           transform: 'skewY(-15deg)',
  //         },
  //       }
  //       addUtilities(newUtilities)
  //     }),
  //     plugin(({ addComponents }) => {
  //       const buttons = {
  //         '.btn': {
  //           padding: '.5rem 1rem',
  //           borderRadius: '.25rem',
  //           fontWeight: '600',
  //         },
  //         '.btn-blue': {
  //           'backgroundColor': '#3490dc',
  //           'color': '#fff',
  //           '&:hover': {
  //             backgroundColor: '#2779bd',
  //           },
  //         },
  //         '.btn-red': {
  //           'backgroundColor': '#e3342f',
  //           'color': '#fff',
  //           '&:hover': {
  //             backgroundColor: '#cc1f1a',
  //           },
  //         },
  //       }
  //       addComponents(buttons)
  //     }),
  //     plugin(({ addDynamic, variants }) => {
  //       addDynamic('skew', ({ Utility, Style }) => {
  //         return Utility.handler
  //           .handleStatic(Style('skew'))
  //           .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
  //           .createProperty('transform')
  //       }, variants('skew'))
  //     }),
  //     require('windicss/plugin/filters'),
  //     require('windicss/plugin/forms'),
  //     require('windicss/plugin/aspect-ratio'),
  //     require('windicss/plugin/line-clamp'),
  //     require('windicss/plugin/typography')({
  //       modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
  //     }),
  //   ],
});
