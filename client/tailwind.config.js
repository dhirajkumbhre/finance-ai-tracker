/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#f5f7fa",
        bgDark: "#111827",

        cardLight: "#ffffff",
        cardDark: "#1f2937",

        primary: "#2563eb",
        primaryLight: "#3b82f6",
        primaryDark: "#1e40af"
      },
      boxShadow: {
        card: "0 4px 14px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
