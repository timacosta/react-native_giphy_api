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
    const url = `/trending?api-key=${APIKEY}`
    
    console.log(url)
    return axiosInstance.get(url)
}


