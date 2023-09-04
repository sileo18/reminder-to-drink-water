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
        'lighter-blue': '#88C9F9',
        'dark-text': '#1F2128',
        'gray-text': '#4E4964',
        'gray-4000': '#1D1B26',
        'gray-2000': '#322F40',
      }
    },
  },
  plugins: [],
}
export default config
