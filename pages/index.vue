<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types"
const query: QueryBuilderParams = {
  path: "/posts",
  sort: [{ date: -1 }],
  where: [{ _partial: false }],
}

useSeoMeta({
  ogTitle: '@ShadowRZ\'s Blog',
  twitterTitle: '@ShadowRZ\'s Blog',
  description: 'Where something happens.',
  ogDescription: 'Where something happens.',
  twitterDescription: 'Where something happens.'
})
</script>

<template>
  <div py="32">
    <h1 font="bold" text="4xl xl:7xl">@ShadowRZ's Blog</h1>
    <p text-xl xl="text-2xl">Where something happens.</p>
  </div>
  <main flex="~ col" text-base xl="text-xl" gap="16">
    <ContentList :query="query" v-slot="{ list }">
      <section flex="~ col" gap="1" v-for="page in list" :key="page._path">
        <div flex="~ row wrap" gap="2">
          <div inline-flex gap="1" items="center">
            <Icon name="ph:calendar-duotone" />
            <span sr-only>Publish Date: </span>
            <time :datetime="page.date" font="bold">{{
              page.date ? new Date(page.date).toDateString() : '(Working)'
            }}</time>
          </div>
          <template v-if="page.categories" inline-flex gap="1">
            <div
              v-for="category in page.categories"
              inline-flex
              gap="1"
              items="center"
            >
              <Icon name="ph:folders-duotone" />
              <span sr-only>Category: </span>
              <ul font="bold" flex="~ row" gap="1">
                <li>{{ category }}</li>
              </ul>
            </div>
          </template>
          <template v-if="page.tags" inline-flex gap="1">
            <div v-for="tag in page.tags" inline-flex gap="1" items="center">
              <Icon name="ph:tag-duotone" />
              <span sr-only>Tag: </span>
              <ul font="bold" flex="~ row" gap="1">
                <li>{{ tag }}</li>
              </ul>
            </div>
          </template>
        </div>
        <NuxtLink max-w="fit" :href="page._path"
          ><WithUnderline
            transition="all"
            duration="200"
            is="h2"
            font="bold"
            text="3xl xl:5xl"
            class="bg-underline-large inline"
            >{{ page.title }}</WithUnderline
          ></NuxtLink
        >
        <p mt="2">{{ page.description }}</p>
      </section>
    </ContentList>
  </main>
</template>
