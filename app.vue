<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
import '@/assets/css/tailwind.css'
import config from './config';


useHead({
  titleTemplate: (title) => {
    return title ? `${config.app_name} | ${title}` : `${config.app_name}/movie-app`
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