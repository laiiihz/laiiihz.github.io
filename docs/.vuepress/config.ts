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
                        text: 'HOME',
                        link: '/',
                    },
                    {
                        text: 'DEVELOPMENT',
                        link: '/development/dev.md',
                        activeMatch: '^/development/',
                    },
                    {
                        text: 'LINKS',
                        link: '/links',
                    },
                    {
                        text: 'GITHUB',
                        link: 'https://github.com/laiiihz',
                    },
                ],
                sidebar: {
                    '/development': [
                        {
                            text: 'DEV',
                            link: '/development/dev.md',
                        },
                        {
                            text: 'FLUTTER',
                            children: [
                                {
                                    text: 'PACKAGE',
                                    link: '/development/flutter/package.md',
                                },
                                {
                                    text: 'MY PACKAGE',
                                    link: '/development/flutter/my_package.md',
                                }
                            ],
                        }
                    ],
                },
            },
        },
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
    ],

})