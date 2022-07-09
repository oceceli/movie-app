<template>
    <div class="p-2 w-full flex flex-col bg-white rounded border shadow-sm">
        <div>
            <div class="text-lg font-semibold pb-1">Kategoriler</div>
            <select id="select-categories" class="focus:outline-none">
                <option value="">Seçilmedi</option>
                <!-- <option v-for="genre in State.getGenres().value" :key="genre.id" :value="genre.id">{{ genre.name }}</option> -->
            </select>
            <!-- <input type="text" class="border rounded-md"> -->
        </div>
    </div>
</template>

<script setup>
import ApiService from '~~/composables/ApiService';

// onMounted(() => {
//     ApiService.getGenres()
//         .then(res => {
//             State.setGenres(res.genres);
//             console.log(State.getGenres().value)
//         })
// })

</script>