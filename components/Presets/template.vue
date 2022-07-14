<template>
    <div>
        <label class="block font-bold text-3xl pb-5 text-slate-600" :for="title">{{ title }}</label>
        <div class="flex gap-2 overflow-x-auto no-scrollbar p-4 border border-dashed rounded-lg hover:border-slate-400" :id="title">
            <skeletons-skeleton-movie-card v-if="loading" v-for="i in 6" />
            <movie-card v-else v-for="movie in movies" :key="title + movie.id" :movie="movie" />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    movies: Object,
    loading: Boolean,
})
</script>