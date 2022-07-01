<template>
    <div class="flex flex-col gap-10 items-center container mx-auto mt-12">
        <div class="flex flex-wrap gap-4 justify-center">
            <movie-card v-for="movie in movies"
                :id="movie.id"
                :img="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
                :overview="movie.overview" 
                :title="movie.title" 
                :score="movie.vote_average" />
        </div>
        <paginator :currentPage="data.page" :totalPages="data.total_pages" />
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