<template>
    <div class="fixed z-40 top-0 right-0 left-0 opacity-90 hover:opacity-100 ease-in duration-150 bg-transparent">
        <div class="shadow container mx-auto md:rounded-b-xl bg-gradient-to-r from-gray-800 to-slate-600">
            <div class="py-4 px-6 rounded-sm border-sky-300 flex flex-col md:flex-row md:justify-between items-center">
                <div class="flex gap-5 items-center">
                    <navlink @click="resetFilters()" icon="home.svg" name="Ana Sayfa" to="/" />
                    <!-- <navlink icon="assets/icon/movie.svg" name="Filmler" to="/movies" /> -->
                </div>
                <div>
                    <searchbox />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Navlink } from '~~/.nuxt/components';

const resetFilters = () => {
    console.log("Topbar: Filtreleri sıfırlamalı mıyım?")
}
</script>