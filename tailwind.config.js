/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px',
        'custom-lg': '1200px',
      },
      fontFamily: {
        'sans': ["Inter","sans serif"],
    },
    colors: {
      'Brand/Primary':'#4CAF4F',
      'Neutral/D_Grey':'#4D4D4D',
      'Neutral/Grey':'#4D4D4D',
      'Neutral/L_Grey':'#89939E',
      'Neutral/Silver':'#F5F7FA',
      'Neutral/White':'#FFFFFF',
      'Text/Gray900':'#18191F',
      'Tint/T5':'#E8F5E9',
      'Neutral/Black':'#263238',
    },
    },
  },
  plugins: [],
}

