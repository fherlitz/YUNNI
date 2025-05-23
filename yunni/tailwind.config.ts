import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fixture: ['Fixture', 'sans-serif'],
      },
      colors: {
        // Add any custom colors here
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config 