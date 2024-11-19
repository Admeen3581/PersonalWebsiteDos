import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueblack: "#021526",
        deepblue: "#03346E",
        skyblue: "#6EACDA",
        lightgray: "#E2E2B6",
      },
      fontFamily: {
        astrospace: ["Astrospace", "sans-serif"],
        ethnocentric: ["Ethnocentric", "sans-serif"],
        bluehighway: ["Blue Highway", "sans-serif"],
      },
    },
  },
  plugins: [
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "@tailwindcss/aspect-ratio",
  ],
};

export default config;
