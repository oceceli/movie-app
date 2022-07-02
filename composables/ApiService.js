import { api_key } from '@/keys' // kök dizine keys.json oluşturulup moviedatabase'den alınan key(v4) konulmalı
import Filters from './Filters';
import State from './State';

const base_url = "https://api.themoviedb.org/3";

const fetchDynamic = (target_url) => {
    const target = base_url + target_url + '?' + Filters.queryParams;
    
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

const showMovie = (id) => {
    return fetchDynamic('/movie/' + id);
}

const getGenres = () => {
    return fetchDynamic('/genre/movie/list');
}

const getSearch = () => {
    return fetchDynamic('/search/movie');
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
    getDiscoverMovies, showMovie, getGenres, getSearch, fetchData
}