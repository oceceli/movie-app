<template>
    <div class="relative">
        <input v-model="search" type="text" class="border rounded-full w-full p-2 pl-8 focus:outline-none border-purple-300 focus:border-purple-600 text-sm">
        <div class="absolute bottom-0 left-0 ml-3">
            <myicon icon="search.svg" icon-class="w-4" />
        </div>
        <div v-show="showClearButton" class="absolute bottom-0 right-0 mr-3 mb-1 cursor-pointer">
            <myicon @click="clearField" icon="delete.svg" icon-class="w-4" />
        </div>
    </div>
</template>

<script setup>
import State from '~~/composables/State';

const search = ref('')
const showClearButton = ref(false)

onBeforeMount(() => {
    const localStorageSearch = localStorage.getItem('search')
    if(localStorageSearch.length > 0) {
        search.value = localStorage.getItem('search')
    }
})

const clearField = () => {
    search.value = '';
}

watch(search, (now) => {
    if(now.length > 0) {
        navigateTo('/');
        showClearButton.value = true
    } else {
        showClearButton.value = false
    }
    State.setSearch(now);
})

</script>