import axios from 'axios'

const THE_MOVIE_AOI_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmUzMmM3MDc1ODQ4ZGM3ODVlOTY4MGJjZmNiZDk1MCIsIm5iZiI6MTc0MTU5NzQ2OS42NzI5OTk5LCJzdWIiOiI2N2NlYWIxZDc1YzlmMWJkMTJlMzAzNTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RJtzzh3y30QcWByufRTbXiEt8qQ4w45NxuATHSDyxPk'


export const movieAPIInstance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    responseType : "json",
    headers : {
        Authorization : `Bearer ${THE_MOVIE_AOI_TOKEN}`
    },
})