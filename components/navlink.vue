<template>
    <div @click="navigate" class="font-bold flex items-center gap-2 hover:bg-white p-2 mb-2 text-white hover:text-black rounded-full ease-in-out duration-75 cursor-pointer">
        <!-- <img :src="icon" width="30" height="30" class="group-hover:animate-spin"> -->
        <!-- <Myicon :icon="icon" /> -->
        <span class="">{{ name }}</span>
    </div>
</template>

<script setup>
import Filters from "@/composables/Filters"

const props = defineProps({
    icon: String,
    name: String,
    to: String
});

const navigate = () => {
    // Filters.queryParams.set('query', '')
    return navigateTo({
        path: props.to,
    })
}
</script>
