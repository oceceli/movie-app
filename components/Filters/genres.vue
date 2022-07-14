<template>
    <section>
        <div class="text-lg font-semibold pb-1">Kategoriler</div>
        <select v-model="selected" v-if="!genresLoading" id="select-categories" class="focus:outline-none w-full"
            multiple>
            <option v-for="genre in data.genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
    </section>
</template>

<script setup>
import config from '~~/config';

const selected = ref([]);

onMounted(() => {
    if (filters.getQueryParams().value.with_genres)
        selected.value = filters.getQueryParams().value.with_genres.split(',').map(Number)
})


const { data, pending: genresLoading } = useLazyAsyncData('genres', () => {
    return apiService.baseFetch(config.endpoints.genres)
})

watch(selected, () => {
    console.log(selected.value)
    filters.setQueryParams({ ...filters.getQueryParams().value, with_genres: selected.value.toString() })
})

watch(filters.resetRequested, (now) => {
    if (now) selected.value = []
})

</script>