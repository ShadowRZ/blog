<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <Head>
    <Meta name="og:title" :content="page.title" />
    <Meta name="og:description" :content="page.description" />
    <Meta name="twitter:title" :content="page.title" />
    <Meta name="twitter:description" :content="page.description" />
  </Head>
  <div text-base xl="text-xl" pt="32">
    <div flex="~ row wrap" gap="2">
      <div inline-flex gap="1" items="center">
        <Icon name="ph:calendar-duotone" />
        <span sr-only>Publish Date: </span>
        <time :datetime="page.date" font="bold">{{
          page.date ? new Date(page.date).toDateString() : '(Working)'
        }}</time>
      </div>
      <template v-if="page.categories" inline-flex gap="1">
        <div v-for="category in page.categories" inline-flex gap="1" items="center">
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
    <main grow prose max-w-full>
      <h1 font="bold">{{ page.title }}</h1>
      <div flex="~ col lg:row-reverse">
        <TOCContainer />
        <section grow>
          <slot></slot>
        </section>
      </div>
    </main>
  </div>
</template>
