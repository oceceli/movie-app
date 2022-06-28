<template>
    <NuxtLink :to="to" class="font-bold flex items-center gap-2 hover:bg-gray-700 p-3 rounded hover:shadow-inner group ease-in-out duration-100">
        <img :src="icon" width="30" height="30" class="group-hover:animate-spin">
        <span class="group-hover:text-white">{{ name }}</span>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    icon: String,
    name: String,
    to: String
});
</script>
