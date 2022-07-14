

const queryParams = ref({});
const resetRequested = ref(false)

const setQueryParams = (params = {}) => {
    window.scrollTo({top: 0, behavior: "smooth"})
    resetRequested.value = false,
    queryParams.value = params
}

const getQueryParams = () => {
    return queryParams;
}

const reset = () => {
    queryParams.value = {};
    resetRequested.value = true;
}

export default {
    setQueryParams, getQueryParams, resetRequested, reset,
}   