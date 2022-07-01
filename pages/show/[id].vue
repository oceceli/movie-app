<template>
    <section class="px-8 bg-slate-50 h-full pt-7">


        <section class="pb-8 md:flex justify-between">
            <div
                class="order-2 mb-5 px-2 rounded border border-dashed h-fit flex justify-center items-center gap-2 text-gray-400 hover:text-gray-500 text-xs ease-in-out duration-150">
                <div>
                    <myicon icon="cinema.svg" />
                </div>
                <div v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</div>
            </div>
            <div class="order-1">
                <div class="text-3xl font-bold">{{ movie.title }}</div>
                <div class="flex items-center pt-1">
                    <myicon class="pr-2" icon-class="w-3" icon="link.svg" />
                    <small><a target="_blank" :href="`https://www.imdb.com/title/${movie.imdb_id}`" class="hover:text-purple-600">IMDB detay</a></small>
                </div>
                
            </div>
        </section>

        <movie-detail-card :movie="movie"  />

        


        <section class="m-10">
            <div class="p-5 bg-gray-50 rounded-xl">
                asdf
            </div>
        </section>

    </section>
</template>

<script setup>
import api from '~~/composables/ApiService'
const route = useRoute();

const movie = ref({});

onMounted(() => {
    fetchMovie();
})

const fetchMovie = () => {
    api.showMovie(route.params.id)
        .then(res => {
            movie.value = res
            console.log(movie.value);
        })
}

</script>
