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
import api from '@/composables/ApiService'

const route = useRoute();

const data = ref({});
const movies = ref([]);

const pageNumber = ref(route.query.page ? route.query.page : '');

onMounted(() => {
    fetchData();
})

const fetchData = () => {
    pageNumber.value = route.query.page;
    api.getDiscoverMovies('?page=' + pageNumber.value)
        .then(res => {
            data.value = res
            console.log(data.value)
            movies.value = res.results
        });
}

watch(route, (to, prev) => {
    fetchData();
})


</script>