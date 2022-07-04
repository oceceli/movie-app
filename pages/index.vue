<template>
    <div class="md:flex md:gap-2 mt-6">
        <section class="w-3/12">
            <filter-bar />
        </section>
        <section class="flex flex-col gap-10 items-center container mx-auto ">
            <div class="flex flex-wrap gap-4 justify-center">
                <skeletons-skeleton-movie-card v-if="pending" v-for="i in 18" />
                <movie-card v-else v-for="movie in data.results" :key="movie.id" :movie="movie" />
            </div>
            <paginator :currentPage="data.page" :totalPages="data.total_pages" />
        </section>
    </div>
</template>


<script setup>
import config from '~~/config';

const route = useRoute();

const queryParams = ref({
    query: '',
    page: route.query.page,
    language: 'tr-TR'
})


const { data, pending, refresh, error } = useLazyAsyncData('discover' + route.query.page, () => {
    return $fetch(queryParams.value.query === '' ? config.endpoints.discover : config.endpoints.search, {
        baseURL: config.api_base_url,
        params: queryParams.value,
        headers: config.headers,
    })
})


watch(() => route.query, (newVal) => {
    queryParams.value.page = newVal.page
    refresh()
})
watch(useState('search'), (newVal) => {
    queryParams.value.query = newVal
    refresh()
})

// watch(State.getSearch(), (now) => {
//     return api.fetchData();
// })


</script>