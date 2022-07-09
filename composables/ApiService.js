import config from '~~/config';



const baseFetch = (fetchPath, params = {}) => {
    return $fetch(fetchPath, {
        baseURL: config.api_base_url,
        params: params,
        headers: config.headers,
    })
}

// const getGenres = () => {
//     return fetchDynamic('/genre/movie/list');
// }

// kullanılmadı
const getLangs = () => {
    return fetchDynamic('/configuration/languages');
}
// const getRecommended = (movieID) => {
//     return fetchDynamic(`/movie/${movieID}/recommendations`)
// }
// const getSimilarMovies = (movieID) => {
//     // console.log(movieID);
//     return fetchDynamic(`/movie/${movieID}/similar`)
// }
// const getReviews = (movieID) => {
//     return fetchDynamic(`/movie/${movieID}/reviews`)
// }
const getVideos = (movieID) => {
    return fetchDynamic(`/movie/${movieID}/videos`)
}
const getInTheater = () => {
    return fetchDynamic(`/movie/now_playing`, 'region=tr')
}




export default {
    getLangs, baseFetch
}

