<template>
    <section class="relative group">
        <div class="md:flex gap-2 bg-gray-100 shadow rounded-xl">
            <div class="">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" alt=""
                    class="md:rounded-l-xl md:rounded-tr-none rounded-t-xl object-cover h-full w-full">
            </div>
            <div class="p-4 flex flex-col gap-4">
                <div class="">
                    <span>Orijinal:</span>
                    <div class="inline-flex items-center ">
                        <span class="font-bold pl-2 text-lg">
                            {{ movie.original_title }}
                        </span>
                        <myicon @click="Helpers.copy" icon="copy.svg" title="Kopyala" class="cursor-pointer pl-2" />
                    </div>
                    <div class="text-xs text-gray-500">
                        <span>Yayın Tarihi: </span>
                        <span>{{ new Date(movie.release_date).toLocaleDateString('tr-TR', {day: 'numeric', month: 'short', year: 'numeric'}) }}</span>
                    </div>
                    <div class="text-xs text-gray-500 pt-4 flex items-center gap-2">
                        <myicon icon="clock.svg" title="Süre" />
                        <span>{{ movie.runtime }} dakika </span>
                    </div>

                    <div class="text-xs text-gray-500 flex items-center pt-2">
                        <myicon class="pr-2 " icon-class="w-5" icon="lang.svg" />
                        <span v-for="(lang, index) in movie.spoken_languages">{{ lang.english_name + (movie.spoken_languages.length-1 == index ? '' : ', ') }}</span>
                    </div>
                    
                </div>
                
                <p class="flex-1">
                    <small class="text-gray-500 hover:text-gray-800">{{ movie.overview }}</small>
                </p>

                <div class="">
                    <div class="flex items-center text-xs text-red-600" title="Bütçe">
                        <myicon class="pl-1 pr-3" icon-class="w-1" icon="dollar.svg" />
                        <small v-if="movie.budget">{{ parseInt(movie.budget).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</small>
                        <small v-else class="text-gray-400">Bütçe bilgisi girilmemiş</small>
                    </div>
                    <div class="flex items-center text-xs text-green-600" title="Hasılat">
                        <myicon class="pr-2" icon-class="w-3" icon="dollar1.svg" />
                        <small v-if="movie.revenue">{{ parseInt(movie.revenue).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</small>
                        <small v-else class="text-gray-400">Hasılat bilgisi girilmemiş</small>
                    </div>
                    <div class="flex items-center pt-2">
                        <myicon class="pr-2 " icon-class="w-3" icon="link.svg" />
                        <small>
                            <a v-if="movie.homepage" target="_blank" :href="movie.homepage" class="hover:text-purple-600">{{ movie.homepage }}</a>
                            <span v-else class="text-gray-400">Filme ait bir site bulunmuyor</span>
                        </small>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div class="absolute top-0 right-0 -m-5 flex items-start">
            <div class="px-2 mt-3 mr-1 bg-purple-700 text-white rounded-xl">{{ movie.vote_count}} oy</div>
            <score-circle :score="movie.vote_average" />
        </div>

        <div class="w-9/12 md:w-6/12 mx-auto">
            <div class="px-2 pb-1 pt-2 flex justify-center items-center border rounded-b-lg">
                <div>
                    <scorestars :score="movie.vote_average" />
                </div>
            </div>
        </div>
    </section>
    {{ reviews }}
</template>

<script setup>
import Helpers from '~~/composables/Helpers';
import config from '~~/config';
const props = defineProps({
    movie: Object,
})


const reviews = await apiService.performFetch('/movie/453395/reviews');

</script>

<style lang="scss" scoped>

</style>