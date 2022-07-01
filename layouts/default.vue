<template>
  <div class="h-screen flex flex-col">
    <topbar />
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import topbar from "./topbar.vue"
</script>