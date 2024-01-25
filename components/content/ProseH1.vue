<template>
  <h1 :id="id">
    <a
      class="no-underline group"
      v-if="generate"
      :href="`#${id}`"
    >
      <slot />
      <Icon
        name="ph:anchor-simple-duotone"
        ml="2"
        style="vertical-align: -0.125em;"
        transition duration="200"
        class="opacity-0 group-hover:opacity-80" />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h1)
</script>
