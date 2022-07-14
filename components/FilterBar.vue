<template>
    <section class="sticky top-28">

        <div class="relative">
            <div class="pb-4 pt-6 md:pt-0 flex justify-between items-center px-2">
                <label for="filters" class="font-bold text-2xl block">Filtre</label>
                <small @click="clearFilters()" class="text-red-600 cursor-pointer font-semibold">Temizle</small>
            </div>
            <div id="filters"
                class="p-4 w-full gap-5 flex flex-col bg-white rounded-md border border-purple-300 hover:border-purple-500">
                <filters.sort />
                <hr>
                <filters.genres />
                <hr>
                <filters-vote />
                <hr>
                <filters-year />
                <hr>
                <movieLang />

            </div>
            <div v-if="disabled" class="absolute top-0 bottom-0 right-0 left-0 bg-gray-100 rounded-md opacity-50">
            </div>
        </div>
    </section>
</template>

<script setup>
import movieLang from './Filters/movieLang.vue';

const disabled = ref(false)

const clearFilters = () => {
    filters.reset()
}


watch(useState('search'), (now) => {
    if (now) disabled.value = true
    else disabled.value = false
})

</script>