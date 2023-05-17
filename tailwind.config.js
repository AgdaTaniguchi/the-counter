/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
        colors: {
            'background': '#0f0e17',
            'headline': '#fffffe',
            'paragraph': '#a7a9be',
            'primary': '#ff8906',
            'secondary': '#f25f4c',
            'tertiary': '#e53170',
        }
    },
  },
  plugins: [],
}

