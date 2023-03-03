// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "天涯碧草话斜阳",
            meta: [
                { name: "description", content: "专注于前端技术分享" },
                { name: "keywords", content: "nuxt,vue,ts,frontend" },
            ]
        }
    },
    css: ["assets/global.css"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: '@import "~/assets/_variables.scss";',
                },
            },
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        "@huntersofbook/naive-ui-nuxt",
        [
            "@pinia/nuxt",
            {
            autoImports: [
                // 自动引入 `defineStore(), storeToRefs()`
                "defineStore",
                "storeToRefs"]
            }
        ]
    ],
    imports: {
        dirs: [
            // 扫描顶层目录中模块
            'composables',
            // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
            'composables/*/index.{ts,js,mjs,mts}',
            // 扫描给定目录中所有模块
            'composables/**'
        ]
    },

});
