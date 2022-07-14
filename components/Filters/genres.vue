<template>
    <section>
        <div class="text-lg font-semibold pb-1">Kategoriler</div>
        <select v-model="selected" v-if="!genresLoading" id="select-categories" class="focus:outline-none w-full overscroll-contain"
            multiple>
            <option v-for="genre in data.genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        </select>
    </section>
</template>

<script setup>
import config from '~~/config';

const selected = ref([]);

onMounted(() => {
    if (filters.getQueryParams().value.with_genres && Object.keys(filters.getQueryParams().value.with_genres).length > 0)
        selected.value = filters.getQueryParams().value.with_genres.split(',').map(Number)
})

const { data, pending: genresLoading, refresh } = useLazyAsyncData('genres' + filters.getQueryParams().value.language, () => {
    return apiService.baseFetch(config.endpoints.genres)
})

watch(selected, () => {
    filters.setQueryParams({ ...filters.getQueryParams().value, with_genres: selected.value.toString() })
})

watch(filters.resetRequested, (now) => {
    if (now) selected.value = []
})
watch(filters.getQueryParams(), (now, prev) => {
    if(now.language != prev.language) refresh()
})
</script>