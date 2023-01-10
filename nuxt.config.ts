// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "@/assets/style/global.scss"
    ],
})
