<template>
    <div class="user-brand">
        <img class="user-brand-img"
            :src="`https://github-readme-stats.vercel.app/api?username=laiiihz${isDark ? '&theme=dark' : ''}`" />
        <img class="user-brand-img"
            :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=laiiihz&layout=compact${isDark ? '&theme=dark' : ''}`" />
    </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<style lang="scss" scoped>
.user-brand {
    margin: 64px;
}

.user-brand-img {
    margin-top: 16px;
}
</style>