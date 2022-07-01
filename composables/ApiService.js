import { api_key } from '@/keys' // kök dizine keys.json oluşturulup moviedatabase'den alınan key(v4) konulmalı
const base_url = "https://api.themoviedb.org/3";

const fetchDynamic = (target_url) => {
    return fetch(base_url + target_url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_key
        },
    })
    .then(res => res.json())
    .catch(err => console.error(err))
}

const getDiscoverMovies = (queryString) => {
    return fetchDynamic('/discover/movie' + queryString);
}

const showMovie = (id) => {
    return fetchDynamic('/movie/' + id);
}

const getGenres = () => {
    return fetchDynamic('/genre/movie/list');
}

const getSearch = (searchText) => {
    return fetchDynamic('/search/keyword?query=' + searchText);
}

export default {
    getDiscoverMovies, showMovie, getGenres, getSearch,
}