<template>
    <div class="fixed z-40 top-0 right-0 left-0 ">
        <div class="shadow-sm border container mx-auto md:rounded-b-xl hover:border-purple-300 bg-white">
            <div class="py-4 rounded-sm border-sky-300 flex flex-col md:flex-row md:justify-around items-center ">
                <div class="flex gap-5 items-center">
                    <navlink icon="home.svg" name="Ana Sayfa" to="/" />
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
</script>