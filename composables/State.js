import Filters from "./Filters";

const search = ref('');

const setSearch = (value) => {
    search.value = value;
    Filters.queryParams.set('query', value)
    localStorage.setItem('search', value)
}
const getSearch = () => {
    return search;
}


const page = ref(1);

const setPage = (value) => {
    page.value = value;
}
const getPage = () => {
    return page.value;
}


// const movies = ref([]);
// const setMovies = (payload) => {
//     movies.value = payload
// }
// const getMovies = () => {
//     return movies;
// }


// const data = ref({});
// const setData = payload => {
//     data.value = payload;
// }
// const getData = () => {
//     return data;
// }


const genres = ref([]);
const setGenres = payload => {
    genres.value = payload;
}
const getGenres = () => {
    return genres;
}


export default {
    setSearch, getSearch, getPage, setPage, setGenres, getGenres,
}