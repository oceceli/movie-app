<template>
    <div class="flex gap-1">
        <div v-for="i in 10">
            <div>
                <myicon v-if="i <= score" icon="star-full.svg" iconClass="h-5" />
                <myicon v-else icon="star-empty.svg" iconClass="h-5" />
            </div>
        </div>
    </div>

</template>

<script setup>
const props = defineProps({
    score: String
});
</script>