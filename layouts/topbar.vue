<template>
    <div class="shadow bg-gradient-to-r from-green-50 via-purple-300 to-emerald-300">
        <div class="p-4 rounded-sm border-sky-300 hover:border-sky-500 flex justify-between">
            <div class="flex gap-5 items-center">
                <navlink icon="assets/icon/home.svg" name="Ana Sayfa" to="/" />
                <navlink icon="assets/icon/movie.svg" name="Filmler" to="/movies" />
            </div>
            <!-- <div>sdf</div> -->
        </div>
    </div>
</template>

<script setup>
import { Navlink } from '~~/.nuxt/components';
</script>