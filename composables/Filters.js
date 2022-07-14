
const currentLang = ref('tr-TR')

const queryParams = ref({ language: currentLang.value });
const resetRequested = ref(false)

const setQueryParams = (params = {}) => {
    if(params.language) currentLang.value = params.language
    window.scrollTo({top: 0, behavior: "smooth"})
    resetRequested.value = false,
    queryParams.value = params
}

const getQueryParams = () => {
    return queryParams;
}

const reset = () => {
    queryParams.value = {language: currentLang.value};
    resetRequested.value = true;
}


export default {
    setQueryParams, getQueryParams, resetRequested, reset,
}   