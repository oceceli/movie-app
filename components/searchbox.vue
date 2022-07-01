<template>
    <div class="relative">
        <input v-model="search" type="text" class="border rounded-full w-full p-1 pl-8 focus:outline-none border-purple-300 focus:border-purple-600 text-sm">
        <div class="absolute bottom-0 left-0 ml-2">
            <myicon icon="search.svg" icon-class="w-4" />
        </div>
    </div>
</template>

<script setup>
import api from '~~/composables/ApiService';

const search = ref('');

watch(search, (now) => {
    navigateTo('/');
    // api.getSearch(now).then()
})

</script>