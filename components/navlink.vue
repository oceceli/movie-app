<template>
    <NuxtLink :to="to" class="font-bold flex items-center gap-2 hover:bg-purple-100 p-3 rounded hover:shadow-inner group ease-in-out duration-100">
        <!-- <img :src="icon" width="30" height="30" class="group-hover:animate-spin"> -->
        <Myicon :icon="icon" />
        <span class="">{{ name }}</span>
    </NuxtLink>
</template>

<script setup>
defineProps({
    icon: String,
    name: String,
    to: String
});
</script>
