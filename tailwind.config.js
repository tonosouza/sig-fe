/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12172A',
          light: '#1D2440',
          lighter: '#2A3358',
        },
        paper: {
          DEFAULT: '#F1F2F4',
          card: '#FFFFFF',
        },
        ledger: {
          DEFAULT: '#1F6F54',
          dark: '#155641',
          light: '#E4F1EC',
        },
        stamp: {
          red: '#B23A3A',
          amber: '#B8862B',
        },
        slate: {
          text: '#3A3F4B',
          muted: '#6B7280',
        },
        // --- Tema oscuro "Aurora" para las pantallas de acceso (login/signup) ---
        night: {
          DEFAULT: '#050B12',
          surface: '#0A161D',
          card: '#0C1B23',
          border: '#16323366',
        },
        aurora: {
          DEFAULT: '#22D3C7',
          bright: '#5EEAD4',
          dark: '#0E9488',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        auth: ['"Sora"', '"IBM Plex Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(18, 23, 42, 0.06), 0 1px 0 rgba(18, 23, 42, 0.04)',
      },
    },
  },
  plugins: [],
};
