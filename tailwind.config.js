/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',      // Lienzo principal de la invitación
        sand: '#F2EDE4',       // Sobre digital y tarjetas de fecha
        charcoal: '#2C2A29',   // Texto principal y títulos
        stone: '#6E6862',      // Textos secundarios y etiquetas
        champagne: '#B89F7D',  // Sello de lacre, bordes finos y acentos
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        envelope: '0 20px 50px -12px rgba(44, 42, 41, 0.15)',
        wax: '0 8px 20px -4px rgba(140, 114, 78, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.35)',
      },
    },
  },
  plugins: [],
};