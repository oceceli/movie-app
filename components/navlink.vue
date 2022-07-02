<template>
    <div @click="navigate" class="font-bold flex items-center gap-2 hover:bg-gray-100 p-2 mb-2 rounded-full hover:shadow-inner group ease-in-out duration-100 cursor-pointer">
        <!-- <img :src="icon" width="30" height="30" class="group-hover:animate-spin"> -->
        <Myicon :icon="icon" />
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
