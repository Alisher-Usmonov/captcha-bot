// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NuxtMus",
      meta: [
        {
          name: "description",
          content: "Nuxt For Dev",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
