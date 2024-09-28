// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "享樂酒店",
      meta: [
        {
          name: "高雄豪華住宿之選",
          content: "我們致力於為您提供無與倫比的奢華體驗與優質服務",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&display=swap",
        },
      ],
    },
  },
});
