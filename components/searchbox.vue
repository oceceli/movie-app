<template>
    <div class="relative">
        <input id="input1" @input="searchInput" type="text" placeholder="Film ara..." class="border rounded-lg w-full p-2 pl-8 focus:outline-none border-gray-300 focus:border-purple-600 text-sm">
        <div class="absolute bottom-0 left-0 ml-3">
            <myicon icon="search.svg" icon-class="w-4" />
        </div>
        <div v-show="showClearButton" class="absolute bottom-0 right-0 mr-3 mb-1 cursor-pointer">
            <myicon @click="clearField" icon="delete.svg" icon-class="w-4" />
        </div>
    </div>
</template>

<script setup>

const router = useRouter();
const route = useRoute();

const search = ref('')
const showClearButton = ref(false)

const searchState = useState('search', '')

onBeforeMount(() => {
    const localStorageSearch = localStorage.getItem('search')
    if(localStorageSearch && localStorageSearch.length > 0) {
        search.value = localStorage.getItem('search')
        console.log("searchbox: " + search.value)
    }
})

const clearField = () => {
    search.value = '';
    document.getElementById('input1').value = '';
    action('');
}

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const searchInput = debounce((event) => {
    search.value = event.target.value;
})

watch(search, (now) => {
    action(now)
})

const action = (newValue) => {
    searchState.value = newValue;
    window.scrollTo({top: 0, behavior: 'smooth'})
    localStorage.setItem('search', newValue)
    if(newValue.length > 0) {
        showClearButton.value = true
    } else {
        showClearButton.value = false
        return navigateTo('/');
    }
    navigateTo({ path: '/', query: { q: newValue }});
}



</script>