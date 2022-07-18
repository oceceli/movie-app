<template>
    <section class="container mx-auto px-6 md:px-8 bg-slate-50 h-full pt-7">
        <div>
            <section class="pb-8 md:flex justify-between">
                <div v-if="pendingMovie" class="order-2 pb-8">
                    <div class="h-5 w-full md:w-56 rounded-lg bg-gray-300"></div>
                </div>
                <div v-else
                    class="order-2 mb-5 px-2 rounded h-fit flex justify-center items-center gap-2 bg-gradient-to-r from-lime-400 to-sky-400 shodow text-white hover:text-gray-100 text-xs ease-in-out duration-150">
                    <div>
                        <myicon icon="cinema.svg" />
                    </div>
                    <div v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</div>
                </div>

                <div v-if="pendingMovie" class="order-1">
                    <div class="flex flex-col gap-2">
                        <div class="h-8 w-56 rounded-lg bg-gray-300"></div>
                        <div class="h-3 w-24 rounded-lg bg-gray-300"></div>
                    </div>
                </div>
                <div v-else class="order-1">
                    <div class="text-3xl font-bold">{{ movie.title }}</div>
                    <div class="flex items-center pt-1">
                        <myicon class="pr-2" icon-class="w-3" icon="link.svg" />
                        <small><a target="_blank" :href="`https://www.imdb.com/title/${movie.imdb_id}`"
                                class="hover:text-purple-600">IMDB detay</a></small>
                    </div>
                </div>

            </section>

            <skeletons-skeleton-movie-detail-card v-if="pendingMovie" />
            <movie-detail-card v-else :movie="movie" />




            <section class="mt-20 mb-8 flex flex-col gap-6 items-center">
                <div class="text-3xl font-bold">Benzer Filmler</div>
                <div class="flex flex-wrap gap-4 justify-center pb-10 rounded-lg">
                    <skeletons-skeleton-movie-card v-for="index in 20" v-if="pendingSimilar" />
                    <movie-card v-else v-for="similarMovie in similarMovies.results" :key="`similar-${similarMovie.id}`"
                        :movie="similarMovie" />
                </div>
            </section>

        </div>

    </section>
</template>

<script setup>
import { ENDPOINTS } from '@/data/consts'

const route = useRoute();

const movieID = route.params.id;
const { data: movie, pending: pendingMovie, refresh, error } = await useLazyAsyncData('movieID:' + movieID, () => {
    return apiService.baseFetch(ENDPOINTS.detail + movieID)
})

const { data: similarMovies, pending: pendingSimilar, refresh: refreshSimilar } = await useLazyAsyncData('similar-movies:' + movieID, () => {
    return apiService.baseFetch(`/movie/${movieID}/similar`)
})

watch(movie, (now) => {
    useHead({ title: now.title })
})
watch(filters.getQueryParams(), () => {
    refresh()
    refreshSimilar()
})
</script>
