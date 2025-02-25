export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],

  plugins: [
    { src: '~/plugins/Supabase.ts', mode: 'client' },
    { src: '~/plugins/fontawesome' },
    { src: '~/services/ProfileService' } // Add your new profile service plugin
  ],

  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      include: ['types/**/*.d.ts']
    }
  },

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
});
