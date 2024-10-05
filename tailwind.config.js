/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: ["./src/**/*.{js,jsx,html,css}"],
  theme: {
    extend: {},
  },
  plugins: [forms],
}