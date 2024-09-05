/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        pink: '#ECBDF2',
        orange: '#F28627',
        red: '#CD4040',
        grey: '#D9D2E6',
        purple: {
          50: '#EEEDF1',
          100: '#CBC7D4',
          200: '#B2ABBF',
          300: '#8E85A1',
          400: '#796D8F',
          500: '#574973',
          600: '#4F4269',
          700: '#3E3452',
          800: '#30283F',
          900: '#251F30',
        },
        peach: {
          50: '#FEF6F6',
          100: '#FBE4E4',
          200: '#F9D7D7',
          300: '#F6C4C4',
          400: '#F5B9B9',
          500: '#F2A7A7',
          600: '#DC9898',
          700: '#AC7777',
          800: '#855C5C',
          900: '#664646',
        },
    },
  },
  plugins: [],
},
};