<template>
    <div class="inline-block">
        <img :src="iconPath" :class="iconClass + ' h-5'">
    </div>
</template>

<script setup>
    const props = defineProps({
        icon: String,
        iconClass: String
    });

    const iconPath = computed(() => {
        return `/icon/${props.icon}`;
    });
</script>