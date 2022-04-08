export default {
  target: "static",

  head: {
    title: "Elanode - Your Digital Solution - Indonesia",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Elanode is a creative digital agency based in Tangerang, Indonesia which aims to empower people and their businesses with digital solutions.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Work+Sans:wght@700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=DM Sans",
      },
    ],
  },

  // '@/assets/css/main.css'
  css: ["~/assets/main.css"],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/eslint-module", "nuxt-windicss"],

  modules: [],

  router: {
    linkExactActiveClass: "dark:bg-gray-700 bg-gray-100",
  },

  build: {
    // postcss: {
    //   plugins: {
    //     tailwindcss: {},
    //     autoprefixer: {},
    //   },
    // },
  },
};
