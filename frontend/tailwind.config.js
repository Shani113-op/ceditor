/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A",
        surface: "#111827",
        border: "#1F2937",
        primary: "#3B82F6",
        accent: "#22D3EE",
        textPrimary: "#E5E7EB",
        textMuted: "#9CA3AF",
        success: "#22C55E",
        warning: "#FACC15",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
}
