<template>
    <section>
        <div class="text-lg font-semibold pb-1">Çıkış Yılı</div>
        <select v-model="selected" id="select-year" class="focus:outline-none w-full">
            <option selected>Seçiniz</option>
            <option v-for="year in years" :value="year">{{ year }}</option>
        </select>
    </section>
</template>

<script setup>

const selected = ref();
const years = ref([]);

onMounted(() => {
    var date = new Date();
    for (let i = date.getFullYear(); i >= 1874; i--) {
        years.value.push(i)
    }
    if (filters.getQueryParams().value.year)
        selected.value = filters.getQueryParams().value.year
})



watch(selected, () => {
    filters.setQueryParams({ ...filters.getQueryParams().value, year: selected.value })
})

watch(filters.resetRequested, (now) => {
    if(now) selected.value = null
})

</script>