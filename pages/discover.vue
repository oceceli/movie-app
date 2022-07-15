<template>
    <div class="container mx-auto flex flex-col flex-initial lg:flex-row gap-4">
        <section class="lg:basis-1/4 w-full">
            <filter-bar class="group ease-in-out duration-150">
                <div class="rounded-b-md rounded-lg backdrop-blur mt-12 opacity-95 shadow border p-4 flex justify-center bg-gradient-to-r from-lime-100 via-purple-100 to-sky-100 md:animate-bounce hover:animate-none">
                    <span class="text-slate-800 font-semibold flex flex-col items-center gap-3">
                        <a class="flex items-center gap-2 hover:text-slate-400" target="_blank" href="https://www.linkedin.com/in/oceceli/">
                            <myicon icon="linkedin.svg" />
                            linkedin.com/in/oceceli/
                        </a>
                        <a class="flex items-center gap-2 hover:text-slate-400" target="_blank" href="https://github.com/oceceli">
                            <myicon icon="github.svg" />
                            github.com/oceceli
                        </a>
                        <a class="flex items-center gap-2 hover:text-slate-400" href="mailto:oceceli@hotmail.com">
                            <myicon icon="mail.svg" />
                            oceceli@hotmail.com
                        </a>
                    </span>
                </div>
            </filter-bar>
        </section>
        <section class="lg:basis-3/4 flex flex-col gap-10 items-center">
            <div class="flex flex-wrap gap-4 justify-center">
                <skeletons-skeleton-movie-card v-if="pending" v-for="i in 18" />
                <movie-card v-else v-for="movie in data.results" :key="movie.id" :movie="movie" />
            </div>
        <paginator v-if="!pending" :currentPage="data.page" :totalPages="data.total_pages" />
        </section>
    </div>
</template>


<script setup>
import config from '~~/config';

const page = computed(() => {
    return route.query?.page ?? 1;
})

onMounted(() => {
    useHead({ title: '' })
    checkSearch()
})


const route = useRoute();

const params = ref({
    query: "",
    page: page.value,
})



const { data, pending, refresh, error } = await useLazyAsyncData('discover' + page.value, () => {
    return apiService.baseFetch(params.value.query === '' ? config.endpoints.discover : config.endpoints.search, { ...params.value })
})


const checkSearch = () => {
    if (useState('search').value) {
        params.value.query = useState('search').value
        params.value.page = 1
        refresh()
    }
}

watch(error, (err) => {
    console.error(err)
})

watch(() => route.query, (newVal) => {
    params.value.page = newVal.page
    refresh()
})
watch(useState('search'), (now) => {
    if(now == '') params.value.query = ""
    checkSearch()
})
watch(filters.getQueryParams(), () => {
    params.value.page = 1
    navigateTo('/discover')
    refresh()
})
</script>