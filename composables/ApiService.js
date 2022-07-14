import config from '~~/config';

const baseFetch = (fetchPath, params = {}) => {
    return $fetch(fetchPath, {
        baseURL: config.api_base_url,
        params: {...params, ...filters.getQueryParams().value, language: "tr-TR"},
        headers: config.headers,
    })
}

// kullanılmadı
// const getReviews = (movieID) => {
//     return fetchDynamic(`/movie/${movieID}/reviews`)
// }
// const getVideos = (movieID) => {
//     return fetchDynamic(`/movie/${movieID}/videos`)
// }
// const getInTheater = () => {
//     return fetchDynamic(`/movie/now_playing`, 'region=tr')
// }




export default {
    baseFetch
}

