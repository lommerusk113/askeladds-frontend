export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],

  plugins: [
    { src: '~/plugins/supabase.client.ts', mode: 'client' }
  ],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {}, // Correct way to use Tailwind with PostCSS v4
      autoprefixer: {},
    },
  },

  imports: {
    dirs: ['utilities']
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseKey: process.env.SUPABASE_KEY || ''
    }
  },

  compatibilityDate: "2025-02-20",

  plugins: ["~/plugins/fontawesome"], // Added FontAwesome plugin
});
