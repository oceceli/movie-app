<template>
    <section>
        <div class="text-lg font-semibold pb-1">Sırala</div>
        <select v-model="selected" id="select-sort" class="focus:outline-none w-full">
            <option v-for="sort in sortOptions" :value="sort.id">{{ sort.name }}</option>
        </select>
    </section>
</template>

<script setup>

const selected = ref("popularity.desc");
const sortOptions = ref([
    {id: "popularity.desc", name: "Popularite(Azalan)"},
    {id: "popularity.asc", name: "Popularite(Artan)"},
    {id: "release_date.desc", name: "Çıkış Tarihi(Azalan)"},
    {id: "release_date.asc", name: "Çıkış Tarihi(Artan)"},
    {id: "revenue.desc", name: "Hasılat(Azalan)"},
    {id: "revenue.asc", name: "Hasılat(Artan)"},
    {id: "original_title.desc", name: "Film Adı(Azalan)"},
    {id: "original_title.asc", name: "Film Adı(Artan)"},
    {id: "vote_average.desc", name: "Puan(Azalan)"},
    {id: "vote_average.asc", name: "Puan(Artan)"},
]);

onMounted(() => {
    if (filters.getQueryParams().value.sort_by)
        selected.value = filters.getQueryParams().value.sort_by
})

watch(selected, () => {
    filters.setQueryParams({ ...filters.getQueryParams().value, sort_by: selected.value })
})

watch(filters.resetRequested, (now) => {
    if(now) selected.value = "popularity.desc"
})

</script>