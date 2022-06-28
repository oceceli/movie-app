<template>
  <div>
    <topbar />
    <div class="p-4 border h-full">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import topbar from "./topbar.vue"
</script>