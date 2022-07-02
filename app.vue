<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
import '@/assets/css/tailwind.css'


import State from "@/composables/State"

useHead({
  titleTemplate: (title) => {
    return title ? `@oceceli | ${title}` : '@oceceli/movie-app'
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Aradığın film' }
  ],
  bodyAttrs: {
    behavior: 'smooth', block: 'start',
  }
})
</script>