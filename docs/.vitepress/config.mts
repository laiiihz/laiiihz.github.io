import { defineConfig } from 'vitepress'
import { getBlogSidebar } from './src/blog_sidebar'
function getCurrentYear(): number {

  return (new Date()).getFullYear()
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "laihz.dev",
  description: "laihz's blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blogs/' },
      { text: 'Apps', link: '/apps/' },
      { text: 'Links', link: '/links/' },
    ],
    sidebar: {
      ...getBlogSidebar(),
      '/apps/': {
        base: '/blogs/',
        items: [
          {
            text: 'dir',
            link: 'dir',
          }
        ]
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laiiihz' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${getCurrentYear()} laihz.dev`
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/laiiihz/laiiihz.github.io/edit/main/docs/:path',
      text: '在GitHub上编辑'
    },
    externalLinkIcon: true
  },
  appearance: 'dark',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://laiiihz.github.io',
    lastmodDateOnly: false
  }
})


