import { resolve } from 'path'
import { DefaultTheme } from 'vitepress'
import { readdirSync, statSync, readFileSync } from 'fs'
import matter from 'gray-matter'

function getBlogSidebar(): DefaultTheme.Sidebar {
    const current = blogPathAbsolute()
    const dirs = readdirSync(current)
    let paths = dirs.filter(e => e != 'index.md' && statSync(blogPathAbsolute(e)).isDirectory()).map(e => {
        // let items = readdirSync(a.path, { withFileTypes: true }).filter(e => e.isFile)
        return {
            text: e,
            items: readdirSync(blogPathAbsolute(e)).map(item => getSidebarItem(e, item)),
            collapsed: false,
        }
    })
    return {
        '/blogs/': {
            base: '/blogs/',
            items: paths,
        }
    }
}

function getSidebarItem(parent: string, dir: string): DefaultTheme.SidebarItem {
    return {
        // text: dir,
        text: getTitle(parent, dir),
        base: `/blogs/${parent}/`,
        link: dir,
    }
}

function getTitle(parent: string, dir: string): string {
    let filePath = blogPathAbsolute(`${parent}/${dir}`)
    let buf = readFileSync(filePath)
    let content = buf.toString()
    let { data } = matter(content)
    return data['title'] ?? ''

}

function blogPath(item: string | null = null) {
    return ['.', 'docs', 'blogs', item].join('/')
}

function blogPathAbsolute(item: string | null = null): string {
    return resolve(blogPath(item))
}

export { getBlogSidebar }