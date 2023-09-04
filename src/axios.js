import axios from "axios";

/** base URL to make request from the movie database */

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

//https//api.themoviedb.org/3/foo-bar

export default instance;