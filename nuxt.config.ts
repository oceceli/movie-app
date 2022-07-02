import { defineNuxtConfig } from 'nuxt'
import { resolve } from "path"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    alias: {
        // 'images': resolve(__dirname, './assets/images'),
        '@assets': resolve(__dirname, './assets'),
    },
})
