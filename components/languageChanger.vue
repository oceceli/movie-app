<template>
    <div>
        <select v-model="selected" id="language" class="bg-inherit text-gray-400 focus:outline-none">
            <option v-for="lang in languages" :key="lang.id" :value="lang.id">{{ lang.name }}</option>
        </select>
    </div>
</template>

<script setup>

const selected = ref('tr-TR')

const languages = ref([
    {id: 'tr-TR', name: 'TR'},
    {id: 'en-US', name: 'EN'},
    {id: 'de', name: 'DE'},
])

watch(selected, (now) => {
    filters.setQueryParams({...filters.getQueryParams().value, language: selected.value})    
})

</script>