/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    center: {
      center:true
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary' : '#5b21b6',
        'gray' : '#64748b',
        'dark' : '#1e293b',
        'white' : '#f1f5f9'
      }
    },
  },
  plugins: [],
}

