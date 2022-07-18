<template>
    <section>
        <div class="text-lg font-semibold pb-1">Film Orijinal Dili</div>
        <select v-model="selected" v-if="!pending" id="select-categories" class="focus:outline-none w-full">
            <option>Seçiniz</option>
            <option v-for="movieLang in data" :key="movieLang.iso_639_1" :value="movieLang.iso_639_1">{{ movieLang.english_name }}</option>
        </select>
    </section>
</template>

<script setup>
import { ENDPOINTS } from '@/data/consts'


const selected = ref([]);

onMounted(() => {
    if (filters.getQueryParams().value.with_original_language)
        selected.value = filters.getQueryParams().value.with_original_language
})

const { data, pending } = useLazyAsyncData('movie_lang', () => {
    return apiService.baseFetch(ENDPOINTS.movie_lang)
})

watch(selected, () => {
    filters.setQueryParams({ ...filters.getQueryParams().value, with_original_language: selected.value })
})

watch(filters.resetRequested, (now) => {
    if(now) selected.value = []
})

</script>