import axios from 'axios';
import {BASE_URL, API_KEY} from '../config/api'
import qs from 'qs'


const axiosInstance = axios.create({
    baseUrl: BASE_URL,
    headers: {'Content-Type': 'application/json'}
    
});

export const getTrendGifs = () => {
    const url = `/trending?api_key=${API_KEY}`
    console.log(`${BASE_URL}${url}`);
    return axiosInstance.get(url)
}


    



