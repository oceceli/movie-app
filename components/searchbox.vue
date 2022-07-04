<template>
    <div class="relative">
        <input v-model="search" type="text" placeholder="Film ara..." class="border rounded-full w-full p-2 pl-8 focus:outline-none border-gray-300 focus:border-purple-600 text-sm">
        <div class="absolute bottom-0 left-0 ml-3">
            <myicon icon="search.svg" icon-class="w-4" />
        </div>
        <div v-show="showClearButton" class="absolute bottom-0 right-0 mr-3 mb-1 cursor-pointer">
            <myicon @click="clearField" icon="delete.svg" icon-class="w-4" />
        </div>
    </div>
</template>

<script setup>

const search = ref('')
const showClearButton = ref(false)

const searchState = useState('search', '')

onMounted(() => {
    const localStorageSearch = localStorage.getItem('search')
    if(localStorageSearch && localStorageSearch.length > 0) {
        search.value = localStorage.getItem('search')
    }
})

const clearField = () => {
    search.value = '';
}

watch(search, (now) => {
    localStorage.setItem('search', now)
    navigateTo('/');
    if(now.length > 0) {
        showClearButton.value = true
    } else {
        showClearButton.value = false
    }
    searchState.value = search.value;
})

</script>