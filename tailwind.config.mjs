/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        xkale: { DEFAULT: "#67D42F" },
        cx: { DEFAULT: "#4D98F7" },
        cs: {
          DEFAULT: "#AF59E8",
          300: "#DBBAE8",
        },
        escudo: { DEFAULT: "#D1DBCC" },
        solar: {
          DEFAULT: "#EBE080",
          100: "#FFFAC9",
          200: "#B2A657",
        },
      },
      backgroundImage: {
        'blog-cover': "url('/image/1.5.webp')"
      }
    },
    screens: {
      sm: { min: "320px", max: "639px" },
      md: { min: "768px", max: "1024px" },
      lg: { min: "1280px" },
      xl: { min: "1440px", max: "2560px" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
