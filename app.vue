<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
import '@/assets/css/tailwind.css'
import { APP_NAME } from './data/consts';

const route = useRoute();

useHead({
  titleTemplate: (title) => {
    return title ? `${APP_NAME} | ${title}` : `${APP_NAME}/movie-app`
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