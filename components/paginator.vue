<template>
    <div v-if="totalPages > 1" class="flex flex-col mx-auto border rounded">
        <div class="flex justify-center items-center gap-3 p-4">
            <div v-if="!hideIcons" class="flex justify-center items-center">
                <myicon class="cursor-pointer" @click="gotoPage(1)" icon="double-left.svg" />
                <myicon class="cursor-pointer" @click="gotoPage(currentPage - 1)" icon="left.svg" />
            </div>
            <div v-for="i in 6">
                <span v-if="firstOrderPage + i > 0" @click="gotoPage(firstOrderPage + i)" :class="{'text-2xl text-purple-600': firstOrderPage + i == currentPage}" class="font-semibold text-xl cursor-pointer">{{ firstOrderPage + i }}</span>
                <span v-else class="text-2xl">.</span>
            </div>
            <div v-for="i in 5" :key="i">
                <span v-if="currentPage + i < apiPageLimit && currentPage + i < totalPages" @click="gotoPage(currentPage + i)" :class="{'text-2xl text-purple-600': currentPage + i == currentPage}" class="font-semibold text-xl cursor-pointer">{{ currentPage + i }}</span>
                <span v-else class="text-2xl">.</span>
            </div>
            <div v-if="!hideIcons" class="flex justify-center items-center">
                <myicon class="cursor-pointer" @click="gotoPage(currentPage + 1)" icon="right.svg" />
                <myicon class="cursor-pointer" @click="gotoPage(apiPageLimit)" icon="double-right.svg" />
            </div>
        </div>
        <!-- <div class=" bg-purple-500 p-5 text-white -mb-4 rounded-t-lg ">
            <div>Toplam <span class="font-bold">{{ totalPages < apiPageLimit ? totalPages-1 : apiPageLimit }}</span> sayfa arasından
                <span class="font-bold">{{ currentPage }}.</span> sayfa görüntüleniyor
            </div>
        </div> -->
    </div>
</template>

<script setup>

const props = defineProps({
    currentPage: Number,
    totalPages: Number,
    hideIcons: Boolean,
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