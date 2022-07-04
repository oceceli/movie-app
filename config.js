import { api_token } from '@/keys' // kök dizine keys.json oluşturulup moviedatabase'den alınan key(v4) konulmalı
export default {
    app_name: '@oceceli',
    api_base_url: 'https://api.themoviedb.org/3',
    // api_token: api_token,

    endpoints: {
        discover: "/discover/movie",
        search: "/search/movie",
        popular: "/movie/popular",
        top_rated: "/movie/top_rated",
        weekly_trend: "/trending/movie/week",
    },
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + api_token
    }
};