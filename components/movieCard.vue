<template>
    <div class="border border-dashed hover:border-gray-300 hover:border-solid rounded-xl flex flex-col group max-h-fit bg-white">
        
        <div class="p-4 flex-1 flex flex-col gap-4 justify-cesnter items-center max-w-xs max-h-max">

            <div class="w-72 shadow-md group-hover:shadow-xl group-hover:scale-105 hover:-rotate-12 duration-100 ease-in-out max-w-max relative rounded-xl">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" alt="" class="rounded-xl object-center object-cover" >
                <div class="absolute top-0 left-0 -m-4">
                    <score-circle :score="movie.vote_average" />
                </div>
            </div>

            <div class="leading-1 font-bold text-xl flex items-center gap-2 pt-2">
                <span class="hover:text-purple-600">{{ movie.title }}</span>
                <myicon @click="Helpers.copy" icon="copy.svg" title="Kopyala" class="cursor-pointer" />
            </div>

            <div>
                <scorestars :score="movie.vote_average" />
            </div>

            <div class="border-t p-2 text-center font-thin text-gray-700 selection:bg-purple-600 selection:text-white first-letter:text-xl  first-letter:font-bold ">{{ movie.overview.slice(0,275) }}...</div>

        </div>

        <!-- <div class="p-4">
            <span class="text-xs text-gray-300 font-semibold">test</span>
        </div> -->

        <div @click="goTo()" class="bg-black opacity-80 hover:opacity-100 rounded-b-xl p-2 flex items-center justify-center cursor-pointer">
            <span class="text-white text-lg font-bold">İncele</span>
        </div>

    </div>
</template>

<script setup>
import Helpers from '~~/composables/Helpers';

const props = defineProps({
    movie: Object,
});

const goTo = () => {
    return navigateTo({
        path: `/show/${props.movie.id}`,
    })
}

    
</script>
