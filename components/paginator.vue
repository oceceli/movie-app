<template>
    <div class="flex flex-col mx-auto">
        <div class="flex justify-center items-center gap-3 pb-4">
            <myicon class="cursor-pointer" @click="gotoPage(1)" icon="double-left.svg" />
            <myicon class="cursor-pointer" @click="gotoPage(currentPage - 1)" icon="left.svg" />
            <div v-for="i in 6">
                <NuxtLink v-if="firstOrderPage + i > 0" :to="`?page=${firstOrderPage + i}`" :class="{'text-2xl text-purple-600': firstOrderPage + i == currentPage}" class="font-semibold text-xl">{{ firstOrderPage + i }}</NuxtLink>
                <span v-else class="text-2xl">.</span>
            </div>
            <div v-for="i in 5" :key="i">
                <NuxtLink v-if="currentPage + i < apiPageLimit" :to="`?page=${currentPage + i}`" :class="{'text-2xl text-purple-600': currentPage + i == currentPage}" class="font-semibold text-xl">{{ currentPage + i }}</NuxtLink>
                <span v-else class="text-2xl">.</span>
            </div>
            <myicon class="cursor-pointer" @click="gotoPage(currentPage + 1)" icon="right.svg" />
            <myicon class="cursor-pointer" @click="gotoPage(apiPageLimit)" icon="double-right.svg" />
        </div>
        <div class=" bg-purple-500 p-5 text-white -mb-4 rounded-t-lg ">
            <div>Toplam <span class="font-bold">{{ apiPageLimit }}</span> sayfa arasından
                <span class="font-bold">{{ currentPage }}.</span> sayfa görüntüleniyor
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    currentPage: Number,
    totalPages: Number,
});

const apiPageLimit = ref(500);

const firstOrderPage = computed(() => {
    return props.currentPage - 6;
})

const gotoPage = (pageNumber) => {
    return navigateTo({
        query: {
            page: pageNumber
        }
    });
}



</script>