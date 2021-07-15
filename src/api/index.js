import axios from 'axios';
import {API_URL, API_KEY} from '../config/api'

const axiosInstance = axios.create({
    baseUrl: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Api-Key': API_KEY
    }
});

export const getTrendGifs = () => {
    const limit = 24
    const offset = 100
    const url = `/trending?${APIKEY}&limit=${limit}&offset=${offset}`
    return axiosInstance.get(url)
}
