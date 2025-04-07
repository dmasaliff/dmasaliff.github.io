/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/App.jsx",
    "src/pages/Login.jsx",
    "src/pages/Settings.jsx",
    "src/pages/ErrorPage.jsx",
    "src/components/Title.jsx",
    "src/components/Input.jsx",
    "src/components/Button.jsx",
    "src/pages/ProductsPage.jsx",
    "src/fragment/CardProduct.jsx",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
    },
  },
  plugins: [],
}

