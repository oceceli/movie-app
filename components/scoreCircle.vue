<template>
    <div class="p-1 border rounded-full z-30" >
        <div class="bg-black shadow-sm rounded-full p-3 text-white font-bold">
            {{ score }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    score: Number,
})
</script>