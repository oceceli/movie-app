import { API_BASE_URL } from '~~/data/consts'

const baseFetch = (fetchPath, params = {}) => {
    return $fetch(fetchPath, {
        baseURL: API_BASE_URL,
        params: { ...params, ...filters.getQueryParams().value, language: useCookie('lang').value ?? 'tr-TR', include_adult: false },
        headers: {
            'Authorization': 'Bearer ' + useRuntimeConfig().API_TOKEN
        },
    })

}

export default {
    baseFetch
}
