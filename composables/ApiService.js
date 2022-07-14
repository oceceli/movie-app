import config from '~~/config';

const baseFetch = (fetchPath, params = {}) => {
    return $fetch(fetchPath, {
        baseURL: config.api_base_url,
        params: {...params, ...filters.getQueryParams().value},
        headers: config.headers,
    })
}

// kullanılmadı
// const getReviews = (movieID) => {
//     return fetchDynamic(`/movie/${movieID}/reviews`)
// }


export default {
    baseFetch
}

