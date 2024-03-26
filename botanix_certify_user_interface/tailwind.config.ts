import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight: {
      thin: '100',
      'ultra-light': '200',
      light: '300',
      regular: '400',
      medium: '500',
      'semi-bold': '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      fontSize: {
        'h-1': ['55px', { lineHeight: '64px', fontWeight: 600 }],
        'h-2': ['48px', { lineHeight: '56px', fontWeight: 600 }],
        'h-3': ['36px', { lineHeight: '40px', fontWeight: 600 }],
        'h-4': ['24px', { lineHeight: '28px', fontWeight: 600 }],
        'h-5': ['20px', { lineHeight: '28px', fontWeight: 600 }],
        'body-bold': ['16px', { lineHeight: '26px', fontWeight: 500 }],
        body: ['16px', { lineHeight: '26px', fontWeight: 400 }],
        'body-small': ['14px', { lineHeight: '22px', fontWeight: 400 }],
        button: ['14px', { lineHeight: '22px', fontWeight: 500 }],
        caption: ['12px', { lineHeight: '16px', fontWeight: 400 }],
        overline: ['10px', { lineHeight: '16px', fontWeight: 400 }],
      },
      colors: {
        white: '#F1F1F1',
        primary: {
          main: '#FEA700',
          dark: '#A96F00',
          5: '#FFF8EB',
          10: '#FFEDCC',
          20: '#FFE2AA',
          40: '#FED380',
          60: '#FEC455',
          80: '#FEB62B',
        },
        black: {
          main: '#25282B',
          dark: '#0B0B0C',
          5: '#F9F9FA',
          10: '#E8E8E8',
          20: '#DBDDE0',
          40: '#CACCCF',
          60: '#A0A4A8',
          80: '#52575C',
        },
        neutral: {
          100: '#F1F5F9',
        },
      },
    },
  },
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },

  plugins: [require('@tailwindcss/forms'), require('autoprefixer')],
}
export default config
