<template>
  <div class="min-h-screen h-full flex flex-col bg-gray-50">
    <div class="pb-28">
      <topbar />
    </div>
    <div class="flex-1">
      <slot />
    </div>
    <MyFooter />
  </div>
</template>

<script setup>
import topbar from "./topbar.vue"
import MyFooter from "./myFooter.vue";

</script>