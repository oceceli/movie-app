<template>
    <div class="container mx-auto flex flex-col lg:flex-row gap-4">
        <section class="w-full">
            <filter-bar />
        </section>
        <section class="flex flex-col gap-10 items-center">
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
})


const route = useRoute();

const params = ref({
    query: "",
    page: page.value,
})



const { data, pending, refresh, error } = await useLazyAsyncData('discover' + page.value, () => {
    return apiService.baseFetch(params.value.query === '' ? config.endpoints.discover : config.endpoints.search, { ...params.value })
})



// watch(data, (now) => {
//     console.log(now)
// })


watch(() => route.query, (newVal) => {
    params.value.page = newVal.page
    refresh()
})
watch(useState('search'), (newVal) => {
    params.value.query = newVal
    params.value.page = 1
    refresh()
})
watch(filters.getQueryParams(), () => {
    params.value.page = 1
    refresh()
})

</script>