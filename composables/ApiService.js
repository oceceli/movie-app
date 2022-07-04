import Filters from './Filters';
import State from './State';
import config from '~~/config';


const fetchDynamic = (path, additionalQuery = '') => {
    const target = config.api_base_url + path + '?' + Filters.queryParams + '&' + additionalQuery;
    console.log('ApiService: ' + target)
    return fetch(target, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + config.api_token
        },
    })
        .then(res => res.json())
        .catch(err => console.error(err))
}

// const performFetcha = (path, params = {}, callback = () => {}) => {
//     if(callback instanceof Function) callback();
//     return useFetch(() => path, {
//         baseURL: config.api_base_url,
//         params: params,
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + config.api_token
//         },
//     })
// }

// const performFetch = (path, params = {}, callback = () => { }) => {
//     return useLazyAsyncData(path, () => {
//         if (callback instanceof Function) callback();
//         return $fetch(path, {
//             baseURL: config.api_base_url,
//             params: params,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + config.api_token
//             },

//         })
//     })
// }



const getDiscoverMovies = () => {
    return fetchDynamic(config.endpoints.discover);
}

// kullanılmadı
const getPopularMovies = () => {
    return fetchDynamic(config.endpoints.popular);
}
const getTopRated = () => {
    return fetchDynamic(config.endpoints.top_rated);
}
const getWeeklyTrend = () => {
    return fetchDynamic(config.endpoints.weekly_trend); // day
}


const getSearch = () => {
    return fetchDynamic(config.endpoints.search);
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
    // console.log(movieID);
    return fetchDynamic(`/movie/${movieID}/similar`)
}
// const getReviews = (movieID) => {
//     return fetchDynamic(`/movie/${movieID}/reviews`)
// }
const getVideos = (movieID) => {
    return fetchDynamic(`/movie/${movieID}/videos`)
}
const getInTheater = () => {
    return fetchDynamic(`/movie/now_playing`, 'region=tr')
}



const fetchData = () => {
    if (State.getSearch().value.length > 0)
        getSearch().then(fullfillData)
    else
        getDiscoverMovies().then(fullfillData);

}
const fullfillData = (res) => {
    State.setData(res)
    State.setMovies(res.results)
}



export default {
    getDiscoverMovies, showMovie, getGenres, getSearch, fetchData, getLangs, getSimilarMovies,
}

