<template>
    <div class="border rounded-full w-16 h-16 z-30 flex items-center justify-center" >
        <div class="bg-black shadow-sm rounded-full w-14 h-14 text-white font-bold flex items-center justify-center">
            {{ Math.round(score * 10) / 10 }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    score: Number,
})
</script>