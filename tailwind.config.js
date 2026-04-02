/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'n-blue': '#00d2ff',
        'n-purple': '#b400ff',
        'n-pink': '#ff00a0',
        'n-cyan': '#00ffcc',
        'bg-dark': '#0a0a10',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-pattern': 'url("/mesh.svg")', // We can generate a mesh pattern or use css grid background
      }
    },
  },
  plugins: [],
}
