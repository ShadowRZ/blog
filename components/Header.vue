<template>
  <div flex="~ row" gap="8" justify="end" items="center" py="4">
    <nav>
      <ul flex="~ row" gap="2" items="center">
          <li>
            <NuxtLink
              class="group"
              items="center"
              flex="~ row"
              gap="1"
              to="/"
              title="Home"
            >
              <div
                flex
                w="8"
                h="8"
                items="center"
                justify="center"
                transition
                duration="200"
                rounded="full"
                ring="pink-500 group-focus:2"
                bg="gray-200 hover:pink-200 dark:pink-900 dark:hover:gray-900"
                un-text="hover:pink-500"
              >
                <Icon name="ph:house-duotone" size="1.25rem" />
              </div>
              <span hover="underline" sr-only>Home</span>
            </NuxtLink>
          </li>
        </ul>
    </nav>
    <ThemeToggle />
  </div>
</template>
