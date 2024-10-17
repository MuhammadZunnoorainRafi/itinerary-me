import daisyui from 'daisyui';
import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontSize: {
      '3xl': '36px',
      '2xl': '24px',
      xl: '20px',
      lg: '16px',
      md: '14px',
      base: '12px',
      sm: '10px',
      xs: '8px'
    },
    extend: {
      colors: {
        'dark-blue': '#353360',
        'medium-blue': '#676982',
        'grayish': '#84858A',
       'blue': '#605DA9',
        'light-purple': '#E9E8FF',
        '-': '#EDEDED',
        'light-blue': '#9DBEFF',
        'light-green': '#BAF48D',
        'light-orange': '#FAE585',
        'lavenderMist': '#EBECFC',
        'blueGray': '#6467AC',
        'gunmetal': '#3F3D50'
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans]
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        itineract: {
          primary: '#605DA9',
          secondary: '#353360',
          accent: '#FF9C27',
          neutral: '#676982',
          'base-100': '#FFFFFF',
          'base-200': '#EDEDED',
          'base-300': '#84848A',
          info: '#275EED',
          success: '#00A739',
          warning: '#FAE585',
          error: '#FF0000',
        }
      }
    ]
  }
};
export default config;
