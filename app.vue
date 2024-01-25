<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css"
import "@fontsource-variable/jost"
import "@fontsource-variable/jetbrains-mono"

import { useWindowScroll } from "@vueuse/core"

const { y } = useWindowScroll()
const showTop = computed(() => y.value >= 100)
const route = useRoute()

useHead({
  titleTemplate: (subtitle) => {
    return subtitle
      ? `${subtitle} || @ShadowRZ's Blog`
      : "@ShadowRZ's Blog";
  },
})

useSeoMeta({
  ogSiteName: '@ShadowRZ\'s Blog',
  ogImage: '/assets/avatar.png',
  ogUrl: `https://shadowrz.github.io/blog${route.path}`,
  twitterCard: 'summary',
  twitterImage: '/assets/avatar.png',
})
</script>

<template>
  <div
    flex="~ col"
    bg="pink-50 dark:pink-950"
    text="pink-800 dark:pink-200"
    min-h="dvh"
    px="4 sm:8 md:16"
    font="sans"
  >
    <Header />
    <div grow>
      <NuxtPage />
    </div>
    <Footer mt="32" />
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <ScrollToTop v-if="showTop" />
    </Transition>
  </div>
</template>
