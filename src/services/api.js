import axios from "axios";

export const api = axios.create({
    baseURL: "https://app-rocketmovies-api.onrender.com"
});