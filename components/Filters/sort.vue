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
    {id: "popularity.asc", name: "Popularite(Artan)"},
    {id: "popularity.desc", name: "Popularite(Azalan)"},
    {id: "release_date.asc", name: "Çıkış Tarihi(Artan)"},
    {id: "release_date.desc", name: "Çıkış Tarihi(Azalan)"},
    {id: "revenue.asc", name: "Hasılat(Artan)"},
    {id: "revenue.desc", name: "Hasılat(Azalan)"},
    {id: "original_title.asc", name: "Film Adı(Artan)"},
    {id: "original_title.desc", name: "Film Adı(Azalan)"},
    {id: "vote_average.asc", name: "Puan(Artan)"},
    {id: "vote_average.desc", name: "Puan(Azalan)"},
]);

onMounted(() => {
    if (filters.getQueryParams().value.sort_by)
        selected.value = filters.getQueryParams().value.sort_by
})

watch(selected, () => {
    console.log(selected.value)
    filters.setQueryParams({ ...filters.getQueryParams().value, sort_by: selected.value })
})

watch(filters.resetRequested, (now) => {
    if(now) selected.value = "popularity.desc"
})

</script>