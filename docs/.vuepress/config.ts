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
                        text: 'Home',
                        link: '/',
                    },
                    {
                        text: 'Development',
                        link: '/development/dev.md',
                        activeMatch:'^/development/',
                    },
                    {
                        text: 'Links',
                        link: '/links',
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/laiiihz',
                    },
                ],
                sidebar: {
                    '/development': [
                        {
                            text: 'dev',
                            link: '/development/dev.md',
                        },
                        {
                            text: 'Flutter',
                            children: [
                                {
                                    text: 'package',
                                    link: '/development/flutter/package.md',
                                }
                            ],
                        }
                    ],
                },
            },
        },
    },

})