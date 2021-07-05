import axios from 'axios'

// const urlNewSession = 'https://api.themoviedb.org/3/authentication/session/new';
const BASE_URL = 'https://api.themoviedb.org/3'; //https://api.themoviedb.org/3/
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTRiM2Y0MmU4ZjJhYTAwNTFiOTEyZDQzMDU3NzFjNSIsInN1YiI6IjYwYjk2NjQ0Y2QyZjBmMDA1OWY4M2U2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OVCbJhE0LVpD8xODPylkC0PLHQUGQBL7_40T69vg8w';

export const THE_MOVIE_DB = axios.create({
    headers: {
      Authorization:
        "Bearer " + TOKEN,
    },
    baseURL: BASE_URL,
});