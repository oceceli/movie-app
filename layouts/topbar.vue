<template>
    <!-- <div class="shadow border bg-gradient-to-r from-green-50 via-purple-300 to-emerald-300"> -->
    <div class="shadow border">
        <div class="p-4 rounded-sm border-sky-300  flex justify-between items-center">
            <div class="flex gap-5 items-center">
                <navlink icon="/assets/icon/home.svg" name="Ana Sayfa" to="/" />
                <!-- <navlink icon="assets/icon/movie.svg" name="Filmler" to="/movies" /> -->
            </div>
            <div>
                <searchbox />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Navlink } from '~~/.nuxt/components';
</script>