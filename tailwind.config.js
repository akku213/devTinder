/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html", // If you're using an HTML file for entry
      "./src/**/*.{js,jsx,ts,tsx}", // If you're using React files
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
  }
  