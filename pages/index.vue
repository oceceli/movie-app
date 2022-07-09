<template>
    <div class="container mx-auto flex">
        <section class="w-full">
            <filter-bar />
        </section>
        <div class="flex flex-col gap-10 items-center">
            <div class="flex flex-wrap gap-4 justify-center">
                <skeletons-skeleton-movie-card v-if="pending" v-for="i in 18" />
                <movie-card v-else v-for="movie in data.results" :key="movie.id" :movie="movie" />
            </div>
            <paginator v-if="!pending" :currentPage="data.page" :totalPages="data.total_pages" />
        </div>
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

const queryParams = ref({
    query: "",
    page: page.value,
    language: 'tr-TR',
    with_original_language: 'tr',
    primary_release_year: 2022
})



const { data, pending, refresh, error } = await useLazyAsyncData('discover' + page.value, () => {
    return apiService.baseFetch(queryParams.value.query === '' ? config.endpoints.discover : config.endpoints.search, { ...queryParams.value })
})



watch(data, (now) => {
    console.log(now)
})


watch(() => route.query, (newVal) => {
    queryParams.value.page = newVal.page
    refresh()
})
watch(useState('search'), (newVal) => {
    queryParams.value.query = newVal
    queryParams.value.page = 1
    refresh()
})


</script>