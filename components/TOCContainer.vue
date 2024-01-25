<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
  <aside v-if="toc && (toc.links.length !== 0)" class="min-w-80 not-prose" px="4">
    <p font="bold">Table Of Contents</p>
    <ul pl="4">
      <li v-for="link in toc.links" :key="link.text">
        <a hover="underline" :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </aside>
</template>
