import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
    base: '/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'laiiihz',
            description: 'laiiihz blog',
        },
    },
    themeConfig: {
        docsDir: 'docs',
        locales: {
            '/': {
                navbar: [
                    {
                        text: 'home',
                        link: '/',
                    },
                    {
                        text: 'development',
                        link: '/development/dev.md',
                    },
                    {
                        text: 'github',
                        link: 'https://github.com/laiiihz',
                    },
                ],
                sidebar: {
                    '/development':[
                        {
                            text:'dev',
                            link:'/development/dev.md',
                        }
                    ],
                },
            },
        },
    },

})