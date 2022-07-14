<template>
    <section>
        <div class="text-lg font-semibold pb-1">Puan(en az)</div>
        <select v-model="selected" id="select-vote" class="focus:outline-none w-full">
            <option selected>Seçiniz</option>
            <option v-for="vote in votes" :value="vote">{{ vote }}</option>
        </select>
    </section>
</template>

<script setup>

const selected = ref();
const votes = ref([]);

onMounted(() => {
    for (let i = 10; i >= 0; i--) {
        votes.value.push(i)
    }
    if (filters.getQueryParams().value["vote_average.gte"])
        selected.value = filters.getQueryParams().value["vote_average.gte"]
})



watch(selected, () => {
    // console.log(selected.value)
    filters.setQueryParams({ ...filters.getQueryParams().value, "vote_average.gte": selected.value })
})

watch(filters.resetRequested, (now) => {
    if(now) selected.value = null
})
</script>