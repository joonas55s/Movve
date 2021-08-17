import axios from 'axios';


const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2RmNTJkOTQwOTYwZjIzOGE0ZmI2MjljN2Y1MDJjYyIsInN1YiI6IjYwZmM0MGE3ODQ4ZWI5MDA0OTRiZmVkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-I04QRA5SM3cKJwk0VM1GAk6HuetHaadK14-uIjB2Rw"

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
});

api.defaults.headers.authorization =`Bearer ${token}`;
api.defaults.params = {api_key:'83df52d940960f238a4fb629c7f502cc',language:'pt-br'};

const posterUrlBase = 'https://image.tmdb.org/t/p/w500/';
const backdropImage = 'http://image.tmdb.org/t/p/w1280';
export  {api,posterUrlBase,backdropImage};