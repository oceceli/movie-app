<template>
    <section class="container mx-auto mb-28 mt-8 overflow-x-hidden md:p-4">
        <div class="flex flex-col gap-20">
            <presets-template v-if="!now_playing_loading" :movies="now_playing.results" :loading="now_playing_loading" title="Sinemalarda" />
            <presets-template v-if="!weekly_trend_loading" :movies="weekly_trend.results" :loading="weekly_trend_loading" title="Haftanın Trendleri" />
            <presets-template v-if="!top_rated_loading" :movies="top_rated.results" :loading="top_rated_loading" title="Tüm Zamanların En İyileri" />
        </div>
    </section>
</template>

<script setup>
import { ENDPOINTS } from '@/data/consts'

onMounted(() => {
    useHead({ title: '' })
})


const { data: now_playing, pending: now_playing_loading, refresh: rNowPlaying } = await useLazyAsyncData('now_playing', () => {
    return apiService.baseFetch(ENDPOINTS.now_playing);
})
// const { data: now_playing, pending: now_playing_loading, refresh: rNowPlaying } = await apiService.baseFetch(ENDPOINTS.now_playing);

const { data: weekly_trend, pending: weekly_trend_loading, refresh: rWeeklyTrend } = await useLazyAsyncData('weekly_trend', () => {
    return apiService.baseFetch(ENDPOINTS.weekly_trend);
})
// const { data: weekly_trend, pending: weekly_trend_loading, refresh: rWeeklyTrend } = await apiService.baseFetch(ENDPOINTS.weekly_trend);

const { data:top_rated, pending:top_rated_loading, refresh: rTopRated } = await useLazyAsyncData('top_rated', () => {
    return apiService.baseFetch(ENDPOINTS.top_rated);
})
// const { data:top_rated, pending:top_rated_loading, refresh: rTopRated } = await apiService.baseFetch(ENDPOINTS.top_rated);

watch(filters.getQueryParams(), () => {
    rNowPlaying()
    rWeeklyTrend()
    rTopRated()
})

</script>