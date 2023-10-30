---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "laihz.dev"
  text: "laihz's blog"
  tagline: My great project tagline
  image:
    src: assets/images/dash.webp
  actions:
    - theme: brand
      text: Blog
      link: /blogs/
    - theme: alt
      text: Apps
      link: /apps/

features:
  - title: Flutter
    icon:
      src: assets/images/flutter.webp
    link: https://flutter.dev
  - title: Dart
    icon:
      src: assets/images/dart.webp
    link: https://dart.dev
  - title: Multi-Platform
    icon: 🚀
  - title: Dash!
    icon:
      src: assets/images/dash_logo.webp
---

<UserBrand />
<VPTeamMembers size="small" :members="members" style="margin-top:16px" />

<script setup>
  import { VPTeamMembers } from 'vitepress/theme'
  import UserBrand from './components/user-brand.vue'
  const members = [
    {
      avatar: 'https://www.github.com/laiiihz.png',
      name: 'laiiihz',
      title: 'Developer',
      links: [
        { icon: 'github', link: 'https://github.com/laiiihz' },
      ]
    },
    {
      avatar: 'https://github.com/dash-chan.png',
      name: 'dash-chan',
      title: 'Group',
      links: [
        { icon: 'github', link: 'https://github.com/dash-chan' },
      ],
    },
  ]
</script>
