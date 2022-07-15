<template>
    <div>
        <select v-model="selected" id="language" class="bg-inherit text-gray-400 focus:outline-none">
            <option>Dil</option>
            <option v-for="lang in languages" :key="lang.id" :value="lang.id">{{ lang.name }}</option>
        </select>
    </div>
</template>

<script setup>

onBeforeMount(() => {
    selected.value = langCook.value ?? 'tr-TR'
})

const selected = ref()
const langCook = useCookie('lang', {maxAge : 30 * 24 * 60 * 60})

const languages = ref([
    {id: 'tr-TR', name: 'TR'},
    {id: 'en-US', name: 'EN'},
    {id: 'uk', name: 'UK'},
    {id: 'de', name: 'DE'},
    {id: 'fr', name: 'FR'},
    {id: 'it', name: 'IT'},
    {id: 'ru', name: 'RU'},
    {id: 'cs', name: 'CS'},
    {id: 'ja', name: 'JA'},
    {id: 'ko', name: 'KO'},
    {id: 'nl', name: 'NL'},
    {id: 'pl', name: 'PL'},
    {id: 'es', name: 'ES'},
    {id: 'sv', name: 'SV'},
    {id: 'ar', name: 'AR'},
])

watch(selected, (now) => {
    if(languages.value.find((lang) => lang.id == now)) { // select inputtan gelen değer istediğimiz değerlerden biri mi?
        console.log('languageChanger: I\'m in! Updating cookie!')
        langCook.value = now
    }
    filters.setQueryParams({...filters.getQueryParams().value, language: selected.value})
})

</script>