// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["assets/styles/default.scss"],
  app: {
    head: {
      titleTemplate: '%s - oasobi',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/favicon.ico" },
      ],
    },
  },
  modules: [
    [
      "nuxt-cloudflare-analytics",
    {
      token: "0795e4cc07b446fc892ca94e5eb4e09b"
    }
    ]
  ]
});
