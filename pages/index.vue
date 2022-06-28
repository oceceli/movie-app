<template>
    <div class="flex flex-wrap gap-5">
        <movie-card />
        <movie-card />
        <movie-card />
        <movie-card />
        <movie-card />
        <movie-card />
        <movie-card />
    </div>
</template>


<script setup>
import movieCardVue from '~~/components/movieCard.vue';
const test = ref('içerik');
</script>