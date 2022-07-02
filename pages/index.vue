<template>
    <div class="md:flex md:gap-2 mt-6">
        <section class="w-3/12">
            <filter-bar />
        </section>
        <section class="flex flex-col gap-10 items-center container mx-auto ">
            <div class="flex flex-wrap gap-4 justify-center">
                <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
            </div>
            <paginator :currentPage="data.page" :totalPages="data.total_pages" />
        </section>
    </div>
</template>


<script setup>
import api from '~~/composables/ApiService';
import Filters from '~~/composables/Filters';
import State from '~~/composables/State';

const route = useRoute();

const data = ref(State.getData());
const movies = ref(State.getMovies());

onMounted(() => {
    Filters.queryParams.set('page', route.query.page ?? 1)
    api.fetchData();
})


watch(route, () => {
    Filters.queryParams.set('page', route.query.page ?? 1)
    api.fetchData();
})

watch(State.getSearch(), (now) => {
    return api.fetchData();
})


</script>