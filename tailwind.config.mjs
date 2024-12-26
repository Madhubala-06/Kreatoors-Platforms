/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "rgba(102, 112, 133, 1)",
        pink500:"rgba(227, 97, 123, 1)"
      },

      backgroundImage: {
        'hero-custom-gradient': "linear-gradient(180deg, #FFFFFF 34.74%, #FFE5EA 100%)",
        'pink-gradient':"linear-gradient(0deg, #FFADBD 0%, #FB96AA 96.03%)",
        'btn-gradient':"linear-gradient(92.4deg, #EE93A5 2.15%, #F5A3B3 99.74%)",

       'footer-gradient': "linear-gradient(180deg, #FFFFFF 0%, #FFE5EA 100.12%)"

        
      },


    },
  },
  plugins: [],
};
