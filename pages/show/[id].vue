<template>
    <section class="container mx-auto px-6 md:px-8 bg-slate-50 h-full pt-7">


        <section class="pb-8 md:flex justify-between">
            <div
                class="order-2 mb-5 px-2 rounded h-fit flex justify-center items-center gap-2 bg-gradient-to-r from-lime-400 to-sky-400 shodow text-white hover:text-gray-100 text-xs ease-in-out duration-150">
                <div>
                    <myicon icon="cinema.svg" />
                </div>
                <div v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</div>
            </div>
            <div class="order-1">
                <div class="text-3xl font-bold">{{ movie.title }}</div>
                <div class="flex items-center pt-1">
                    <myicon class="pr-2" icon-class="w-3" icon="link.svg" />
                    <small><a target="_blank" :href="`https://www.imdb.com/title/${movie.imdb_id}`"
                            class="hover:text-purple-600">IMDB detay</a></small>
                </div>
            </div>
        </section>

        <movie-detail-card :movie="movie" />




        <section class="mt-16 mb-8 flex flex-col gap-6 items-center p-4 ">
            <div class="text-3xl font-bold">Benzer Filmler</div>
            <div class="flex flex-wrap gap-4 justify-center pb-10 rounded-lg">
                <movie-card v-for="similarMovie in similarMovies" :key="similarMovie.id" :movie="similarMovie" />
            </div>
        </section>

    </section>
</template>

<script setup>
import api from '~~/composables/ApiService'

const route = useRoute();

const movie = ref({});
const similarMovies = ref([]);
const title = ref('');
useHead({ title: title })

onMounted(() => {
    fetchMovie();
})

const fetchMovie = () => {
    api.showMovie(route.params.id)
        .then(res => {
            movie.value = res
            console.log(movie.value);
            title.value = movie.value.title
            fetchSimilar()
        })
}


const fetchSimilar = () => {
    api.getSimilarMovies(movie.value.id)
        .then(res => {
            similarMovies.value = res.results
        });
}

</script>
