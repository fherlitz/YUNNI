import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        white: 'var(--white)',
      },
      fontFamily: {
        'futura': ['Futura Bold', 'sans-serif'],
        'gasoek': ['Gasoek One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config 