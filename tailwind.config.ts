import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('../assets/bg-hero.png')",
      'bg-principal': "linear-gradient(90deg, rgba(32,71,186,1) 0%, rgba(32,71,186,1) 35%, rgba(4,178,249,1) 100%)",
      'bg-second': "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 14%)",
      'bg-three': " linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 80%)"
    },
    extend: {
      screens: {
        'promax': '414px'},
      colors: {
      'primary-blue': '#106EB0',
      'primary-orange': '#EC7000',
      'primary-gray': '#33303E',
      'second-gray': '#4E4B59',
      'gray-phone': '#F4F4F4',
      'txt-gray': '#7A7786',
      'opacity-gray': 'rgba(100, 90, 57, 0.1)',

      'blue1': '#2047ba',
      'blue2': '#0483f0',
      'blue3': '#04b2f9',
      }
    },
  },
  plugins: [],
};
export default config;
