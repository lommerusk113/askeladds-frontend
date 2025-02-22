export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {}, // Correct way to use Tailwind with PostCSS v4
      autoprefixer: {},
    },
  },

  imports: {
    dirs: ['utilities']
  },

  compatibilityDate: "2025-02-20",

  plugins: ["~/plugins/fontawesome"], // Added FontAwesome plugin
});
