export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {}, // Correct way to use Tailwind with PostCSS v4
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-02-20",
});