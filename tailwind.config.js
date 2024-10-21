/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        "press-start-2p": ['"Press Start 2P"', "system-ui"],
      },
    },
  },
  plugins: [],
};
