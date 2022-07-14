<template>
    <div class="fixed z-40 top-0 right-0 left-0 opacity-90 hover:opacity-100 ease-in duration-150 bg-transparent">
        <div class="shadow container mx-auto md:rounded-b-xl bg-gradient-to-r from-gray-800 to-slate-600">
            <div class="py-4 px-6 rounded-sm border-sky-300 flex flex-col md:flex-row md:justify-between items-center">
                <div class="flex gap-5 items-center">
                    <navlink name="Ana Sayfa" to="/" />
                    <navlink @click="resetFilters()" name="Keşfet" to="/discover" />
                    <!-- <navlink icon="assets/icon/movie.svg" name="Filmler" to="/movies" /> -->
                </div>
                <div class="flex items-center gap-2">
                    <searchbox />
                    <language-changer />
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