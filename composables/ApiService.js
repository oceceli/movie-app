import { api_key } from '@/keys' // kök dizine keys.json oluşturulup moviedatabase'den alınan key(v4) konulmalı
import Filters from './Filters';
import State from './State';

const base_url = "https://api.themoviedb.org/3";

const fetchDynamic = (path, additionalQuery) => {

    const target = base_url + path + '?' + Filters.queryParams + '&' + additionalQuery;
    
    console.log('ApiService: ' + target)

    return fetch(target, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_key
        },
    })
    .then(res => res.json())
    .catch(err => console.error(err))
}



const getDiscoverMovies = () => {
    return fetchDynamic('/discover/movie');
}

// kullanılmadı
const getPopularMovies = () => {
    return fetchDynamic('/movie/popular');
}
const getTopRated = () => {
    return fetchDynamic('/movie/top_rated');
}
const getWeeklyTrend = () => {
    return fetchDynamic('/trending/movie/week'); // day
}


const getSearch = () => {
    return fetchDynamic('/search/movie');
}

const showMovie = (id) => {
    return fetchDynamic('/movie/' + id);
}



const getGenres = () => {
    return fetchDynamic('/genre/movie/list');
}

// kullanılmadı
const getLangs = () => {
    return fetchDynamic('/configuration/languages');
}
const getRecommended = (movieID) => {
    return fetchDynamic(`/movie/${movieID}/recommendations`)
}
const getSimilarMovies = (movieID) => {
    return fetchDynamic(`/movie/${movieID}/similar`)
}
const getReviews = (movieID) => {
    return fetchDynamic(`/movie/${movieID}/reviews`)
}
const getVideos = (movieID) => {
    return fetchDynamic(`/movie/${movieID}/videos`)
}
const getInTheater = () => {
    return fetchDynamic(`/movie/now_playing`, 'region=tr')
}



const fetchData = () => {
    if(State.getSearch().value.length > 0)
        getSearch().then(fullfillData)
    else 
        getDiscoverMovies().then(fullfillData);
    
}


const fullfillData = (res) => {
    State.setData(res)
    State.setMovies(res.results)
}



export default {
    getDiscoverMovies, showMovie, getGenres, getSearch, fetchData, getLangs,
}