import { defineUserConfig } from '@vuepress/cli'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'


export default defineUserConfig({
    base: '/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'laiiihz',
            description: 'laiiihz blog',
        },
    },
    theme: defaultTheme({
        docsDir: 'docs',
        locales: {
            '/': {
                navbar: [
                    {
                        text: '首页',
                        link: '/',
                    },
                    {
                        text: '博客',
                        link: '/blogs/readme.md',
                        activeMatch: '^/blogs/',
                    },
                    {
                        text: '开发',
                        link: '/development/dev.md',
                        activeMatch: '^/development/',
                    },
                    {
                        text: '链接',
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
                            text: '开发',
                            link: '/development/dev.md',
                        },
                        {
                            text: 'Flutter',
                            children: [
                                {
                                    text: 'packages',
                                    link: '/development/flutter/package.md',
                                },
                                {
                                    text: '我的packages',
                                    link: '/development/flutter/my_package.md',
                                }
                            ],
                        }
                    ],
                    '/blogs': [
                        {
                            text: '2022-08',
                            children: [
                                {
                                    text: '在Dart中实现TextMate语法',
                                    link: '/blogs/2022-08/text_mate_in_dart.md'
                                },
                                {
                                    text: 'Readme',
                                    link: '/blogs/2022-08/readme.md'
                                }
                            ]
                        },
                    ],
                },
            }
        },
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: "搜索"
                }
            }
        })
    ],
})